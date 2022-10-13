import React from 'react'
import { Form } from 'react-bootstrap'
import { useRadioInput } from 'react-google-forms-hooks'

interface RadioInputProps {
  id: string
}

export function RadioInput({ id }: RadioInputProps) {
  const { options, error } = useRadioInput(id)

  return (
    <>
      {options.map(o => (
        <Form.Check
          type="radio"
          label={o.label}
          id={o.id}
          key={o.id}
          {...o.registerOption()}
          isInvalid={!!error}
        />
      ))}
      {error && (
        <Form.Control.Feedback type="invalid">This field is required</Form.Control.Feedback>
      )}
    </>
  )
}
