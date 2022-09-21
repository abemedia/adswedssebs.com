/* eslint-disable no-param-reassign */
import type { GatsbySSR } from 'gatsby'
import React from 'react'

/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

const isReactElement = (el: React.ReactNode): el is React.ReactElement => {
  return !!el && typeof el === 'object' && 'props' in el
}

// Don't inline CSS/
export const onPreRenderHTML: GatsbySSR['onPreRenderHTML'] = ({ getHeadComponents }) => {
  if (process.env.NODE_ENV !== 'production') return

  getHeadComponents().forEach(el => {
    // Remove inline css.
    if (isReactElement(el) && el.type === 'style' && el.props['data-href']) {
      el.type = 'link'
      el.props.href = el.props['data-href']
      el.props.rel = 'stylesheet'
      el.props.type = 'text/css'

      delete el.props['data-href']
      delete el.props.dangerouslySetInnerHTML
    }
  })
}
