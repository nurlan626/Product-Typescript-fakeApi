import React from 'react'

interface errorMessageProps {
    error: string
}

const Error = ({error}: errorMessageProps) => {
  return (
    <div>{error}</div>
  )
}

export default Error