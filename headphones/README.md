# Headphones Webpage Project

Welcome to the **Headphones** web project! This repository contains a fully-functional, responsive, and accessible web page, meticulously recreated to match a designer file provided by Nicolas Philippot, UI/UX designer.

## Project Overview

This page is a pixel-perfect implementation of the headphones landing design, using ONLY HTML and CSS. Your goals: showcase best practices in semantic structure, accessibility, and modern responsive design.

- _Designer file_: The final screens are provided in the `/Archive` folder as PNGs (desktop, tablet, mobile) and `.fig` (Figma format). Consult these for layout and style accuracy.
- _No frameworks, no JavaScript_: 100% custom HTML + CSS.
- _Responsive design:_ Automatically adapts for desktops, tablets, and mobile screens (mobile version triggers at ≤480px width).
- _Accessibility:_ Focused on semantic HTML, contrast, keyboard navigation, and screen-reader support.

## Key Specifications

- Responsive breakpoints for mobile, tablet, desktop. Layout switches to mobile at 480px or less.
- Max content width: **1000px**, centered horizontally.
- On link hover/active: `#FF6565` color.
- On button hover/active: `opacity: 0.9`.
- No CSS libraries (e.g., Bootstrap) are used or allowed.
- No JavaScript (all behaviors are purely CSS-driven).
- All images and design elements are provided in the Archive and/or `assets` folders.

## Usage & Preview

1. Open the `index.html` file in your browser to preview the site.
2. Best viewed with assets extracted from `/Archive` and placed accordingly if building anew.
3. To develop or edit:
   - Use `styles.css` for all custom styling.
   - Use semantic, accessible HTML elements.
   - Follow modern best practices for responsive CSS (media queries, flexible layouts).

## Accessibility

- Semantic HTML structure throughout.
- Keyboard-navigable focus states.
- Sufficient contrast and alt attributes on images.
- Consider ARIA when semantics alone aren’t enough.

## File Structure

```
headphones/
  index.html      # Main page
  styles.css      # Custom styles (link this in HTML)
  README.md       # Project documentation (this file)
assets/           # (Optional) Copy images here as needed
```

Assets and source design files are in the `/Archive` folder (desktop, tablet, mobile PNGs & .fig file). Please refer to these to ensure your result matches the design precisely.

---

_This project demonstrates mastery of HTML, CSS, accessibility, and responsive design — without JavaScript or third-party CSS frameworks._
