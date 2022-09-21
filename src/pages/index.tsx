import { graphql, PageProps } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { Heading } from '../components/Heading'
import { Layout } from '../components/Layout'
import { NewsletterForm } from '../components/NewsletterForm'
import { Section } from '../components/Section'
import { SEO } from '../components/seo'
import ChevronDown from '../images/chevron-down.inline.svg'
import { Must } from '../types'

function IndexPage({ data }: PageProps<Must<Queries.HomeQuery>>) {
  return (
    <Layout overlay>
      <SEO title="Home" />
      <div className="position-relative">
        <GatsbyImage
          image={data.aboutPhoto.childImageSharp.gatsbyImageData}
          loading="eager"
          objectFit="cover"
          alt=""
          className="vh-100 vw-100"
          style={{ minHeight: '15rem' }}
        />
        <div
          className="d-absolute"
          style={{
            position: 'absolute',
            top: '150px',
            left: '100px',
          }}
        >
          <h1>
            <span className="display-1">Adam &amp; Nusayba</span>
            <br />
            <span className="display-4">invite you to their wedding celebration!</span>
          </h1>

          <br />
          <h3 className="h1 font-weight-light">
            17th, 18th &amp; 19th February
            <br />
            at Whitesands Hotel Mombasa, Kenya
          </h3>
          <br />
          <Button size="lg" style={{ fontSize: '2.5rem' }}>
            RSVP
          </Button>
        </div>
        <a className="arrow-down d-none d-lg-inline" href="#content">
          <ChevronDown />
        </a>
      </div>

      <span
        id="content"
        style={{
          scrollMarginTop: '5.4375rem',
        }}
      />
      <Section className="text-center lead">
        <Container>
          <Heading>We’re getting married!</Heading>
          <p>
            We cant wait to celebrate our special day with you! We have created this website as a
            convenient way to share all of the important details with you in the lead up to our
            wedding. This includes information on getting to Kenya, accommodation options, event
            details and some handy tips if you are considering extending your visit to travel around
            magical Kenya!
          </p>
          <p className="font-weight-bold">Please don’t forget to RSVP by the 25th October 2022.</p>
          <p>
            Thank you for your ongoing love and support. We are so excited to celebrate our wedding
            with you and can’t wait to see you all there! For more information or general questions,
            please see our contact page and we will aim to get back to you as soon as possible.
          </p>
        </Container>
      </Section>
      <Section variant="primary" className="text-center" fade>
        <Container>
          <Heading className="text-white">More stuff</Heading>
          More stuff to come here
        </Container>
      </Section>
      <Section variant="dark" className="text-white">
        <Container style={{ maxWidth: '600px' }}>
          <NewsletterForm />
        </Container>
      </Section>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query Home {
    aboutPhoto: file(
      absolutePath: { regex: "/header.jpg/" }
      childImageSharp: { id: { ne: null } }
    ) {
      id
      childImageSharp {
        gatsbyImageData(
          transformOptions: { cropFocus: EAST }
          width: 1920
          height: 1080
          layout: CONSTRAINED
        )
      }
      absolutePath
    }
  }
`
