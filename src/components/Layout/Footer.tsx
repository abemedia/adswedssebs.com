import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { Must } from '../../types'
import * as s from './Footer.module.scss'

export function Footer() {
  const data: Must<Queries.LayoutFooterQuery> = useStaticQuery(graphql`
    query LayoutFooter {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <footer className={s.footer}>
      <div className="container py-4 bg-darker d-flex">
        <span className="mr-auto">
          © {new Date().getFullYear()} {data.site.siteMetadata.title} ·{' '}
        </span>
        <span>
          Website by{' '}
          <a
            href="http://abemedia.co.uk/"
            title="Web Design Brighton"
            target="_blank" /* eslint-disable-line react/jsx-no-target-blank */
            id="credit"
            rel="noreferrer"
          >
            ABE Media
          </a>
        </span>
      </div>
    </footer>
  )
}

export default Footer
