import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { EventsContext } from '../components/EventsContext'
import { Heading } from '../components/Heading'
import { Layout } from '../components/Layout'
import { Section } from '../components/Section'
import { SEO } from '../components/seo'

function EventsPage() {
  return (
    <Layout>
      <SEO title="Events" />
      <Section className="text-center">
        <Container>
          <Heading>Event Details</Heading>
          <p className="lead">
            The wedding will take place at Sarova Whitesands Beach Resort & Spa in Mombasa. If
            you’re unsure where to go in the hotel, just ask a member of staff and they will be able
            to guide you to the location.
          </p>
          <Button
            as="a"
            href="https://goo.gl/maps/uKRLMe3sWdA2hUiE9"
            target="_blank"
            rel="noreferrer"
            size="lg"
          >
            Click here for directions to Sarova Whitesands Beach Resort & Spa
          </Button>
          <Row className="mt-5 mb-n4">
            <EventsContext.Consumer>
              {({ bbq, civil, mehndi, reception }) => {
                if (!bbq && !civil && !mehndi && reception) {
                  return (
                    <Col lg={12} className="mb-4">
                      <Card>
                        <Card.Header as="h3">Reception</Card.Header>
                        <Card.Body>
                          <Card.Text>
                            Get suited and booted to celebrate our wedding reception with us.
                          </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                          <dl>
                            <dt>When</dt>
                            <dd>Sunday 19th Feb 2023 | 6pm</dd>
                            <dt>Where</dt>
                            <dd>Beach Front Lawns, Sarova Whitesands</dd>
                            <dt>Dress Code</dt>
                            <dd>Formal</dd>
                          </dl>
                        </Card.Footer>
                      </Card>
                    </Col>
                  )
                }
                return (
                  <>
                    {bbq && (
                      <Col lg={6} className="mb-4">
                        <Card>
                          <Card.Header as="h3">Welcome Dinner</Card.Header>
                          <Card.Body>
                            <Card.Text>
                              In true Kenyan fashion, we will start things off with a welcome
                              barbecue.
                              <br className="d-none d-lg-block" />
                              This will be an opportunity to settle in, enjoy the sunset, meet the
                              other guests and enjoy a traditional Kenyan BBQ, known as nyama choma!
                            </Card.Text>
                          </Card.Body>
                          <Card.Footer>
                            <dl>
                              <dt>When</dt>
                              <dd>Friday 17th Feb 2023 | 6:30pm</dd>
                              <dt>Where</dt>
                              <dd>Beach Front Lawns, Sarova Whitesands</dd>
                              <dt>Dress Code</dt>
                              <dd>African Inspired: Think reds, greens, floral and beaded!</dd>
                            </dl>
                          </Card.Footer>
                        </Card>
                      </Col>
                    )}
                    {civil && (
                      <Col lg={6} className="mb-4">
                        <Card>
                          <Card.Header as="h3">Civil Ceremony</Card.Header>
                          <Card.Body>
                            <Card.Text>
                              Join us for our wedding ceremony by the beach to get us formally
                              hitched! There will also be some light bites and drinks. The mehndi
                              will follow a few hours later, so you will have some time to relax and
                              change in-between.
                            </Card.Text>
                          </Card.Body>
                          <Card.Footer>
                            <dl>
                              <dt>When</dt>
                              <dd>Saturday 18th Feb 2023 | 3:45pm</dd>
                              <dt>Where</dt>
                              <dd>Beach Front Lawns, Sarova Whitesands</dd>
                              <dt>Dress Code</dt>
                              <dd>Smart</dd>
                            </dl>
                          </Card.Footer>
                        </Card>
                      </Col>
                    )}
                    {mehndi && (
                      <Col lg={6} className="mb-4">
                        <Card>
                          <Card.Header as="h3">Mendhi</Card.Header>
                          <Card.Body>
                            <Card.Text>
                              Get out your Bollywood gear and dancing shoes, it’s time for our
                              mehndi! This is a traditional Asian ceremony with plenty of colours,
                              food, music and, of course, lots of dancing! The dress code for ladies
                              and gents is traditional Indian wear, think big and bright for this
                              night!
                            </Card.Text>
                          </Card.Body>
                          <Card.Footer>
                            <dl>
                              <dt>When</dt>
                              <dd>Saturday 18th Feb 2023 | 8pm</dd>
                              <dt>Where</dt>
                              <dd>The Kumbi Conference Center, Sarova Whitesands</dd>
                              <dt>Dress Code</dt>
                              <dd>Bollywood - think bright colors!</dd>
                            </dl>
                          </Card.Footer>
                        </Card>
                      </Col>
                    )}
                    {reception && (
                      <Col lg={6} className="mb-4">
                        <Card>
                          <Card.Header as="h3">Reception</Card.Header>
                          <Card.Body>
                            <Card.Text>
                              Once you have slept off the dancing from the night before, get suited
                              and booted for the wedding reception, to celebrate the final evening
                              of our wedding.
                              <br className="d-none d-lg-block d-xl-none" />
                              <br className="d-none d-lg-block" />
                              <br className="d-none d-lg-block" />
                            </Card.Text>
                          </Card.Body>
                          <Card.Footer>
                            <dl>
                              <dt>When</dt>
                              <dd>Sunday 19th Feb 2023 | 6pm</dd>
                              <dt>Where</dt>
                              <dd>Beach Front Lawns, Sarova Whitesands</dd>
                              <dt>Dress Code</dt>
                              <dd>Formal</dd>
                            </dl>
                          </Card.Footer>
                        </Card>
                      </Col>
                    )}
                  </>
                )
              }}
            </EventsContext.Consumer>
          </Row>
        </Container>
      </Section>
    </Layout>
  )
}

export default EventsPage
