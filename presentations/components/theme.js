import { aspect } from '@mdx-deck/themes'
import { swiss } from '@mdx-deck/themes'
import Provider from './Provider'

const customTheme = {
  css: {
    fontWeight: 300,
    lineHeight: 1.4,
  },
  font:
    'system-ui, -apple-system, Segoe UI, Roboto, Noto Sans, Ubuntu, Cantarell, Helvetica Neue',
  colors: {
    text: '#252525',
    background: 'white',
  },
  heading: {
    margin: '0.3em 0',
    lineHeight: 1,
  },
  ul: {
    paddingLeft: 0,
    listStyle: 'none',
  },
  h1: {
    fontWeight: 900,
  },
  h2: {
    fontWeight: 300,
  },
  a: {
    textDecoration: 'none',
    color: 'hotpink',
  },
}

export default [aspect, swiss, Provider, customTheme]
