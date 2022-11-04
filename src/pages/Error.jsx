import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <>
    <div className="err">Oops! you have entered wrong URL</div>
    <Link to="/">Go back Home</Link>
    </>
  )
}

export default Error