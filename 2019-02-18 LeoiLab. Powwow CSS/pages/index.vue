<template>
  <div class="eg-slideshow">
    <slide enter="fadeIn" leave="fadeOut">
      <h1>
        CSS
      </h1>
      <p>Cascading Style Sheets deals with:<br><em>presentation</em> of markup</p>
      <p>
        <a href="https://github.com/larsenwork/talks-demo-resources" target="_blank">larsenwork - talks/demo</a>
      </p>
    </slide>
    <slide :steps="5" enter="fadeIn" leave="fadeOut">
      <h1>History of CSS</h1>
      <p>As seen trough page count in "CSS: The Definitive Guide"</p>
      <img src="https://pbs.twimg.com/media/DL32Mz-V4AA-52D.jpg" alt="" class="cover" style="opacity: 0.2">
      <p v-if="step >= 2">
        1st Edition, 2000. <b>472 pages</b>.
      </p>
      <p v-if="step >= 3">
        2nd Edition, 2004. <b>528 pages</b>.
      </p>
      <p v-if="step >= 4">
        3rd Edition, 2009. <b>538 pages</b>.
      </p>
      <p v-if="step >= 5">
        4th Edition, 2017. <b>1090 pages</b>.
      </p>
    </slide>
    <slide enter="fadeIn" leave="fadeOut">
      <h1>
        Agenda
      </h1>
      <p>Intro</p>
      <p>CSS DB &mdash; "babel" for CSS</p>
      <p>Custom properties &mdash; variables</p>
      <p>CSS Grid &mdash; like flexbox, but more💪😍</p>
    </slide>
    <slide enter="fadeIn" leave="fadeOut">
      <iframe src="https://motherfuckingwebsite.com/" frameborder="0" />
    </slide>
    <slide enter="fadeIn" leave="fadeOut">
      <iframe src="https://www.firewatchgame.com/" frameborder="0" />
    </slide>
    <slide enter="fadeIn" leave="fadeOut" :steps="4">
      <h1>CSS Skills?</h1>
      <eg-transition enter="fadeIn">
        <!-- eslint-disable -->
        <prism v-if="step == 2" language="css">p {
  color: red;
}</prism>
        <!-- eslint-enable -->
      </eg-transition>
      <eg-transition enter="fadeIn">
        <!-- eslint-disable -->
        <prism v-if="step == 3" language="css">p:nth-of-type(2n) {
  background-color: hsla(200, 100%, 50%, 1);
}</prism>
        <!-- eslint-enable -->
      </eg-transition>
      <eg-transition enter="fadeIn">
        <!-- eslint-disable -->
        <prism v-if="step == 4" language="css">@supports(grid-gap: 0){
  label + input {
    caret-color: var(--funky);
  }
}</prism>
        <!-- eslint-enable -->
      </eg-transition>
    </slide>
    <slide enter="fadeIn" leave="fadeOut">
      <h1>
        selector {}
      </h1>
      <!-- eslint-disable -->
      <prism language="css">type {}
.class {}
#id {}
[attr] {}</prism>
      <!-- eslint-enable -->
    </slide>
    <slide enter="fadeIn" leave="fadeOut">
      <h2>
        selector {<br>&nbsp;&nbsp;property: value<br>}
      </h2>
    </slide>
    <slide enter="fadeIn" leave="fadeOut">
      <h1 class="powwow">
        Weee
      </h1>
      <!-- eslint-disable -->
      <prism language="html">&lt;h1 class=&quot;powwow&quot;&gt;Weee&lt;/h1&gt;</prism>
      <prism language="css">.powwow {
  color: hotpink
}</prism>
      <style>.powwow {
  color: hotpink
}</style>
      <!-- eslint-enable -->
    </slide>
    <slide :steps="4" enter="fadeIn" leave="fadeOut">
      <h1>
        Values and units
      </h1>
      <eg-transition enter="fadeIn">
        <iframe
          v-if="step == 2"
          class="cover"
          style="z-index: 1"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/OYt1kqDNlMY?rel=0"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </eg-transition>
      <eg-transition enter="fadeIn">
        <div v-if="step == 3">
          <!-- eslint-disable -->
          <prism language="css">.sidebar {
  font-size: 1.3rem;
  width: 20vw;
  height: 100vh;
}</prism>
          <!-- eslint-enable -->
          <p><a href="https://codepen.io/larsenwork/pen/5f77de58716732cd5d2b46d806177561" target="_blank">Codepen</a></p>
        </div>
      </eg-transition>
      <eg-transition enter="fadeIn">
        <img v-if="step == 4" src="https://res.cloudinary.com/css-tricks/image/upload/c_scale,w_1000,f_auto,q_auto/v1532099222/viewport-units-mobile-crop_gxa4yw.jpg" alt="">
      </eg-transition>
    </slide>
    <slide enter="fadeIn" leave="fadeOut">
      <h1>CSS DB</h1>
      <p>Similar to the TC39 Process for JS <a href="https://cssdb.org" target="_blank">https://cssdb.org</a></p>
    </slide>
    <slide enter="fadeIn" leave="fadeOut">
      <h2>
        <a href="https://preset-env.cssdb.org" target="_blank">PostCSS Preset Env</a>
      </h2>
      <p>Convert modern CSS into something most browsers can understand, determining the polyfills you need based on your targeted browsers or runtime environments, using cssdb.</p>
    </slide>
    <slide>
      <h2>CSS Custom Properties</h2>
      <!-- eslint-disable -->
        <prism language="css">:root {
  --size-root: 4px;
}

