import React from 'react'
import { connect } from 'react-redux'
import BlockList from 'src/components/BlockList'
import { getLastTenBlocks } from 'src/services/app/selectors'

const mapStateToProps = (state, {count}) => ({
  blocks: getLastTenBlocks(state)
})

export default connect(mapStateToProps)(BlockList);
