import React from 'react'
import { connect } from 'react-redux'
import TxInfo from 'src/components/TxInfo'
import TxLoader from 'src/containers/TxLoader'

const mapStateToProps = (state, {hash}) => ({ data: state.tx_by_hash[hash] });

const TxInfoContainer = ({hash, data}) => (
  <div>
    { data
      ? <TxInfo {...data} />
      : (
        <div>
          <TxLoader hash={hash} />
          <div>Transaction not found</div>
        </div>
      )
    }
  </div>
);

export default connect(mapStateToProps)(TxInfoContainer);
