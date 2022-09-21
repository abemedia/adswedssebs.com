import React from 'react'
import s from './Spinner.module.scss'

interface SpinnerProps {
  centered?: boolean
}

export function Spinner({ centered }: SpinnerProps) {
  return <div className={`${s.loader} ${centered ? s.centered : ''}`}>Loading...</div>
}
