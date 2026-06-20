"use strict";

const fs = require("fs");
const path = require("path");

function loadSharp() {
  try { return require("sharp"); } catch (error) {
    const bundled = path.join(process.env.HOME || "", ".cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/sharp");
    if (fs.existsSync(bundled)) return require(bundled);
    throw new Error("Sharp no está instalado. Ejecuta: npm install");
  }
}

function esc(value) {
  return String(value).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");
}

function wrap(text, maxChars) {
  const lines = [];
  let line = "";
  for (const word of String(text).split(/\s+/)) {
    const candidate = line ? `${line} ${word}` : word;
    if (candidate.length <= maxChars || !line) line = candidate;
    else { lines.push(line); line = word; }
  }
  if (line) lines.push(line);
  return lines;
}

function textLines(text, x, y, options = {}) {
  const { size = 48, weight = 700, fill = "#14213D", maxChars = 28, lineHeight = 1.12, anchor = "start", maxLines = 8 } = options;
  const lines = wrap(text, maxChars).slice(0, maxLines);
  return `<text x="${x}" y="${y}" fill="${fill}" font-family="Avenir, Helvetica Neue, Arial, sans-serif" font-size="${size}" font-weight="${weight}" text-anchor="${anchor}">${lines.map((line, index) => `<tspan x="${x}" dy="${index === 0 ? 0 : Math.round(size * lineHeight)}">${esc(line)}</tspan>`).join("")}</text>`;
}

function imageData(file) {
  const buffer = fs.readFileSync(file);
  let mime = "image/png";
  if (buffer[0] === 0xFF && buffer[1] === 0xD8) {
    mime = "image/jpeg";
  } else if (buffer[0] === 0x89 && buffer[1] === 0x50 && buffer[2] === 0x4E && buffer[3] === 0x47) {
    mime = "image/png";
  } else if (buffer[0] === 0x47 && buffer[1] === 0x49 && buffer[2] === 0x46) {
    mime = "image/gif";
  }
  return `data:${mime};base64,${buffer.toString("base64")}`;
}

function svgStart(width, height, background) {
  return `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}"><rect width="${width}" height="${height}" fill="${background}"/>`;
}

function defs() {
  return `<defs><filter id="shadow" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="10" stdDeviation="10" flood-color="#102A43" flood-opacity=".18"/></filter></defs>`;
}

let logoBase64Cache = null;

function getLogoBase64(config) {
  if (logoBase64Cache) return logoBase64Cache;
  if (!config.brand.logo) return "";
  const logoPath = path.join(__dirname, "..", config.brand.logo);
  if (fs.existsSync(logoPath)) {
    logoBase64Cache = `data:image/png;base64,${fs.readFileSync(logoPath).toString("base64")}`;
  } else {
    logoBase64Cache = "";
  }
  return logoBase64Cache;
}

function brand(x, y, config, inverse = false, scale = 1) {
  const color = inverse ? "#FFFFFF" : config.colors.cobalt;
  const mark = 56 * scale;
  const logoData = getLogoBase64(config);
  
  let logoElement;
  if (logoData) {
    logoElement = `<image xlink:href="${logoData}" href="${logoData}" width="${mark}" height="${mark}" />`;
  } else {
    logoElement = `<rect width="${mark}" height="${mark}" rx="${12 * scale}" fill="${inverse ? "#FFFFFF" : config.colors.cobalt}"/><path d="M${14 * scale} ${17 * scale}h${29 * scale}m-${29 * scale} ${10 * scale}h${22 * scale}m-${22 * scale} ${10 * scale}h${26 * scale}" stroke="${inverse ? config.colors.cobalt : "#FFFFFF"}" stroke-width="${5 * scale}" stroke-linecap="round"/><circle cx="${44 * scale}" cy="${43 * scale}" r="${7 * scale}" fill="${config.colors.turquoise}"/>`;
  }
  
  return `<g transform="translate(${x} ${y})">${logoElement}<text x="${72 * scale}" y="${37 * scale}" fill="${color}" font-family="Avenir, Helvetica Neue, Arial, sans-serif" font-size="${25 * scale}" font-weight="800">${esc(config.brand.name.toUpperCase())}</text></g>`;
}

function eyebrow(x, y, text, config, inverse = false) {
  return `<g><rect x="${x}" y="${y - 16}" width="36" height="6" rx="3" fill="${config.colors.turquoise}"/><text x="${x + 52}" y="${y}" fill="${inverse ? "#DDF4F2" : config.colors.cobalt}" font-family="Avenir, Helvetica Neue, Arial, sans-serif" font-size="22" font-weight="800">${esc(text.toUpperCase())}</text></g>`;
}

function cta(x, y, text, config, fontSize = 28) {
  const width = Math.min(560, Math.max(320, text.length * fontSize * .59 + 90));
  return `<g filter="url(#shadow)"><rect x="${x}" y="${y}" width="${width}" height="76" rx="8" fill="${config.colors.accent}"/><text x="${x + 28}" y="${y + 49}" fill="${config.colors.navy}" font-family="Avenir, Helvetica Neue, Arial, sans-serif" font-size="${fontSize}" font-weight="800">${esc(text)}  →</text></g>`;
}

