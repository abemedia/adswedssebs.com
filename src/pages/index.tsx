import { faSafari } from '@fortawesome/free-brands-svg-icons'
import { faBed, faCalendarAlt, faPlaneDeparture } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { graphql, Link, PageProps } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { Heading } from '../components/Heading'
import { Layout } from '../components/Layout'
import { NewsletterForm } from '../components/NewsletterForm'
import { RSVP } from '../components/RSVP'
import { Section } from '../components/Section'
import { SEO } from '../components/seo'
import { useWindowSize } from '../hooks/useWindowSize'
import ChevronDown from '../images/chevron-down.inline.svg'
import { Must } from '../types'
import * as s from './index.module.scss'

function IndexPage({ data }: PageProps<Must<Queries.HomeQuery>>) {
  const [showRSVP, setShowRSVP] = useState(false)
  const { allGoogleForms, ...banners } = data
  const rsvp = JSON.parse(allGoogleForms.edges[0].node.internal.content)

  const { width } = useWindowSize()
  const [banner, setBanner] = useState<keyof typeof banners>('lg')
  const [position, setPosition] = useState('right')

  useEffect(() => {
    if (width < 576) {
      setBanner('xs')
      setPosition('center bottom')
    } else if (width < 768) {
      setBanner('sm')
      setPosition('center bottom')
    } else {
      setBanner('lg')
      setPosition('right')
    }
  }, [width])

  return (
    <Layout overlay>
      <RSVP {...rsvp} show={showRSVP} onHide={() => setShowRSVP(false)} />
      <SEO title="Home" />
      <div className={`position-relative ${s.banner}`}>
        {width && (
          <GatsbyImage
            image={banners[banner].childImageSharp.gatsbyImageData}
            loading="eager"
            objectFit="cover"
            objectPosition={position}
            alt=""
            className={s.banner}
          />
        )}

        <div className={s.box}>
          <h1 className={s.heading}>
            Adam & Nusayba
            <hr />
            <small>invite you to their wedding celebration!</small>
          </h1>

          <br />
          <h2 className={s.subheading}>
            17th, 18th & 19th February
            <br />
            at Sarova Whitesands Mombasa, Kenya
          </h2>
          <div className="d-none d-lg-block mt-5">
            <Button size="lg" className={s.btn} onClick={() => setShowRSVP(true)}>
              RSVP
            </Button>
          </div>
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
            We can’t wait to celebrate our special day with you! We have created this website as a
            convenient way to share all of the important details with you in the lead up to our
            wedding. This includes information on getting to Kenya, accommodation options, event
            details and some handy tips if you are considering extending your visit to travel around
            magical Kenya!
          </p>
          <p>
            Thank you for your ongoing love and support. We are so excited to celebrate our wedding
            with you and can’t wait to see you all there! For more information or general questions,
            please contact our wedding planners Sapna & Shitul Sachania on{' '}
            <a
              href="mailto:sachanias@outlook.com"
              target="_blank"
              className="mb-2"
              rel="noreferrer"
            >
              sachanias@outlook.com
            </a>
            , who will aim to get back to you as soon as possible.
          </p>
        </Container>
      </Section>
      <Section variant="primary" className="text-white text-center">
        <Container>
          <p className="display-4 mb-4">Please don’t forget to RSVP by the 10th November 2022.</p>
          <Button
            size="lg"
            variant="dark"
            style={{ fontSize: '2rem' }}
            onClick={() => setShowRSVP(true)}
          >
            Click here to RSVP
          </Button>
        </Container>
      </Section>
      <Section className="text-center">
        <Container>
          <Heading as="h2">Infos</Heading>
          <p className="lead mb-5">
            Please see the following links for more information about our wedding &amp; visiting
            Kenya. Make sure you check out the travel page to find out about VISAs, required COVID
            tests etc.
          </p>
          <Row className="mb-n5">
            <Col xs={6} lg={3} className="mb-5">
              <FontAwesomeIcon icon={faCalendarAlt} size="5x" className="mb-4" />
              <h4>Events</h4>
              <p>Find out what’s on, where it is and the dress code of each event.</p>
              <Button as={Link} to="events">
                More Info
              </Button>
            </Col>
            <Col xs={6} lg={3} className="mb-5">
              <FontAwesomeIcon icon={faPlaneDeparture} size="5x" className="mb-4" />
              <h4>Travel</h4>
              <p>Find out how to get to our wedding, including flights and hotel transfer.</p>
              <Button as={Link} to="travel">
                More Info
              </Button>
            </Col>
            <Col xs={6} lg={3} className="mb-5">
              <FontAwesomeIcon icon={faBed} size="5x" className="mb-4" />
              <h4>Accommodation</h4>
              <p>Find out about available hotels in the area and where to book them.</p>
              <Button as={Link} to="accommodation">
                More Info
              </Button>
            </Col>
            <Col xs={6} lg={3} className="mb-5">
              <FontAwesomeIcon icon={faSafari} size="5x" className="mb-4" />
              <h4>Explore Kenya</h4>
              <p>Find out about cool stuff you and your family can do while in Kenya.</p>
              <Button as={Link} to="explore">
                More Info
              </Button>
            </Col>
          </Row>
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
    allGoogleForms {
      edges {
        node {
          id
          internal {
            content
          }
        }
      }
    }
    lg: file(relativePath: { eq: "header.jpg" }) {
      id
      childImageSharp {
        gatsbyImageData(
          transformOptions: { cropFocus: EAST }
          width: 1920
          height: 1280
          layout: CONSTRAINED
        )
      }
    }
    sm: file(relativePath: { eq: "header_sm.jpg" }) {
      id
      childImageSharp {
        gatsbyImageData(transformOptions: { cropFocus: CENTER }, height: 1920, layout: CONSTRAINED)
      }
    }
    xs: file(relativePath: { eq: "header_xs.jpg" }) {
      id
      childImageSharp {
        gatsbyImageData(transformOptions: { cropFocus: CENTER }, height: 1920, layout: CONSTRAINED)
      }
    }
  }
`
