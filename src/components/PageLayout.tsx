import React from 'react'
import { Container } from 'react-bootstrap'
import { Layout } from './Layout'
import { Section, SectionProps } from './Section'

export function PageLayout({ children, ...props }: SectionProps) {
  return (
    <Layout>
      <Container as={Section} {...props}>
        {children}
      </Container>
    </Layout>
  )
}