input {
  padding: var(--size-root);
}</prism>
        <!-- eslint-enable -->
    </slide>
    <slide :steps="4">
      <h2>CSS Custom Properties</h2>
      <eg-transition enter="fadeIn">
        <p v-if="step >= 2">
          You can <a href="https://larsenwork.com/easing-gradients" target="_blank" rel="noopener noreferrer">GET/SET them easily with JS
          </a>
        </p>
      </eg-transition>
      <eg-transition enter="fadeIn">
        <p v-if="step >= 3">
          Native browser spec
        </p>
      </eg-transition>
      <eg-transition enter="fadeIn">
        <p v-if="step >= 4">
          You can <a href="https://codepen.io/larsenwork/pen/XOGGbp" target="_blank" rel="noopener noreferrer">update them in media queries</a>
        </p>
      </eg-transition>
    </slide>
    <slide :steps="4">
      <h2>CSS Grid is wonderfull</h2>
      <eg-transition enter="fadeIn">
        <p v-if="step >= 2">
          Layout dictates size
        </p>
      </eg-transition>
      <eg-transition enter="fadeIn">
        <p v-if="step >= 3">
          It's how digital designers work
        </p>
      </eg-transition>
      <eg-transition enter="fadeIn">
        <p v-if="step >= 4">
          Shuffling this is easy
        </p>
      </eg-transition>
    </slide>
    <slide>
      <h1>CSS Grid</h1>
      <p><a href="https://labs.jensimmons.com/" target="_blank">labs.jensimmons.com</a></p>
      <p><a href="https://codepen.io/jensimmons/pen/ryGwXO" target="_blank">Jen Simmons Codepen</a></p>
      <p><a href="https://css-tricks.com/snippets/css/complete-guide-grid/" target="_blank">CSS-tricks.com complete guide</a></p>
      <p><a href="http://grid.malven.co/" target="_blank">Nice visual overview</a></p>
      <p><a href="http://helloskin.io/" target="_blank">Helloskin (Firefox!)</a></p>
    </slide>
  </div>
</template>

<script>
import { Slideshow } from 'eagle.js'
import Prism from 'vue-prism-component'
import 'prismjs'
import 'prismjs/themes/prism.css'

export default {
  components: {
    Prism
  },
  mixins: [Slideshow],
  props: {
    mouseNavigation: { default: false, type: Boolean }
  }
}
</script>

<style lang="postcss">
:root {
  --font-size: 1.4em;
}
html,
body {
  padding: 0;
  margin: 0;
  font-family: system-ui;
  font-weight: 500;
}
* {
  box-sizing: border-box;
  color: hsla(0, 0%, 0%, 0.88);
}
h1 {
  margin-top: 0.3em;
  text-align: left !important;
}
h2 {
  margin-top: 0.3em;
  font-size: var(--font-size);
  text-align: left !important;
}
h1,
h2,
b {
  font-weight: 900;
}
p {
  font-size: var(--font-size);

  &:not(:last-of-type) {
    margin-bottom: 1em;
  }
}
pre {
  font-size: calc(var(--font-size) * 0.9);
}
a {
  color: #27c3ff;
}
iframe {
  width: 100%;
  height: calc(100vh - 10vmin);
}
.cover {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  max-width: unset !important;
  z-index: -1;
  overflow: hidden;
}
.eg-slideshow img {
  max-width: 100%;
}
.eg-slide {
  padding: 5vmin;
}
</style>
