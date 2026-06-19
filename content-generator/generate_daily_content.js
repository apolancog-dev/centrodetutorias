#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const { renderCampaign } = require("./lib/svg_renderer");

const ROOT = __dirname;
const OUTPUT_ROOT = path.join(ROOT, "output");
const CONFIG_PATH = path.join(ROOT, "config.json");
const LIBRARY_PATH = path.join(ROOT, "content_library.json");
const HISTORY_PATH = path.join(ROOT, "content_history.json");

function readJson(file) {
  return JSON.parse(fs.readFileSync(file, "utf8"));
}

function writeJson(file, value) {
  fs.writeFileSync(file, `${JSON.stringify(value, null, 2)}\n`, "utf8");
}

function parseArgs(argv) {
  const args = { date: null, theme: null, force: false, noHistory: false };
  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === "--date") args.date = argv[++i];
    else if (arg === "--theme") args.theme = argv[++i];
    else if (arg === "--force") args.force = true;
    else if (arg === "--no-history") args.noHistory = true;
    else if (arg === "--help" || arg === "-h") args.help = true;
    else throw new Error(`Argumento desconocido: ${arg}`);
  }
  return args;
}

function localDateString(timeZone) {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).formatToParts(new Date());
  const map = Object.fromEntries(parts.map((part) => [part.type, part.value]));
  return `${map.year}-${map.month}-${map.day}`;
}

function assertDate(value) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) {
    throw new Error(`Fecha inválida: ${value}. Usa YYYY-MM-DD.`);
  }
  const date = new Date(`${value}T12:00:00Z`);
  if (Number.isNaN(date.getTime())) throw new Error(`Fecha inválida: ${value}`);
}

function stableIndex(seed, length) {
  const digest = crypto.createHash("sha256").update(seed).digest();
  return digest.readUInt32BE(0) % length;
}

function chooseTheme(date, manualId, config, library, history) {
  const active = library.filter((theme) => config.generation.activeThemes.includes(theme.id));
  if (!active.length) throw new Error("No hay temas activos en config.json.");
  if (manualId) {
    const manual = active.find((theme) => theme.id === manualId);
    if (!manual) throw new Error(`Tema no disponible: ${manualId}`);
    return manual;
  }

  const recent = [...history.generated]
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, config.generation.avoidRecentThemes)
    .map((entry) => entry.themeId);
  const candidates = active.filter((theme) => !recent.includes(theme.id));
  const pool = candidates.length ? candidates : active;
  return pool[stableIndex(date, pool.length)];
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function replaceTokens(template, values) {
  return template.replace(/{{\s*([\w.-]+)\s*}}/g, (_, key) => {
    if (!(key in values)) throw new Error(`Falta valor para {{${key}}}`);
    return values[key];
  });
}

