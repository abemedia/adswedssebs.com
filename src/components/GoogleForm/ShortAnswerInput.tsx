import React from 'react'
import { Form } from 'react-bootstrap'
import { useShortAnswerInput } from 'react-google-forms-hooks'

interface ShortAnswerInputProps {
  id: string
}

export function ShortAnswerInput({ id }: ShortAnswerInputProps) {
  const { register, error } = useShortAnswerInput(id)

  return (
    <>
      <Form.Control {...register()} isInvalid={!!error} />
      {error && (
        <Form.Control.Feedback type="invalid">This field is required</Form.Control.Feedback>
      )}
    </>
  )
}
