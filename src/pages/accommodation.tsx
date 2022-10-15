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
            take place. Alternatively, Bamburi Beach Hotel is nearby. Feel free to make different
            arrangements, however please keep in mind that the mehndi will go on until late, so
            you’ll probably want accommodation nearby.
          </p>
          <hr className="my-5" />
          <Row>
            <Col md={6}>
              <h2 className="display-4">Sarova Whitesands Beach Resort & Spa</h2>
              <p>
                Sarova Whitesands Beach Resort and Spa is where the wedding events will be taking
                place, so it would be the most convenient option. We have negotiated a special
                wedding rate, which can be accessed using the button below.
              </p>
              <p>Please click on the following link to book your room.</p>
              <Button
                as="a"
                href="https://reservations.travelclick.com/104094?groupID=3681249&adults=1"
                target="_blank"
                className="mb-2"
              >
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
                Bamburi Beach Hotel is a 10 minute walk from the beach and a few minutes drive from
                Whitesands Beach Hotel.
              </p>
              <p>
                We have secured a 10% discount on accommodation rates. Please quote{' '}
                <code>NUSAD</code> when booking with the hotel, or contact our wedding planners
                Sapna & Shitul Sachania for assistance.
              </p>
              <Button
                as="a"
                href="https://bamburibeachkenya.com/"
                target="_blank"
                className="mb-2 mr-2"
              >
                View hotel website
              </Button>
              <Button
                as="a"
                href="mailto:reservations@bamburibeachkenya.com"
                target="_blank"
                className="mb-2 mr-2"
              >
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
          <hr className="my-5" />
          <div className="text-center">
            <h2 className="display-4">Other Options</h2>
            <p>See the link below for a list of alternative options in the near vicinity.</p>
            <Button
              as="a"
              href="https://www.google.com/travel/hotels/Sarova%20Whitesands%20Beach%20Resort%20%26%20Spa%20Mombasa%20-%20Beach%20Hotel%20In%20Mombasa?q=hotels%20near%20sarova%20whitesands%20mombasa&g2lb=2502548%2C2503771%2C2503781%2C4258168%2C4270442%2C4284970%2C4291517%2C4306835%2C4597339%2C4718358%2C4723331%2C4731329%2C4757164%2C4814050%2C4816977%2C4826689%2C4852066%2C4861688%2C4871746%2C4877114%2C26483161&hl=en-AE&gl=ae&ssta=1&ts=CAESCgoCCAMKAggDEAAaaQpLEkc6RVNhcm92YSBXaGl0ZXNhbmRzIEJlYWNoIFJlc29ydCAmIFNwYSBNb21iYXNhIC0gQmVhY2ggSG90ZWwgSW4gTW9tYmFzYRoAEhoSFAoHCOcPEAIYERIHCOcPEAIYFBgDMgIIASoLCgcoAToDQUVEGgA&rp=ogFFU2Fyb3ZhIFdoaXRlc2FuZHMgQmVhY2ggUmVzb3J0ICYgU3BhIE1vbWJhc2EgLSBCZWFjaCBIb3RlbCBJbiBNb21iYXNhOAFAAEgCmgICCAA&ap=MANatQEKBQimBBAAIgNBRUQqFgoHCOYPEAsYChIHCOYPEAsYCxgBKACwAQBYAWgBcgQIAhgAmgFHEkVTYXJvdmEgV2hpdGVzYW5kcyBCZWFjaCBSZXNvcnQgJiBTcGEgTW9tYmFzYSAtIEJlYWNoIEhvdGVsIEluIE1vbWJhc2GiARQKCS9tLzAxY2ZkMxIHTW9tYmFzYZICAggRkgICCAySAgIIEpICAggTkgICCA6SAgIIFJIBAiABaAA&ictx=1&sa=X&utm_campaign=sharing&utm_medium=link&utm_source=htls&ved=0CAAQ5JsGahcKEwig1f77id76AhUAAAAAHQAAAAAQBA"
              target="_blank"
              className="mb-2 mr-2"
            >
              View nearby accommodation
            </Button>
          </div>
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
