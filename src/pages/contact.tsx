import React, { FormEvent, useEffect, useState } from 'react'
import { Alert, Button, Card, Col, Form, Row } from 'react-bootstrap'
import { Heading } from '../components/Heading'
import { PageLayout } from '../components/PageLayout'
import { SEO } from '../components/seo'
import { sendForm } from '../utils/sendForm'

function ContactPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [category, setCategory] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [subscribe, setSubscribe] = useState(true)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    if (submitted) {
      setName('')
      setEmail('')
      setCategory('')
      setSubject('')
      setMessage('')
      setError('')
    }
  }, [submitted])

  useEffect(() => {
    if (error) {
      setSubmitted(false)
    }
  }, [error])

  return (
    <PageLayout>
      <SEO title="Contact" />
      <Heading>Get In Touch</Heading>
      <p className="lead mb-4">
        Contact us to design your couture or bridal dress, discuss your project in depth or for
        press purposes.
      </p>

      {submitted && (
        <Alert variant="success">
          Thanks for registering. We will be in touch in the next 24h.
        </Alert>
      )}

      {error && <Alert variant="danger">{error}</Alert>}

      <Card bg="light">
        <Card.Body>
          <Row
            as={Form}
            onSubmit={(event: FormEvent) => {
              event.preventDefault()
              sendForm({ name, email, subject: `${category}: ${subject}`, message, subscribe })
                .then(() => setSubmitted(true))
                .catch(err => setError(err.message))
            }}
          >
            <Col sm={6} as={Form.Group} controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                required
                value={name}
                onChange={event => setName(event.target.value)}
              />
            </Col>

            <Col sm={6} as={Form.Group} controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email address"
                required
                value={email}
                onChange={event => setEmail(event.target.value)}
              />
            </Col>

            <Col sm={6} as={Form.Group} controlId="category">
              <Form.Label>Category</Form.Label>
              <Form.Control
                as="select"
                custom
                required
                value={category}
                onChange={event => setCategory(event.target.value)}
              >
                <option value="" disabled hidden>
                  Select a category
                </option>
                <option>Projects</option>
                <option>Couture &amp; Bridal</option>
                <option>Press</option>
                <option>Other</option>
              </Form.Control>
            </Col>

            <Col sm={6} as={Form.Group} controlId="message">
              <Form.Label>Subject</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter a subject for your message"
                required
                value={subject}
                onChange={event => setSubject(event.target.value)}
              />
            </Col>

            <Col sm={12} as={Form.Group} controlId="formBasicEmail">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                placeholder="Enter a subject for your message"
                required
                value={message}
                onChange={event => setMessage(event.target.value)}
              />
            </Col>

            <Col sm={6} as={Form.Group} controlId="newsletter">
              <Form.Check
                type="checkbox"
                label="Subscribe to the newsletter"
                checked={subscribe}
                onChange={() => setSubscribe(!subscribe)}
              />
            </Col>

            <Col sm={6} className="text-right">
              <Button type="submit" size="lg">
                Send
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </PageLayout>
  )
}

export default ContactPage
