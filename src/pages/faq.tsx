import { Link } from 'gatsby'
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
          Please see the <Link to="/accommodation">accommodation page</Link> for more infos.
        </>
      ),
    },
    {
      q: 'What will the weather be like?',
      a: 'In February, you can expect an average of 27°C- 32°C in the day falling slightly in the evenings. It may  get slightly windy near the beach side in the evenings so you can carry a light shawl or jacket.  There will be plenty of sun expected in that month so get ready with your sun block lotions for some fun in the pool, sea and on the beautiful white beaches.',
    },
    {
      q: 'Are the ceremony and reception locations wheelchair accessible?',
      a: 'Yes',
    },
    {
      q: 'What should I wear?',
      a: (
        <>
          Please see the <Link to="/events">events page</Link> for more infos.
        </>
      ),
    },
    {
      q: "What kind of shoes should/shouldn't I wear?",
      a: "Be as comfortable as you can as we want to party long and hard. But a tip for the ladies: If you do like your heels, try not to wear stiletto heels on the wedding day because the sand and grass will be problematic. Wedges or block heels should be ok but we wouldn't want any of you breaking any ankles. For the Sangeet/ Mehndi event, as it will be indoors, stilettos and heels are totally ok but your feet may complain after a few dances!",
    },
    {
      q: 'Is it okay to take pictures with our phones and cameras during the wedding?',
      a: 'Yes! We would love for you to take photos and share them using our hashtag except the Wedding Ceremony where we would ask it is left to the professional team on-site and we will ensure they are all shared for you to have copies of / to download after the event.',
    },
    {
      q: 'Will I be able to get my hair and makeup done?',
      a: (
        <>
          <p>
            We will organise hairdressers and makeup artists for guests if there are enough ladies
            who would like to use this service. It will cost KSh 2,500 per person for hair and KSh
            2,500 per person for make-up (approx. £17 per person for hair or make-up). If you would
            like to wear a saree or need help draping a chunni, the ladies can help too (rates:
            Saree draping: 500/- and Chunni draping: 250/-)
          </p>
          <p>
            Please let us know in advance what you would require so that we can organise these
            services.
          </p>
        </>
      ),
    },
    {
      q: 'Whom should I call with questions or assistance?',
      a: (
        <>
          Please contact our wedding planners Sapna <a href="tel:+254733755563">+254 733 755563</a>{' '}
          or Shitul <a href="tel:+254733729375">+254 733 729375</a> (both also on WhatsApp) or email{' '}
          <a href="mailto:sachanias@outlook.com">sachanias@outlook.com</a>.
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