function wordCount(text) {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

function validateCopy(theme) {
  const ranges = [
    ["headline", theme.headline, 8, 12],
    ["subtitle", theme.subtitle, 12, 22],
    ["cta", theme.cta, 3, 6]
  ];
  for (const [name, text, min, max] of ranges) {
    const count = wordCount(text);
    if (count < min || count > max) {
      throw new Error(`${name} tiene ${count} palabras; debe tener entre ${min} y ${max}: ${text}`);
    }
  }
}

function phoneDigits(phone) {
  return String(phone || "").replace(/\D/g, "");
}

function buildCopy(date, theme, config) {
  const brand = config.brand;
  const digits = phoneDigits(brand.whatsapp);
  const hashtags = [
    "#CentroDeTutorías",
    "#TutoríasPersonalizadas",
    "#Matemática",
    "#ApoyoAcadémico",
    theme.subject.includes("Estadística") ? "#Estadística" : "#Educación"
  ];
  const whatsappMessage = `Hola, vi la publicación de Centro de Tutorías sobre ${theme.name.toLowerCase()} y quisiera información sobre una clase modelo o diagnóstico académico.`;

  return {
    fecha: date,
    tema_del_dia: theme.name,
    tema_id: theme.id,
    materia_prioritaria: theme.subject,
    dolor_del_cliente: theme.pain,
    headline_principal: theme.headline,
    subtitulo: theme.subtitle,
    texto_corto_imagen: theme.shortText,
    caption_instagram: `${theme.headline}\n\n${theme.pain}\n\n${theme.approach}\n\n${theme.cta}. Visita ${brand.url} o escríbenos por WhatsApp.\n\n${hashtags.join(" ")}`,
    caption_facebook: `${theme.headline}\n\n${theme.insight}\n\nEn ${brand.name}, ${theme.approach.charAt(0).toLowerCase()}${theme.approach.slice(1)}\n\n${theme.cta}: ${brand.url}\nWhatsApp: ${brand.whatsapp}`,
    texto_tiktok: `${theme.shortText} ${theme.cta}. ${hashtags.slice(0, 4).join(" ")}`,
    hashtags,
    cta_principal: theme.cta,
    cta_secundario: theme.secondaryCta,
    url_destino: brand.url,
    whatsapp: brand.whatsapp,
    whatsapp_link: digits ? `https://wa.me/${digits}?text=${encodeURIComponent(whatsappMessage)}` : "",
    mensaje_whatsapp_sugerido: whatsappMessage,
    alt_text: `Pieza de ${brand.name} sobre ${theme.name.toLowerCase()}. ${theme.headline}. Imagen de un estudiante en un ambiente de estudio y llamado a la acción: ${theme.cta}.`,
    carrusel: [
      { slide: 1, role: "gancho", title: theme.headline, body: theme.subtitle },
      { slide: 2, role: "problema", title: "Lo que suele estar pasando", body: theme.insight },
      { slide: 3, role: "orientación", title: "Un mejor punto de partida", body: "Identificar la dificultad, ajustar la explicación y practicar con retroalimentación." },
      { slide: 4, role: "solución", title: "Cómo acompañamos", body: theme.approach },
      { slide: 5, role: "cta", title: "El apoyo correcto puede empezar hoy", body: `${theme.cta}. Descubre una tutoría enfocada en lo que realmente necesita.` }
    ]
  };
}

function brandBlock(config) {
  const logoSrc = `../../${config.brand.logo}`;
  return `<div class="brand"><img class="brand-mark" src="${logoSrc}" alt="Logo"><span>${escapeHtml(config.brand.name)}</span></div>`;
}

function footerBlock(config) {
  return `<div class="footer"><span class="footer-url">${escapeHtml(config.brand.displayUrl)}</span><span class="wa"><span class="wa-icon"></span>${escapeHtml(config.brand.whatsappLabel)}</span></div>`;
}

function carouselContent(index, theme, copy, config, imagePath) {
  const brand = brandBlock(config);
  const slideNumber = `<div class="slide-number">${index}/5</div>`;
  const bottom = `<div class="bottom"><span>${escapeHtml(config.brand.displayUrl)}</span><span>Desliza →</span></div>`;

  if (index === 1) {
    return {
      className: "cover",
      title: theme.headline,
      html: `<img class="photo" src="${imagePath}" alt=""><div class="overlay"></div><div class="cover-copy">${brand}${slideNumber}<div class="content"><div class="kicker">${escapeHtml(theme.name)}</div><h2>${escapeHtml(theme.headline)}</h2><p>${escapeHtml(theme.subtitle)}</p></div>${bottom}</div>`
    };
  }
  if (index === 2) {
    return {
      className: "problem",
      title: "Lo que suele estar pasando",
      html: `${brand}${slideNumber}<div class="content"><div class="kicker">Antes de exigir más horas</div><h2>Lo que suele estar pasando</h2><p>${escapeHtml(theme.insight)}</p></div>${bottom}`
    };
  }
  if (index === 3) {
    return {
      className: "steps",
      title: "Un mejor punto de partida",
      html: `${brand}${slideNumber}<div class="content"><div class="kicker">Una ruta más clara</div><h2>Un mejor punto de partida</h2><div class="step-list"><div class="step"><strong>1</strong><span>Identificar la dificultad exacta, no solamente la nota.</span></div><div class="step"><strong>2</strong><span>Explicar desde el nivel real del estudiante y a su ritmo.</span></div><div class="step"><strong>3</strong><span>Practicar ${escapeHtml(theme.subject)} con retroalimentación clara.</span></div></div></div>${bottom}`
    };
  }
  if (index === 4) {
    return {
      className: "approach",
      title: "Cómo acompañamos",
      html: `${brand}${slideNumber}<div class="content"><div class="kicker">Tutoría personalizada</div><h2>Cómo acompañamos</h2><div class="accent-rule"></div><p>${escapeHtml(theme.approach)}</p></div>${bottom}`
    };
  }
  return {
    className: "final",
    title: "El apoyo correcto puede empezar hoy",
    html: `${brand}${slideNumber}<div class="content"><div class="kicker">Centro de Tutorías</div><h2>El apoyo correcto puede empezar hoy</h2><p>${escapeHtml(copy.carrusel[4].body)}</p><div class="cta">${escapeHtml(theme.cta)} <span class="cta-arrow">→</span></div></div><div class="bottom"><span>${escapeHtml(config.brand.url)}</span><span>${escapeHtml(config.brand.whatsapp)}</span></div>`
  };
}

function buildSourceHtml(theme, copy, config) {
  const cssTemplate = fs.readFileSync(path.join(ROOT, "templates", "styles.css"), "utf8");
  const colorValues = Object.fromEntries(Object.entries(config.colors).map(([key, value]) => [`color.${key}`, value]));
  const css = replaceTokens(cssTemplate, colorValues);
  const imagePath = `../../assets/backgrounds/${theme.image}`;
  const shared = {
    brandBlock: brandBlock(config),
    footerBlock: footerBlock(config),
    themeName: escapeHtml(theme.name),
    headline: escapeHtml(theme.headline),
    subtitle: escapeHtml(theme.subtitle),
    cta: escapeHtml(theme.cta),
    displayUrl: escapeHtml(config.brand.displayUrl),
    altText: escapeHtml(copy.alt_text),
    imagePath
  };
  const sections = ["vertical.html", "feed-square.html", "feed-portrait.html"].map((name) => {
    const template = fs.readFileSync(path.join(ROOT, "templates", name), "utf8");
    return replaceTokens(template, shared);
  });
  const carouselTemplate = fs.readFileSync(path.join(ROOT, "templates", "carousel-slide.html"), "utf8");
  for (let index = 1; index <= config.generation.carouselSlides; index += 1) {
    const slide = carouselContent(index, theme, copy, config, imagePath);
    sections.push(replaceTokens(carouselTemplate, {
      index: String(index).padStart(2, "0"),
      className: slide.className,
      title: escapeHtml(slide.title),
      slideContent: slide.html
    }));
  }

  return `<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>${escapeHtml(config.brand.name)} · ${escapeHtml(copy.fecha)}</title>
  <style>${css}</style>
</head>
<body>
${sections.join("\n")}
</body>
</html>\n`;
}

function sha256(file) {
  return crypto.createHash("sha256").update(fs.readFileSync(file)).digest("hex");
}

function buildManifest(date, theme, outputDir) {
  const relativeFiles = [
    "vertical_1080x1920.png",
    "feed_1080x1080.png",
    "feed_1080x1350.png",
    "source.html",
    "copy.json",
    ...Array.from({ length: 5 }, (_, index) => `carousel/slide_${String(index + 1).padStart(2, "0")}_1080x1350.png`)
  ];
  return {
    version: 1,
    generatedAt: new Date().toISOString(),
    date,
    themeId: theme.id,
    themeName: theme.name,
    status: "ready_for_human_review",
    publishing: "disabled",
    files: relativeFiles.map((relativePath) => {
      const file = path.join(outputDir, relativePath);
      return { path: relativePath, bytes: fs.statSync(file).size, sha256: sha256(file) };
    })
  };
}

function updateHistory(history, entry) {
  history.generated = history.generated.filter((item) => item.date !== entry.date);
  history.generated.push(entry);
  history.generated.sort((a, b) => a.date.localeCompare(b.date));
  return history;
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  if (args.help) {
    console.log("Uso: node generate_daily_content.js [--date YYYY-MM-DD] [--theme ID] [--force] [--no-history]");
    return;
  }
  const config = readJson(CONFIG_PATH);
  const library = readJson(LIBRARY_PATH);
  const history = readJson(HISTORY_PATH);
  const date = args.date || localDateString(config.generation.timezone);
  assertDate(date);
  const outputDir = path.join(OUTPUT_ROOT, date);
  const manifestPath = path.join(outputDir, "manifest.json");
  if (fs.existsSync(manifestPath) && !args.force) {
    console.log(`La campaña ${date} ya existe. Usa --force para regenerarla.`);
    return;
  }

  const theme = chooseTheme(date, args.theme, config, library, history);
  validateCopy(theme);
  const copy = buildCopy(date, theme, config);
  fs.mkdirSync(outputDir, { recursive: true });
  const sourcePath = path.join(outputDir, "source.html");
  fs.writeFileSync(sourcePath, buildSourceHtml(theme, copy, config), "utf8");
  writeJson(path.join(outputDir, "copy.json"), copy);
  await renderCampaign({
    theme,
    copy,
    config,
    photoPath: path.join(ROOT, "assets", "backgrounds", theme.image),
    outputDir
  });
  const manifest = buildManifest(date, theme, outputDir);
  writeJson(manifestPath, manifest);

  if (!args.noHistory) {
    updateHistory(history, {
      date,
      themeId: theme.id,
      themeName: theme.name,
      subject: theme.subject,
      output: path.relative(ROOT, outputDir),
      generatedAt: manifest.generatedAt
    });
    writeJson(HISTORY_PATH, history);
  }
  console.log(JSON.stringify({ date, theme: theme.id, outputDir, files: manifest.files.length }, null, 2));
}

main().catch((error) => {
  console.error(error.stack || error.message);
  process.exitCode = 1;
});
