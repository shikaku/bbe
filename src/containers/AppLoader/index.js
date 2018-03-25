import React, { Component } from 'react'
import { connect } from 'react-redux'
import Loader from 'src/components/Loader'

const mapStateToProps = (state) => ({
  show: state.getIn(['app', 'state']) !== 'loaded',
})

export default connect(mapStateToProps)(Loader)
