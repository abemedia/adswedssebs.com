import { faLock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import {
  Alert,
  Button,
  Card,
  Container,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
  InputGroup,
  OverlayTrigger,
  Tooltip,
} from 'react-bootstrap'
import { Events } from '../EventsContext'

interface LoginProps {
  submit: (s: Events) => void
}

export function Login({ submit }: LoginProps) {
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError(false)

    switch (password) {
      case 'mombasa':
        submit({ bbq: true, civil: true, mehndi: true, reception: true })
        break
      case 'kenya':
        submit({ bbq: false, civil: true, mehndi: true, reception: true })
        break
      case 'safari':
        submit({ bbq: false, civil: false, mehndi: true, reception: true })
        break
      case 'beach':
        submit({ bbq: false, civil: false, mehndi: false, reception: true })
        break
      default:
        setError(true)
        break
    }
  }

  return (
    <article className="d-flex align-items-center text-center" style={{ minHeight: '100vh' }}>
      <Container style={{ maxWidth: 400 }} className="pb-5 mb-5">
        <h1 className="h4 mb-4">Sign in to #AdsWedsSebs</h1>
        <Card className="mb-3" bg="light">
          <Card.Body>
            <Form onSubmit={handleSubmit}>
              {error && <Alert variant="danger">Invalid password</Alert>}

              <FormGroup className="mb-4" controlId="password">
                <InputGroup hasValidation>
                  <InputGroup.Prepend>
                    <OverlayTrigger
                      placement="left"
                      overlay={<Tooltip id="tooltip-password">Password</Tooltip>}
                    >
                      <InputGroup.Text as={FormLabel}>
                        <FontAwesomeIcon icon={faLock} />
                        <span className="sr-only">Password</span>
                      </InputGroup.Text>
                    </OverlayTrigger>
                  </InputGroup.Prepend>
                  <Form.Control
                    type="password"
                    placeholder="Enter the password you received."
                    required
                    value={password}
                    onChange={event => setPassword(event.target.value)}
                    isInvalid={error}
                  />
                  {error && (
                    <FormControl.Feedback type="invalid">Invalid password</FormControl.Feedback>
                  )}
                </InputGroup>
              </FormGroup>

              <Button size="lg" block type="submit">
                Sign in
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </article>
  )
}
