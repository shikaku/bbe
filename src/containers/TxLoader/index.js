import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actions } from 'src/services/tx'

const mapStateToProps = (state) => ({
  txMap: state.tx_map,
});

class TxLoader extends Component {
  constructor(props) {
    super(props);
    let { id, txMap } = props;
    if (!txMap[id]) {
      props.dispatch(actions.fetch(id));
    }
  }
  render() {
    return null;
  }
}

export default connect(mapStateToProps)(TxLoader);
