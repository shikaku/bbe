import React from 'react'
import Menu from 'src/components/menu'
import './style.css'

export default (props) => (
  <div className="container page">
    <div className="page__logo">
      <div className="logo">Bitcoin Blockchain Explorer</div>
    </div>
    <div className="page__nav">
      <Menu />
    </div>
    <div className="page__body">
      {props.children}
    </div>
  </div>
)
