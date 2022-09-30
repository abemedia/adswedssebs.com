import { graphql, PageProps } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { Heading } from '../components/Heading'
import { Layout } from '../components/Layout'
import { Section } from '../components/Section'
import { SEO } from '../components/seo'
import { Must } from '../types'

function TravelPage({ data }: PageProps<Must<Queries.TravelQuery>>) {
  return (
    <Layout>
      <SEO title="Travel" />
      <Section>
        <Container>
          <Heading className="text-center ">How to get there</Heading>
          <p className="text-center lead mb-5">
            Most international flights will arrive at the Jomo Kenyatta International Airport (JKIA)
            in Nairobi. The other international airport is Moi International Airport (MBA) in
            Mombasa on the Kenyan coast. It is primarily used for domestic flights, but
            international routes do arrive here for travelers going to Mombasa. If traveling from
            Nairobi, you would need to take a domestic flight into Mombasa. This is an approximately
            45-minute flight.
          </p>

          <hr className="my-5" />

          <Row>
            <Col md={6}>
              <h2 className="display-4">Domestic Air Travel</h2>
              <p>
                Domestic air travel within Kenya is easy due to the number of airlines and low-cost
                daily flights. Light aircraft offer the easiest way to travel long distances.
              </p>
              <p>
                See the links below for the most popular airlines with flights between Nairobi and
                Mombasa.
              </p>
              <Button
                as="a"
                href="https://www.kenya-airways.com"
                className="mb-2 mr-2"
                target="_blank"
              >
                Kenya Airways
              </Button>
              <Button as="a" href="https://www.jambojet.com" className="mb-2" target="_blank">
                JamboJet
              </Button>
            </Col>
            <Col md={{ offset: 1, span: 5 }}>
              <GatsbyImage
                image={data.jambojet.childImageSharp.gatsbyImageData}
                loading="eager"
                objectFit="cover"
                alt=""
              />
            </Col>
          </Row>

          <hr className="my-5" />

          <Row>
            <Col md={{ offset: 1, span: 6, order: 'last' }}>
              <h2 className="display-4">Railway</h2>
              <p>
                If you have the time, the other option is the SGR (Standard Gauge Railway) that
                connects Mombasa with Nairobi and gets you from one city to the other in an average
                of 6 hours.
              </p>
              <p>Click the button below for online booking.</p>
              <Button as="a" href="https://metickets.krc.co.ke/" className="mb-2" target="_blank">
                Madaraka Express
              </Button>
            </Col>
            <Col md={5}>
              <GatsbyImage
                image={data.railway.childImageSharp.gatsbyImageData}
                loading="eager"
                objectFit="cover"
                alt=""
              />
            </Col>
          </Row>

          <hr className="my-5" />

          <Row>
            <Col md={6}>
              <h2 className="display-4">Transport to hotel</h2>
              <p>
                If you require a taxi from the airport to the hotel, please send your flight details
                and arrival times to our wedding planners, Sapna &amp; Shitul using the button below
                by __________________(date to be agreed on).
              </p>
              <p>They will be arranging all the guest transfers as required.</p>
              <Button as="a" href="mailto:sachanias@outlook.com" className="mb-2" target="_blank">
                Arrange pickup
              </Button>
            </Col>
            <Col md={{ offset: 1, span: 5 }}>
              <GatsbyImage
                image={data.taxi.childImageSharp.gatsbyImageData}
                loading="eager"
                objectFit="cover"
                alt=""
              />
            </Col>
          </Row>
        </Container>
      </Section>
      <Section variant="light">
        <Container>
          <Heading>Entry Requirements</Heading>
          <Row>
            <Col sm={6}>
              <h2>COVID19</h2>
              <p>
                Please note, you will need either proof of vaccination or a negative COVID-19 PCR
                test conducted no more than 72 hours before departure. Click the button below for a
                comprehensive list of Kenya’s up-to-date COVID19 entry requirements.
              </p>
              <Button
                as="a"
                href="https://www.kcaa.or.ke/covid-19/covid-19-travel-requirements"
                target="_blank"
                className="mb-2"
              >
                COVID19 Travel Requirements
              </Button>
            </Col>
            <Col sm={6}>
              <h2>VISA</h2>
              <p>
                Although visa applications are being processed in real time, please allow an
                allowance of a few working days especially if applying on a Friday. If you need help
                with this, you can contact the travel agents listed below - just for the convenience
                of applying for it but there may be a fee for this service.
              </p>
              <Button as="a" href="https://evisa.go.ke" target="_blank" className="mb-2">
                Apply for a VISA
              </Button>
            </Col>
          </Row>
        </Container>
      </Section>
      <Section>
        <Container>
          <Heading>Vaccinations and Health</Heading>
          <p>
            For guests from the UK, Germany & Dubai, no vaccinations are required.
            <br />
            For guests from India, yellow fever and polio vaccinations will be a requirement to
            travel.
          </p>
          <p>
            Please do bring malaria prophylaxis and some good mosquito repellant to save you the
            time going shopping for it here. In Mombasa, we generally don’t take antimalarials, but
            that is as we are here semi-permanently. We do take measures not to get bitten.
          </p>
          <p>
            Below is a fit for travel list, but realistically you will not require any vaccines
            unless you want to go off the beaten track. If you have been to a country with yellow
            fever you will need the yellow fever certificate to enter the country.
          </p>
          <Button
            as="a"
            href="https://www.fitfortravel.nhs.uk/destinations/africa/kenya"
            target="_blank"
            className="mb-2"
          >
            NHS fit for travel: Kenya
          </Button>
        </Container>
      </Section>
    </Layout>
  )
}

export default TravelPage

export const pageQuery = graphql`
  query Travel {
    jambojet: file(relativePath: { eq: "jambojet.jpg" }) {
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
    railway: file(relativePath: { eq: "railway.png" }) {
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
    taxi: file(relativePath: { eq: "taxi.jpg" }) {
      id
      childImageSharp {
        gatsbyImageData(
          transformOptions: { cropFocus: CENTER }
          width: 800
          height: 500
          layout: CONSTRAINED
        )
      }
      absolutePath
    }
  }
`
