import React from 'react'
import { useRouteError } from 'react-router-dom'
const Error = () => {
  const error = useRouteError()
  if (error.status === 404) {
    return <h1>Not found</h1>
  } else {
    return <div>Some Thing went Wrong</div>
  }
}

export default Error
