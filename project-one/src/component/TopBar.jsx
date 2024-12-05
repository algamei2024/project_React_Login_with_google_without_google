import React from 'react'
import { Link } from 'react-router-dom'

export default function TopBar() {
  return (
      <div>
          <div className="container top-bar">
              <h2>Store</h2>
              <Link to='/' className='generate'>Got to web sit</Link>
          </div>
    </div>
  )
}
