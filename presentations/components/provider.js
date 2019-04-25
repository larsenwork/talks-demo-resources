import React from 'react'

const css = `
li::before, h3::before, h2::before {
  content: "×";
  color: hotpink;
  width: 0px;
  display: inline-block;
  transform: translateX(-.65em) scale(.6);
  font-weight: 700;
}
h2::before {
  transform: translateX(-.45em) scale(.4);
}
li:not(:last-child) {
  margin-bottom: 0.5em;
}
h3 + h3 {
  margin-top: -0.5em !important;
}`

const Provider = props => (
  <div>
    {props.children}
    <a
      href="https://larsenwork.com"
      css={{
        position: 'fixed',
        right: '0',
        bottom: '0',
        color: '#333',
        backgroundColor: 'hsla(0, 0%, 100%, 0.5)',
        textDecoration: 'none',
        padding: '0.2em 0.4em',
        display: 'inline-block',
        fontSize: '1.2vw',
        letterSpacing: 1,
        fontWeight: '600',
      }}
    >
      larsenwork
    </a>
    <style>{css}</style>
  </div>
)

export default {
  Provider,
}
