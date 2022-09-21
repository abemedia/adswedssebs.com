import type { GatsbyBrowser } from 'gatsby'

/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import './src/styles-global/base.scss'

export const onClientEntry: GatsbyBrowser['onClientEntry'] = () => {
  // IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
  if (!('IntersectionObserver' in window)) {
    // @ts-expect-error intersection-observer
    import('intersection-observer').then(() => console.log('# IntersectionObserver is polyfilled!')) // eslint-disable-line no-console
  }
}
