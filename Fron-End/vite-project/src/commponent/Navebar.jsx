import React from 'react'
import { Link } from 'react-router'

const Navebar = () => {
  return (
    <div>
      <ul>
        <li><Link to='/'>home</Link> </li>
        <li><Link to='/contact'>contact</Link> </li>
        <li><Link to='/service'>service</Link></li>
        <li><Link>page</Link></li>
        <li><Link>blogs</Link></li>
      </ul>
    </div>
  )
}

export default Navebar
