import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actions } from 'src/services/tx'

const mapStateToProps = (state) => ({
  txByHash: state.tx_by_hash,
});

class TxLoader extends Component {
  constructor(props) {
    super(props);
    let { hash, txByHash } = props;
    if (!txByHash[hash]) {
      props.dispatch(actions.loadTxByHash(hash));
    }
  }
  render() {
    return null;
  }
}

export default connect(mapStateToProps)(TxLoader);
