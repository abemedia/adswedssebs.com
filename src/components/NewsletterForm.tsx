import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { FormEvent, useState } from 'react'
import { Alert, Button, Form, FormControl, InputGroup } from 'react-bootstrap'
import { useMailchimp } from '../hooks/mailchimpSubscribe'

export function NewsletterForm() {
  const [value, setValue] = useState('')
  const url = process.env.GATSBY_MAILCHIMP_URL
  const { message, isSubmitting, isSubmitted, subscribe } = useMailchimp(url)

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    subscribe({ EMAIL: value })
  }

  return (
    <Form onSubmit={handleSubmit}>
      <h2 className="text-uppercase text-center mb-4">Sign up to our newsletter</h2>
      {message && (
        <Alert variant={isSubmitted ? 'success' : 'danger'}>
          <div
            dangerouslySetInnerHTML={{
              __html: message.replace('<a', '<a class="alert-link" target="_blank"'),
            }}
          />
        </Alert>
      )}
      {!isSubmitted && (
        <InputGroup size="lg">
          <FormControl
            type="email"
            placeholder="Enter your email address"
            aria-label="Recipient's username"
            disabled={isSubmitting}
            value={value}
            onChange={e => setValue(e.target.value)}
            required
          />
          <InputGroup.Append>
            <Button variant="secondary" disabled={isSubmitting} type="submit">
              {isSubmitting ? <FontAwesomeIcon icon={faSpinner} spin /> : 'Join'}
            </Button>
          </InputGroup.Append>
        </InputGroup>
      )}
    </Form>
  )
}
