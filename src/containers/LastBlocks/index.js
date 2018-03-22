import React from 'react'
import { connect } from 'react-redux'
import Blocks from 'src/components/Blocks'

const mapStateToProps = (state, {count}) => ({
  // blocks: state.blocks.slice(0, count),
})

export default connect(mapStateToProps)(Blocks);