function footer(y, height, config, width = 1080) {
  return `<g><rect y="${y}" width="${width}" height="${height}" fill="${config.colors.cobalt}"/><text x="72" y="${y + height / 2 + 10}" fill="#FFFFFF" font-family="Avenir, Helvetica Neue, Arial, sans-serif" font-size="25" font-weight="700">${esc(config.brand.displayUrl)}</text><g transform="translate(${width - 390} ${y + height / 2 - 16})"><circle cx="16" cy="16" r="15" fill="none" stroke="#FFFFFF" stroke-width="3"/><path d="M5 29l-8 5 3-10" fill="none" stroke="#FFFFFF" stroke-width="3"/><text x="46" y="24" fill="#FFFFFF" font-family="Avenir, Helvetica Neue, Arial, sans-serif" font-size="23" font-weight="700">${esc(config.brand.whatsappLabel)}</text></g></g>`;
}

function photoTag(data, x, y, width, height, position = "xMidYMid") {
  return `<svg x="${x}" y="${y}" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" preserveAspectRatio="none"><image xlink:href="${data}" href="${data}" width="100%" height="100%" preserveAspectRatio="${position} slice"/></svg>`;
}

function verticalSvg(theme, config, photo) {
  const c = config.colors;
  return `${svgStart(1080, 1920, c.paper)}${defs()}${photoTag(photo, 0, 610, 1080, 1140)}<rect y="610" width="1080" height="1140" fill="${c.navy}" opacity=".07"/><path d="M0 0h1080v610L0 720Z" fill="${c.paper}"/>${brand(74, 68, config)}${eyebrow(74, 190, theme.name, config)}${textLines(theme.headline, 74, 292, { size: 80, maxChars: 24, lineHeight: 1.05, fill: c.ink, maxLines: 4 })}${textLines(theme.subtitle, 74, 555, { size: 34, weight: 500, maxChars: 52, lineHeight: 1.34, fill: c.muted, maxLines: 3 })}${cta(74, 1625, theme.cta, config, 29)}${footer(1750, 170, config)}</svg>`;
}

function squareSvg(theme, config, photo) {
  const c = config.colors;
  return `${svgStart(1080, 1080, c.paper)}${defs()}${photoTag(photo, 604, 0, 476, 980)}${brand(58, 56, config, false, .88)}${eyebrow(58, 176, theme.name, config)}${textLines(theme.headline, 58, 264, { size: 56, maxChars: 19, lineHeight: 1.05, fill: c.ink, maxLines: 5 })}${textLines(theme.subtitle, 58, 600, { size: 25, weight: 500, maxChars: 36, lineHeight: 1.34, fill: c.muted, maxLines: 5 })}${cta(58, 884, theme.cta, config, 23)}<rect x="604" y="980" width="476" height="100" fill="${c.cobalt}"/><text x="842" y="1042" text-anchor="middle" fill="#FFFFFF" font-family="Avenir, Helvetica Neue, Arial, sans-serif" font-size="22" font-weight="700">${esc(config.brand.displayUrl)}</text></svg>`;
}

function portraitSvg(theme, config, photo) {
  const c = config.colors;
  return `${svgStart(1080, 1350, c.paper)}${defs()}${photoTag(photo, 0, 500, 1080, 710)}<path d="M0 0h1080v520L0 610Z" fill="${c.paper}"/>${brand(66, 48, config, false, .88)}${eyebrow(66, 156, theme.name, config)}${textLines(theme.headline, 66, 245, { size: 64, maxChars: 28, lineHeight: 1.05, fill: c.ink, maxLines: 4 })}${textLines(theme.subtitle, 66, 468, { size: 28, weight: 500, maxChars: 58, lineHeight: 1.3, fill: c.muted, maxLines: 3 })}${cta(66, 1118, theme.cta, config, 25)}${footer(1210, 140, config)}</svg>`;
}

function carouselHeader(index, config, inverse = false) {
  return `${brand(68, 60, config, inverse, .82)}<text x="1000" y="94" text-anchor="end" fill="${inverse ? "#FFFFFF" : config.colors.cobalt}" font-family="Avenir, Helvetica Neue, Arial, sans-serif" font-size="24" font-weight="800">${index}/5</text>`;
}

function carouselBottom(config, inverse = false, label = "Desliza →") {
  const color = inverse ? "#FFFFFF" : config.colors.cobalt;
  return `<line x1="68" y1="1248" x2="1012" y2="1248" stroke="${color}" stroke-width="3" opacity=".3"/><text x="68" y="1298" fill="${color}" font-family="Avenir, Helvetica Neue, Arial, sans-serif" font-size="23" font-weight="700">${esc(config.brand.displayUrl)}</text><text x="1012" y="1298" text-anchor="end" fill="${color}" font-family="Avenir, Helvetica Neue, Arial, sans-serif" font-size="23" font-weight="700">${esc(label)}</text>`;
}

