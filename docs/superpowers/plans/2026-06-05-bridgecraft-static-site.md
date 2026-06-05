# Bridgecraft Static Site Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a production-ready static website for Bridgecraft Upholstery with home, gallery, about, and contact pages.

**Architecture:** Use plain HTML, CSS, and JavaScript so the site can be hosted on standard static hosting with no WordPress dependency. Pages share a common navigation/footer structure, a reusable responsive design system in `assets/css/styles.css`, and small progressive-enhancement scripts in `assets/js/main.js`.

**Tech Stack:** Static HTML, CSS custom properties, vanilla JavaScript, local image assets, Node-based structural tests, local static server for browser QA.

---

### Task 1: Production Structure And Tests

**Files:**
- Create: `tests/site-structure.test.mjs`
- Create: `package.json`

- [x] **Step 1: Write failing structural tests**

Create a Node script that checks required pages, metadata, contact details, gallery filters, local images, and the navigation/footer contract.

- [x] **Step 2: Run tests to verify they fail**

Run: `npm test`
Expected: FAIL because site files do not exist yet.

### Task 2: Static Site Implementation

**Files:**
- Create: `index.html`
- Create: `gallery.html`
- Create: `about.html`
- Create: `contact.html`
- Create: `assets/css/styles.css`
- Create: `assets/js/main.js`
- Create: `assets/images/*`

- [x] **Step 1: Download suitable existing Bridgecraft imagery**

Pull representative images from the current site into `assets/images` and use descriptive filenames.

- [x] **Step 2: Build the four HTML pages**

Create complete semantic pages with shared header/footer, production copy, SEO metadata, accessible links, gallery categories, and contact form markup.

- [x] **Step 3: Build responsive CSS**

Implement a professional upholstery/workshop visual direction, responsive layouts, navigation states, gallery grids, contact form states, and print-friendly basics.

- [x] **Step 4: Build progressive JavaScript**

Implement mobile navigation, gallery filtering, lightbox behavior, form validation, and current-year footer handling.

### Task 3: Verification And QA

**Files:**
- Verify: all site files

- [x] **Step 1: Run automated structural tests**

Run: `npm test`
Expected: PASS with all required files and content checks present.

- [x] **Step 2: Start a local static server**

Run: `python -m http.server 8080`
Expected: server responds at `http://localhost:8080`.

- [x] **Step 3: Browser QA**

Open the site in the in-app browser and verify desktop/mobile layout, navigation, gallery filters, lightbox, contact page, and no obvious overlap.

- [x] **Step 4: Final review**

Check git status, summarize changed files, and record durable project memory.
