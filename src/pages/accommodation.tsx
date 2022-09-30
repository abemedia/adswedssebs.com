import { graphql, PageProps } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { Heading } from '../components/Heading'
import { Layout } from '../components/Layout'
import { Section } from '../components/Section'
import { SEO } from '../components/seo'
import { Must } from '../types'

function AccommodationPage({ data }: PageProps<Must<Queries.AccommodationQuery>>) {
  return (
    <Layout>
      <SEO title="Travel" />
      <Section>
        <Container>
          <Heading className="text-center">Accommodation</Heading>
          <p className="text-center lead mb-5">
            We recommend staying at Sarova Whitesands Beach Resort & Spa, where the wedding will
            take place. Alternatively Bamburi Beach Hotel is nearby. Of course you can make
            different arrangements, however keep in mind that the Mehndi will go on until late so
            you’ll probably want to be nearby.
          </p>
          <hr className="my-5" />
          <Row>
            <Col md={6}>
              <h2 className="display-4">Sarova Whitesands Beach Resort & Spa</h2>
              <p>
                Sarova Whitesands Beach Resort and Spa which is where the wedding events will be
                taking place so would be very convenient.
              </p>
              <p>
                Please click on the following link which will take you to the room options at the
                hotel and from where you can book your room.
              </p>
              <Button as="a" href="about:blank" target="_blank" className="mb-2">
                Book a room
              </Button>
            </Col>
            <Col md={{ offset: 1, span: 5 }}>
              <GatsbyImage
                image={data.whitesands.childImageSharp.gatsbyImageData}
                loading="eager"
                objectFit="cover"
                alt=""
              />
            </Col>
          </Row>
          <hr className="my-5" />
          <Row>
            <Col md={{ offset: 1, span: 6, order: 'last' }}>
              <h2 className="display-4">Bamburi Beach Hotel</h2>
              <p>
                Bamburi Beach Hotel is a 10 minutes’ walk from the beach and a few minutes’ drive
                from Whitesands Beach Hotel.
              </p>
              <p>
                We have secured some early bird discounts on accommodation rates. Please quote{' '}
                <code>NUSAYBA & ADAM WEDDING</code> when booking with the hotel or contact our
                wedding planners Sapna & Shitul Sachania for assistance.
              </p>
              <Button as="a" href="about:blank" target="_blank" className="mb-2 mr-2">
                Book a room
              </Button>
              <Button as="a" href="mailto:sachanias@outlook.com" target="_blank" className="mb-2">
                Contact wedding planners
              </Button>
            </Col>
            <Col md={5}>
              <GatsbyImage
                image={data.bamburi.childImageSharp.gatsbyImageData}
                loading="eager"
                objectFit="cover"
                alt=""
              />
            </Col>
          </Row>
        </Container>
      </Section>
    </Layout>
  )
}

export default AccommodationPage

export const pageQuery = graphql`
  query Accommodation {
    whitesands: file(relativePath: { eq: "whitesands.jpg" }) {
      id
      childImageSharp {
        gatsbyImageData(
          transformOptions: { cropFocus: CENTER }
          width: 800
          height: 500
          layout: CONSTRAINED
        )
      }
    }
    bamburi: file(relativePath: { eq: "bamburi.jpg" }) {
      id
      childImageSharp {
        gatsbyImageData(
          transformOptions: { cropFocus: NORTH }
          width: 800
          height: 500
          layout: CONSTRAINED
        )
      }
    }
  }
`
