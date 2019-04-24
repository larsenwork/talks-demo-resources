import React from 'react'

const css = `
li::before {
  content: "×";
  opacity: 0.6;
  width: 0px;
  display: inline-block;
  transform: translateX(-.65em) scale(.6);
  font-weight: 700;
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
        color: '#252525',
        backgroundColor: 'hsla(0, 0%, 100%, 0.5)',
        textDecoration: 'none',
        padding: '0.2em 0.4em',
        display: 'inline-block',
        fontSize: 30,
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
