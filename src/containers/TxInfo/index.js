import React from 'react'
import { connect } from 'react-redux'
import TxInfo from 'src/components/TxInfo'
import TxLoader from 'src/containers/TxLoader'

const mapStateToProps = (state, {id}) => ({ data: state.tx_map[id] });

const TxInfoContainer = ({id, data}) => (
  <div>
    { data
      ? <TxInfo {...data} />
      : (
        <div>
          <TxLoader id={id} />
          <div>Transaction not found</div>
        </div>
      )
    }
  </div>
);

export default connect(mapStateToProps)(TxInfoContainer);
