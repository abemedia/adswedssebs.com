import React from 'react'
import * as s from './Heading.module.scss'

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: React.ElementType
  center?: boolean
}

export function Heading({ as: Component = 'h1', center, className, ...props }: HeadingProps) {
  const c = center ? 'text-center' : ''
  return (
    <Component
      className={`${s.heading} ${c} ${className || ''} mb-4 pb-2 border-bottom text-uppercase`}
      {...props}
    />
  )
}
