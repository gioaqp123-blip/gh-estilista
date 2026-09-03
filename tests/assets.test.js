import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { services, serviceCategories } from '../src/data/services.js';

const testsDirectory = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(testsDirectory, '..');

function absolute(relativePath) {
  return path.join(repoRoot, relativePath);
}

test('los assets canónicos y públicos existen en sus ubicaciones documentadas', () => {
  const expectedAssets = [
    'src/assets/about/about-main.jpg',
    'src/assets/about/about-accent.jpg',
    'src/assets/hero/hero-model.png',
    'src/assets/hero/hero-model-mobile.png',
    'src/assets/services/eye-lash.jpg',
    'src/assets/services/facial-care.jpg',
    'src/assets/services/hair-color.jpg',
    'src/assets/services/head-spa.jpg',
    'src/assets/why/why-model.png',
    'public/favicon.svg',
    'public/favicon.jpg',
    'public/apple-touch-icon.jpg',
    'public/og-image.jpg',
    'public/robots.txt',
    'public/sitemap.xml',
  ];

  for (const asset of expectedAssets) assert.equal(fs.existsSync(absolute(asset)), true, asset);
});

test('las rutas antiguas y archivos muertos ya no forman parte del runtime', () => {
  const removedPaths = [
    'src/assets/about-main.jpg',
    'src/assets/about-accent.jpg',
    'src/assets/hero-model.png',
    'src/assets/hero-model-mobile.png',
    'src/assets/why-model.png',
    'src/assets/logo.jpg',
    'scripts/make_og_image.ps1',
    'scripts/resize_about_photos.ps1',
  ];

  for (const removedPath of removedPaths) assert.equal(fs.existsSync(absolute(removedPath)), false, removedPath);
});

test('los componentes apuntan a las rutas reorganizadas', () => {
  const componentSources = {
    about: fs.readFileSync(absolute('src/components/sections/About.jsx'), 'utf8'),
    cta: fs.readFileSync(absolute('src/components/sections/CtaBanner.jsx'), 'utf8'),
    hero: fs.readFileSync(absolute('src/components/sections/Hero.jsx'), 'utf8'),
    why: fs.readFileSync(absolute('src/components/sections/WhyChoose.jsx'), 'utf8'),
  };

  assert.match(componentSources.about, /assets\/about\/about-main\.jpg/);
  assert.match(componentSources.about, /assets\/about\/about-accent\.jpg/);
  assert.match(componentSources.cta, /assets\/about\/about-main\.jpg/);
  assert.match(componentSources.hero, /assets\/hero\/hero-model\.png/);
  assert.match(componentSources.hero, /assets\/hero\/hero-model-mobile\.png/);
  assert.match(componentSources.why, /assets\/why\/why-model\.png/);
});

test('los datos conservan solo campos consumidos por la interfaz', () => {
  const removedFields = ['durationLabel', 'price', 'priceLabel', 'detailServiceIds', 'descriptionServiceId'];
  const allEntries = [...services, ...serviceCategories];

  for (const entry of allEntries) {
    for (const field of removedFields) assert.equal(Object.hasOwn(entry, field), false, `${entry.id}.${field}`);
  }

  for (const service of services) {
    for (const field of ['id', 'name', 'category', 'duration', 'description', 'items', 'bookingLabel', 'infoLabel', 'infoDetail']) {
      assert.equal(Object.hasOwn(service, field), true, `${service.id}.${field}`);
    }
  }
});
