import React from 'react'
import { useRouteError, Link } from 'react-router-dom'
const Error = () => {
  const error = useRouteError()
  console.log(error)
  if (error.status === 404) {
    return (
      <div class="hero min-h-screen bg-base-200">
        <div class="hero-content text-center">
          <div class="max-w-md">
            <h1 class="text-5xl font-bold">Not Found</h1>
            <p class="py-6">{error.data}</p>
            <Link to="/" className="btn btn-primary">
              Back to Homepage
            </Link>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div class="hero min-h-screen bg-base-200">
        <div class="hero-content text-center">
          <div class="max-w-md">
            <h1 class="text-5xl font-bold">Some Thing went Wrong</h1>
            <p class="py-6">{error.data}</p>
            <Link to="/" className="btn btn-primary">
              Back to Homepage
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Error
