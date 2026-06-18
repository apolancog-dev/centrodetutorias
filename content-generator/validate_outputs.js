#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");

const ROOT = __dirname;
const OUTPUT = path.join(ROOT, "output");

function pngSize(file) {
  const buffer = fs.readFileSync(file);
  if (buffer.toString("hex", 0, 8) !== "89504e470d0a1a0a") throw new Error(`No es PNG: ${file}`);
  return { width: buffer.readUInt32BE(16), height: buffer.readUInt32BE(20) };
}

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function validateDay(dir) {
  const expected = [
    ["vertical_1080x1920.png", 1080, 1920],
    ["feed_1080x1080.png", 1080, 1080],
    ["feed_1080x1350.png", 1080, 1350],
    ...Array.from({ length: 5 }, (_, i) => [`carousel/slide_${String(i + 1).padStart(2, "0")}_1080x1350.png`, 1080, 1350])
  ];
  for (const [relative, width, height] of expected) {
    const file = path.join(dir, relative);
    assert(fs.existsSync(file), `Falta ${file}`);
    const size = pngSize(file);
    assert(size.width === width && size.height === height, `${relative}: ${size.width}x${size.height}, esperado ${width}x${height}`);
  }
  for (const name of ["copy.json", "manifest.json", "source.html"]) {
    assert(fs.existsSync(path.join(dir, name)), `Falta ${name} en ${dir}`);
  }
  const copy = JSON.parse(fs.readFileSync(path.join(dir, "copy.json"), "utf8"));
  const required = ["fecha", "tema_del_dia", "dolor_del_cliente", "headline_principal", "subtitulo", "caption_instagram", "caption_facebook", "texto_tiktok", "hashtags", "cta_principal", "url_destino", "mensaje_whatsapp_sugerido", "alt_text", "carrusel"];
  for (const field of required) assert(copy[field], `copy.json no contiene ${field}`);
  assert(copy.carrusel.length === 5, "El carrusel debe tener cinco slides.");
  return path.basename(dir);
}

const days = fs.existsSync(OUTPUT)
  ? fs.readdirSync(OUTPUT).filter((name) => /^\d{4}-\d{2}-\d{2}$/.test(name)).sort()
  : [];
assert(days.length, "No hay campañas generadas para validar.");
for (const day of days) console.log(`OK ${validateDay(path.join(OUTPUT, day))}`);
console.log(`Validación completa: ${days.length} campaña(s).`);
