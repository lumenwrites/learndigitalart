import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function CTAButton({children, href}) {
  return (
    <a className="btn-cta" href={href}>
      {children}
      <FontAwesomeIcon icon={["fas", "arrow-right"]} />
    </a>
  )
}
