"use strict";

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const EDGE_TTS_PATH = "/Users/antoniopolanco/Library/Python/3.9/bin/edge-tts";

function getAudioDuration(audioPath) {
  try {
    const output = execSync(
      `ffprobe -v error -show_entries format=duration -of default=noprint_wrappers=1:nokey=1 "${audioPath}"`
    );
    return parseFloat(output.toString().trim());
  } catch (error) {
    console.error("Error al obtener duración del audio con ffprobe:", error);
    return 4.0; // fallback a 4 segundos
  }
}

async function generateVideo({ theme, copy, config, outputDir }) {
  console.log("Iniciando generación de video vertical...");
  
  const vVideoSlidesDir = path.join(outputDir, "video_slides");
  const tempDir = path.join(outputDir, "temp_video");
  fs.mkdirSync(tempDir, { recursive: true });

  const voice = config.generation.ttsVoice || "es-MX-JorgeNeural";
  const bgMusicPath = path.join(__dirname, "..", "assets", "music", "bg_music.mp3");

  const slideTexts = [
    `${theme.headline}. ${theme.subtitle}`,
    `Lo que suele estar pasando. ${theme.insight}`,
    `Un mejor punto de partida. Primero, identificar la dificultad exacta, no solamente la nota. Segundo, explicar desde el nivel real del estudiante y a su ritmo. Tercero, practicar con retroalimentación clara.`,
    `Cómo acompañamos. ${theme.approach}`,
    `El apoyo correcto puede empezar hoy. ${copy.carrusel[4].body}. ${theme.cta}.`
  ];

  const clipPaths = [];
  const listFileContent = [];

  for (let i = 0; i < 5; i++) {
    const slideIndex = i + 1;
    const slideNum = String(slideIndex).padStart(2, "0");
    const imagePath = path.join(vVideoSlidesDir, `slide_${slideNum}_1080x1920.png`);
    const tempAudio = path.join(tempDir, `voice_${slideNum}.mp3`);
    const tempClip = path.join(tempDir, `clip_${slideNum}.mp4`);

    console.log(`[Slide ${slideIndex}/5] Generando locución...`);
    // Generar audio con edge-tts
    execSync(
      `"${EDGE_TTS_PATH}" --voice "${voice}" --text "${slideTexts[i].replace(/"/g, '\\"')}" --write-media "${tempAudio}"`
    );

    // Obtener duración
    const duration = getAudioDuration(tempAudio) + 0.5; // Agrega 0.5s de holgura
    console.log(`[Slide ${slideIndex}/5] Duración calculada: ${duration}s. Creando clip de video...`);

    // Crear clip de video a partir de imagen y audio
    // Usamos libx264, yuv420p para compatibilidad con TikTok e Instagram
    execSync(
      `ffmpeg -y -loop 1 -i "${imagePath}" -i "${tempAudio}" -c:v libx264 -t ${duration} -pix_fmt yuv420p -vf scale=1080:1920 -c:a aac -b:a 128k "${tempClip}" -v quiet`
    );

    clipPaths.push(tempClip);
    listFileContent.push(`file '${path.relative(outputDir, tempClip)}'`);
  }

  // Escribir archivo de lista para concatenación
  const listFilePath = path.join(outputDir, "concat_list.txt");
  fs.writeFileSync(listFilePath, listFileContent.join("\n"), "utf8");

  const concatVideo = path.join(tempDir, "concatenated.mp4");
  console.log("Concatenando clips de diapositivas...");
  execSync(
    `ffmpeg -y -f concat -safe 0 -i "${listFilePath}" -c copy "${concatVideo}" -v quiet`
  );

  // Obtener duración total del video concatenado
  const totalDuration = getAudioDuration(concatVideo);
  console.log(`Video concatenado listo. Duración total: ${totalDuration}s. Mezclando música de fondo...`);

  // Mezclar música de fondo
  // Bajamos el volumen de la música (ej. a 0.08) para que no eclipse la voz en off
  // Hacemos fade out de la música al final
  const finalVideoPath = path.join(outputDir, "vertical_video.mp4");
  if (fs.existsSync(bgMusicPath)) {
    execSync(
      `ffmpeg -y -i "${concatVideo}" -i "${bgMusicPath}" -filter_complex "[1:a]volume=0.08,afade=t=out:st=${totalDuration - 2}:d=2[music];[0:a][music]amix=inputs=2:duration=first[audio]" -map 0:v -map "[audio]" -c:v copy -c:a aac -b:a 128k -t ${totalDuration} "${finalVideoPath}" -v quiet`
    );
  } else {
    console.log("Música de fondo no encontrada, exportando video solo con locución...");
    fs.copyFileSync(concatVideo, finalVideoPath);
  }

  // Limpiar temporales
  try {
    fs.rmSync(tempDir, { recursive: true, force: true });
    fs.unlinkSync(listFilePath);
  } catch (e) {
    console.error("Error al limpiar archivos temporales:", e);
  }

  console.log(`Video final creado con éxito en: ${finalVideoPath}`);
}

module.exports = { generateVideo };