function carouselSvgs(theme, copy, config, photo) {
  const c = config.colors;
  const s1 = `${svgStart(1080, 1350, c.navy)}${photoTag(photo, 0, 0, 1080, 1350)}<rect width="1080" height="1350" fill="${c.navy}" opacity=".58"/>${carouselHeader(1, config, true)}${eyebrow(68, 760, theme.name, config, true)}${textLines(theme.headline, 68, 865, { size: 78, maxChars: 25, lineHeight: 1.05, fill: "#FFFFFF", maxLines: 4 })}${textLines(theme.subtitle, 68, 1125, { size: 31, weight: 500, maxChars: 52, lineHeight: 1.3, fill: "#FFFFFF", maxLines: 3 })}${carouselBottom(config, true)}</svg>`;
  const s2 = `${svgStart(1080, 1350, c.cobalt)}${carouselHeader(2, config, true)}${eyebrow(68, 330, "Antes de exigir más horas", config, true)}${textLines("Lo que suele estar pasando", 68, 450, { size: 76, maxChars: 24, lineHeight: 1.06, fill: "#FFFFFF", maxLines: 3 })}${textLines(theme.insight, 68, 725, { size: 35, weight: 500, maxChars: 52, lineHeight: 1.42, fill: "#DCE9FF", maxLines: 6 })}${carouselBottom(config, true)}</svg>`;
  const stepText = ["Identificar la dificultad exacta, no solamente la nota.", "Explicar desde el nivel real del estudiante y a su ritmo.", `Practicar ${theme.subject} con retroalimentación clara.`];
  const steps = stepText.map((item, i) => `<circle cx="102" cy="${610 + i * 190}" r="34" fill="${c.sky}"/><text x="102" y="${620 + i * 190}" text-anchor="middle" fill="${c.cobalt}" font-family="Avenir, Helvetica Neue, Arial, sans-serif" font-size="27" font-weight="800">${i + 1}</text>${textLines(item, 168, 604 + i * 190, { size: 31, maxChars: 46, lineHeight: 1.34, fill: c.ink, maxLines: 3 })}`).join("");
  const s3 = `${svgStart(1080, 1350, c.paper)}${carouselHeader(3, config)}${eyebrow(68, 260, "Una ruta más clara", config)}${textLines("Un mejor punto de partida", 68, 380, { size: 76, maxChars: 26, lineHeight: 1.06, fill: c.ink, maxLines: 3 })}${steps}${carouselBottom(config)}</svg>`;
  const s4 = `${svgStart(1080, 1350, c.sky)}${carouselHeader(4, config)}${eyebrow(68, 320, "Tutoría personalizada", config)}${textLines("Cómo acompañamos", 68, 455, { size: 78, maxChars: 24, lineHeight: 1.06, fill: c.ink, maxLines: 2 })}<rect x="68" y="560" width="160" height="12" rx="6" fill="${c.turquoise}"/>${textLines(theme.approach, 68, 680, { size: 36, weight: 500, maxChars: 50, lineHeight: 1.42, fill: c.muted, maxLines: 7 })}${carouselBottom(config)}</svg>`;
  const s5 = `${svgStart(1080, 1350, c.navy)}${defs()}${carouselHeader(5, config, true)}${eyebrow(68, 320, "Centro de Tutorías", config, true)}${textLines("El apoyo correcto puede empezar hoy", 68, 455, { size: 76, maxChars: 25, lineHeight: 1.06, fill: "#FFFFFF", maxLines: 4 })}${textLines(copy.carrusel[4].body, 68, 790, { size: 34, weight: 500, maxChars: 52, lineHeight: 1.4, fill: "#DCE9EF", maxLines: 5 })}${cta(68, 1040, theme.cta, config, 28)}${carouselBottom(config, true, config.brand.whatsapp)}</svg>`;
  return [s1, s2, s3, s4, s5];
}

async function renderSvg(sharp, svg, output) {
  await sharp(Buffer.from(svg)).png().toFile(output);
}

async function renderSvgJpg(sharp, svg, output) {
  await sharp(Buffer.from(svg)).jpeg({ quality: 90 }).toFile(output);
}

async function renderCampaign({ theme, copy, config, photoPath, outputDir }) {
  const sharp = loadSharp();
  const photo = imageData(photoPath);
  const carouselDir = path.join(outputDir, "carousel");
  fs.mkdirSync(carouselDir, { recursive: true });
  await renderSvg(sharp, verticalSvg(theme, config, photo), path.join(outputDir, "vertical_1080x1920.png"));
  await renderSvg(sharp, squareSvg(theme, config, photo), path.join(outputDir, "feed_1080x1080.png"));
  await renderSvg(sharp, portraitSvg(theme, config, photo), path.join(outputDir, "feed_1080x1350.png"));
  const slides = carouselSvgs(theme, copy, config, photo);
  for (let index = 0; index < slides.length; index += 1) {
    const slideNum = String(index + 1).padStart(2, "0");
    await renderSvg(sharp, slides[index], path.join(carouselDir, `slide_${slideNum}_1080x1350.png`));
    await renderSvgJpg(sharp, slides[index], path.join(carouselDir, `slide_${slideNum}_1080x1350.jpg`));
  }
}

module.exports = { renderCampaign };
