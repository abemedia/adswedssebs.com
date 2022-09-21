import { GatsbyLinkProps, Link } from 'gatsby'
import React from 'react'
import { NavLink as BSNavLink, NavItem, NavLinkProps } from 'react-bootstrap'

export function NavLink({ children, ...props }: NavLinkProps & GatsbyLinkProps<never>) {
  return (
    <NavItem as="li">
      <BSNavLink as={Link} activeClassName="active" {...props}>
        {children}
      </BSNavLink>
    </NavItem>
  )
}
