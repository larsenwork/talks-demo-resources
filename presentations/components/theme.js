import { aspect } from '@mdx-deck/themes'
import { swiss } from '@mdx-deck/themes'
import Provider from './Provider'

const customTheme = {
  css: {
    fontWeight: 300,
    lineHeight: 1.4,
    letterSpacing: '1px',
  },
  font:
    'system-ui, -apple-system, Segoe UI, Roboto, Noto Sans, Ubuntu, Cantarell, Helvetica Neue',
  colors: {
    text: '#555',
    background: 'white',
  },
  heading: {
    maxWidth: '80vw',
  },
  h1: {
    margin: '0.3em 0',
    lineHeight: 1,
    letterSpacing: 0,
    color: '#252525',
  },
  h2: {
    margin: '0.3em 0',
    lineHeight: 1.2,
    letterSpacing: 0,
    color: '#252525',
    fontWeight: 300,
  },
  h3: {
    fontWeight: 300,
    fontSize: '1em',
    margin: '1em 0',
  },
  ul: {
    paddingLeft: 0,
    listStyle: 'none',
  },
  li: {
    display: 'flex',
  },
  a: {
    textDecoration: 'none',
    color: 'hotpink',
  },
}

export default [aspect, swiss, Provider, customTheme]
