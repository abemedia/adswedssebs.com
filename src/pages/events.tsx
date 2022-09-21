import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { Heading } from '../components/Heading'
import { Layout } from '../components/Layout'
import { Section } from '../components/Section'
import { SEO } from '../components/seo'

function EventsPage() {
  return (
    <Layout>
      <SEO title="Events" />
      <Section variant="light" className="text-center" fade>
        <Container>
          <Heading>Event Details</Heading>
          <Row>
            <Col md={6} className="mb-4">
              <Card>
                <Card.Header as="h3">Welcome Dinner</Card.Header>
                <Card.Body>
                  <Card.Text>
                    In true Kenyan fashion, we will start things off with a welcome barbeque. This
                    will be an opportunity to settle in, enjoy the sunset, meet the other guests and
                    enjoy traditional Kenyan BBQ known as nyama choma!
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <dl>
                    <dt>When</dt>
                    <dd>Friday 17th Feb 2023 | 6:30pm - 11pm</dd>
                    <dt>Where</dt>
                    <dd>Beach Front Lawns, Whitesands Hotel</dd>
                    <dt>Dress Code</dt>
                    <dd>African Inspired: Think reds, greens, floral and beaded!</dd>
                  </dl>
                </Card.Footer>
              </Card>
            </Col>
            <Col md={6} className="mb-4">
              <Card>
                <Card.Header as="h3">Civil Ceremony</Card.Header>
                <Card.Body>
                  <Card.Text>
                    Join us for our wedding ceremony by the beach to get us formally hitched! Dress
                    code is smart casual. This will follow with some light bitings and drinks. Since
                    the Mendhi will follow a few hours later you will have some time to relax and
                    change in between.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <dl>
                    <dt>When</dt>
                    <dd>Saturday 18th Feb 2023 | 5pm - 6pm</dd>
                    <dt>Where</dt>
                    <dd>Beach Front Lawns, Whitesands Hotel</dd>
                    <dt>Dress Code</dt>
                    <dd>Smart Casual</dd>
                  </dl>
                </Card.Footer>
              </Card>
            </Col>
            <Col md={6} className="mb-4">
              <Card>
                <Card.Header as="h3">Mendhi</Card.Header>
                <Card.Body>
                  <Card.Text>
                    Get out your Bollywood gear and dancing shoes next it’s time for our mendhi!
                    This is a traditional Asian ceremony with plenty of colours, food and of course
                    lots of dancing! The dress code for ladies and gents is traditional Indian wear,
                    think big and bright for this night!
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <dl>
                    <dt>When</dt>
                    <dd>Saturday 18th Feb 2023 | 8.15pm - late</dd>
                    <dt>Where</dt>
                    <dd>The Dome, Whitesands Hotel</dd>
                    <dt>Dress Code</dt>
                    <dd>Bollywood - think bright colors!</dd>
                  </dl>
                </Card.Footer>
              </Card>
            </Col>
            <Col md={6} className="mb-4">
              <Card>
                <Card.Header as="h3">Reception</Card.Header>
                <Card.Body>
                  <Card.Text>
                    Once you have slept off the dancing from the night before, get suited and booted
                    for the wedding reception for a final evening together.
                    <br />
                    <br />
                    <br />
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <dl>
                    <dt>When</dt>
                    <dd>Sunday 19th Feb 2023 | 7pm - 11pm</dd>
                    <dt>Where</dt>
                    <dd>The Dome, Whitesands Hotel</dd>
                    <dt>Dress Code</dt>
                    <dd>Formal</dd>
                  </dl>
                </Card.Footer>
              </Card>
            </Col>
          </Row>
        </Container>
      </Section>
    </Layout>
  )
}

export default EventsPage
