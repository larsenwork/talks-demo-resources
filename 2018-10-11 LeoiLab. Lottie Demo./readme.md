# Animating vector graphics on the web

## In this repository

- Basic svg examples
- data.json (bodymovin export of "Woman Scratching.aep")
- readme.md (this file)
- Woman Scratching.aep (after effects demo)
- Woman Scratching.sketch (sketch vector source)

## Vector graphics

Vector is code.
File-size matters.
Number of coordinates matters.
Path direction matters.

## Animate directly using a framework

Hook it up to e.g.

- scroll events with parallax scrolling framework: https://gidole.github.io/
- user manipulation with frontend framework: https://larsenwork.com/easing-gradients/
- user action with GSAP framework: https://codepen.io/dsenneff/pen/2c3e5bc86b372d5424b00edaf4990173

## After effects animations with Lottie

### Tools used:

- Sketch https://www.sketchapp.com/
  - AE plugin: https://google.github.io/sketch2ae/
- After Effects https://www.adobe.com/products/aftereffects
  - Bodymovin plugin: https://airbnb.io/lottie/after-effects/bodymovin-installation.html
  - AE plugin: https://google.github.io/sketch2ae/

### Process

- Sketch (vector drawing, clever snap tools)
  - Extra points on straight arms because morphing
  - Base shape "Woman" is outlined and flattened to keep it simple
  - Export using AEUX
- After Effects
  - Create a composition with desired settings
  - AEUX add layers to comp.
  - Paste path data from e.g. "Right Hair 2" in to "Right Hair" at keyframes to morph

<!-- Illustrator workflow
  - Illustrator (prep)
    - Release to layers (sequence)
    - Save as .ai file
  - After Effects
    - Import .ai as "merged layers"
    - "Create" -> "Convert to shapes from vector layer"
    - Copy-paste path data
-->

### Codepen demo

https://codepen.io/larsenwork/pen/WajYNy?editors=0010
