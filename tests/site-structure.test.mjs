import { existsSync, readdirSync, readFileSync } from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';

const root = process.cwd();
const pages = ['index.html', 'gallery.html', 'about.html', 'contact.html'];
const requiredContact = ['01332 493514', '139A London Rd', 'Shardlow', 'Derby DE72 2HA'];

function read(file) {
  return readFileSync(path.join(root, file), 'utf8');
}

for (const page of pages) {
  assert.ok(existsSync(path.join(root, page)), `${page} should exist`);
  const html = read(page);
  assert.match(html, /<title>Bridgecraft Upholstery/i, `${page} should include branded title`);
  assert.match(html, /<meta name="description"/i, `${page} should include meta description`);
  assert.match(html, /href="index\.html"/, `${page} should link home`);
  assert.match(html, /href="gallery\.html"/, `${page} should link gallery`);
  assert.match(html, /href="about\.html"/, `${page} should link about`);
  assert.match(html, /href="contact\.html"/, `${page} should link contact`);
  assert.match(html, /assets\/css\/styles\.css/, `${page} should load shared CSS`);
  assert.match(html, /assets\/js\/main\.js/, `${page} should load shared JS`);
}

const home = read('index.html');
assert.match(home, /Re-upholstery/i, 'home should position re-upholstery service');
assert.match(home, /bespoke furniture/i, 'home should position bespoke furniture service');
assert.match(home, /commercial seating/i, 'home should position commercial seating service');
assert.match(home, /View Gallery/i, 'home should include gallery CTA');

const gallery = read('gallery.html');
for (const category of ['Sofas', 'Chairs', 'Bed Heads', 'Cushions', 'Commercial', 'Custom']) {
  assert.match(gallery, new RegExp(category, 'i'), `gallery should include ${category}`);
}
assert.match(gallery, /data-filter=/, 'gallery should expose filter controls');
assert.match(gallery, /data-category=/, 'gallery items should expose categories');

const about = read('about.html');
assert.match(about, /family run/i, 'about should mention family-run workroom');
assert.match(about, /ten year/i, 'about should mention ten year warranty');
assert.match(about, /decades of experience/i, 'about should mention craft experience');

const contact = read('contact.html');
for (const detail of requiredContact) {
  assert.match(contact, new RegExp(detail.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i'), `contact should include ${detail}`);
}
assert.match(contact, /name="name"/, 'contact form should include name field');
assert.match(contact, /name="email"/, 'contact form should include email field');
assert.match(contact, /name="message"/, 'contact form should include message field');

assert.ok(existsSync(path.join(root, 'assets/css/styles.css')), 'CSS file should exist');
assert.ok(existsSync(path.join(root, 'assets/js/main.js')), 'JS file should exist');
assert.ok(existsSync(path.join(root, 'assets/images')), 'images directory should exist');
assert.ok(readdirSync(path.join(root, 'assets/images')).filter((file) => /\.(jpe?g|png|webp)$/i.test(file)).length >= 8, 'site should include at least 8 local image assets');

const js = read('assets/js/main.js');
assert.match(js, /gallery-filter/i, 'JS should support gallery filtering');
assert.match(js, /lightbox/i, 'JS should support lightbox behavior');
assert.match(js, /nav-toggle/i, 'JS should support mobile navigation');

console.log('Bridgecraft static site checks passed.');
