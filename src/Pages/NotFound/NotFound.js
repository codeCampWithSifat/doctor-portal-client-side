import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
      <h3>This Page Is Now In Development Mode</h3>
      <Link to="/home" style={{textDecoration :"none"}}>
      <Button variant='contained'>Go To Home Page</Button>
      </Link>
    </div>
  )
}

export default NotFound
