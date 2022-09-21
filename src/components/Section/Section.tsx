import React from 'react'
import * as s from './Section.module.scss'

export interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: '' | 'light' | 'dark' | 'primary'
  as?: React.ElementType
  fade?: boolean
}

export function Section({
  children,
  className,
  variant,
  as: Component = 'div',
  fade,
  ...props
}: SectionProps) {
  const bg = `${variant ? `bg-${variant}` : ''} ${fade ? 'bg-fade' : ''}`
  return (
    <Component className={`${s.section} ${className || ''} ${bg}`} {...props}>
      {children}
    </Component>
  )
}
