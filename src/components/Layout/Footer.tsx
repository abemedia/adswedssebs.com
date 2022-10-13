import React from 'react'
import * as s from './Footer.module.scss'

export function Footer() {
  return (
    <footer className={s.footer}>
      <div className="container py-4 bg-darker d-flex">
        <span className="mr-auto">© {new Date().getFullYear()} AdsWedsSebs.com</span>
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
