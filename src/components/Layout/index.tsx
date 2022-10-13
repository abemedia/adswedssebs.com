import { graphql, Link, useStaticQuery } from 'gatsby'
import React, { useState } from 'react'
import { Button, Nav, Navbar, NavbarProps } from 'react-bootstrap'
import icon from '../../images/icon.svg'
import { Must } from '../../types'
import { RSVP } from '../RSVP'
import { Footer } from './Footer'
import { NavLink } from './NavLink'

interface LayoutProps {
  children?: React.ReactNode
  className?: string
  overlay?: boolean
}

export function Layout({ children, className, overlay }: LayoutProps) {
  const data: Must<Queries.SiteTitleQuery> = useStaticQuery(graphql`
    query SiteTitle {
      site {
        siteMetadata {
          title
        }
      }
      allGoogleForms {
        edges {
          node {
            id
            form
          }
        }
      }
    }
  `)

  const rsvp = JSON.parse(data.allGoogleForms.edges[0].node.form)

  const navbarProps: NavbarProps = overlay ? { fixed: 'top' } : { sticky: 'top' }

  const [showRSVP, setShowRSVP] = useState(false)

  return (
    <div className={className} id="layout">
      <Navbar expand="xl" {...navbarProps} className="mainnav">
        <Navbar.Brand as={Link} to="/" className="font-weight-light" style={{ fontSize: 30 }}>
          <img src={icon} height="50px" alt="" /> {data.site.siteMetadata.title}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto" as="ul">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/events/">Events</NavLink>
            <NavLink to="/travel/">Travel</NavLink>
            <NavLink to="/accommodation/">Accommodation</NavLink>
            <NavLink to="/explore/">Explore Kenya</NavLink>
            <NavLink to="/faq/">FAQ</NavLink>
            <form className="form-inline ml-3">
              <Button size="lg" onClick={() => setShowRSVP(true)}>
                RSVP
              </Button>
            </form>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <main>{children}</main>
      <Footer />
      <RSVP {...rsvp} show={showRSVP} onHide={() => setShowRSVP(false)} />
    </div>
  )
}
