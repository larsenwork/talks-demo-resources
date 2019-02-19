<template>
  <div class="eg-slideshow">
    <slide enter="fadeIn" leave="fadeOut">
      <h1>
        CSS
      </h1>
      <p>Cascading Style Sheets deals with the <em>presentation</em> of markup</p>
      <p>
        <a href="https://github.com/larsenwork/talks-demo-resources" target="_blank">larsenwork - talks/demo</a>
      </p>
      </eg-transition>
    </slide>
    <slide enter="fadeIn" leave="fadeOut">
      <iframe src="https://motherfuckingwebsite.com/" frameborder="0" />
    </slide>
    <slide enter="fadeIn" leave="fadeOut">
      <iframe src="https://www.firewatchgame.com/" frameborder="0" />
    </slide>
    <slide enter="fadeIn" leave="fadeOut" :steps="4">
      <h1 v-if="step == 1">
        selector {}
      </h1>
      <h1 v-if="step == 2">
        selector {<br>&nbsp;&nbsp;property: value<br>}
      </h1>
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
      <a v-if="step == 3" href="https://cssdb.org">github.com/larsenwork</a>
    </slide>
    <slide>
      <h1>Farvel</h1>
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
}
* {
  font-weight: 500;
  box-sizing: border-box;
  color: hsla(0, 0%, 0%, 0.88);
}
h1 {
  margin-top: 0.3em;
  text-align: left !important;
}
h1,
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
.eg-slide {
  padding: 5vmin;
}
</style>
