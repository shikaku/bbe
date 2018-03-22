import React from 'react'
import { NavLink } from 'react-router-dom'

export default () => (
  <ul class="nav nav-tabs">
    <li class="nav-item">
      <NavLink exact to="/" className="nav-link">Home</NavLink>
    </li>
    <li class="nav-item">
      <NavLink to="/blocks" className="nav-link">Blocks</NavLink>
    </li>
  </ul>
)
