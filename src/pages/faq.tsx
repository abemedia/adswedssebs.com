import React from 'react'
import { Accordion, Card, Container } from 'react-bootstrap'
import { Heading } from '../components/Heading'
import { Layout } from '../components/Layout'
import { Section } from '../components/Section'
import { SEO } from '../components/seo'

function EventsPage() {
  const faq = [
    {
      q: 'When is the RSVP deadline?',
      a: 'Please RSVP by ____________ so that we can get an accurate headcount, definite numbers which will help us plan.',
    },
    {
      q: 'Can we book different accommodations?',
      a: 'Of course, your attendance at the functions is what matters to us most! Please let us know in your RSVP if you will be booking alternative accommodation.',
    },
    {
      q: 'I am coming from out of town. Where should I stay?',
      a: (
        <>
          If you are coming from out of town and need a hotel, we have 2 options for you
          <ol>
            <li>
              Sarova Whitesands Beach Resort and Spa which is where the wedding events will be
              taking place so would be very convenient Please click on the link provided which will
              take you to the room options at the hotel and from where you can book your room
            </li>
            <li>
              Bamburi Beach Hotel is a 10 minutes’ walk from the beach and a few minutes’ drive from
              Whitesands Beach Hotel We have secured some early bird discounts on accommodation
              rates: Ksh. 18,000 double & Ksh. 13,500.00 single on All Inclusive meal plan (all
              meals and drinks included) Please quote NUSAYBA & ADAM wedding when booking with the
              hotel or contact our Wedding Planners Sapna & Shitul Sachania for assistance in
              booking at this hotel (+254-733755563/ +254-733729375/ sachanias@outlook.com)
            </li>
          </ol>
        </>
      ),
    },
  ]
  return (
    <Layout>
      <SEO title="Events" />
      <Section>
        <Container>
          <Heading>Frequently Asked Questions</Heading>
          <p className="lead">Please click on the questions below to view the answers.</p>
          <Accordion>
            {faq.map(({ q, a }, i) => (
              <Card>
                <Accordion.Toggle as={Card.Header} variant="link" eventKey={String(i)}>
                  {q}
                </Accordion.Toggle>
                <Accordion.Collapse eventKey={String(i)}>
                  <Card.Body>{a}</Card.Body>
                </Accordion.Collapse>
              </Card>
            ))}
          </Accordion>
        </Container>
      </Section>
    </Layout>
  )
}

export default EventsPage
