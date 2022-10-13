import React from 'react'
import { Button, Form, Modal, ModalProps } from 'react-bootstrap'
import { GoogleFormProvider, useGoogleForm } from 'react-google-forms-hooks'
import { RadioInput } from '../GoogleForm/RadioInput'
import { ShortAnswerInput } from '../GoogleForm/ShortAnswerInput'

interface RSVPProps extends ModalProps {
  title: string
  description: string
  fields: {
    id: string
    label: string
    description: string | null
    type:
      | 'CHECKBOX'
      | 'RADIO'
      | 'SHORT_ANSWER'
      | 'LONG_ANSWER'
      | 'RADIO_GRID'
      | 'CHECKBOX_GRID'
      | 'DROPDOWN'
      | 'LINEAR'
    required: boolean
  }[]
}

export function RSVP(props: RSVPProps) {
  const { title, fields, show, onHide } = props

  const methods = useGoogleForm({ form: props as any })
  const onSubmit = async (data: any) => {
    await methods.submitToGoogleForms(data)
    onHide?.()
    methods.reset()
    alert('RSVP successfully submitted!') // eslint-disable-line no-alert
  }

  return (
    <GoogleFormProvider {...methods}>
      <Modal show={show} onHide={onHide}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            {fields.map(field => {
              const { id } = field

              let questionInput = null
              switch (field.type) {
                case 'RADIO':
                  questionInput = <RadioInput id={id} />
                  break
                case 'SHORT_ANSWER':
                  questionInput = <ShortAnswerInput id={id} />
                  break
                default:
                  return null
              }

              return (
                <Form.Group controlId={id} key={id}>
                  <Form.Label>{field.label}</Form.Label>
                  {questionInput}
                  <Form.Text>{field.description}</Form.Text>
                </Form.Group>
              )
            })}
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={onHide}>
              Cancel
            </Button>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </GoogleFormProvider>
  )
}
