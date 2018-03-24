import React from 'react'
import { withRouter } from 'react-router'
import Page from 'src/components/Page'
import TxInfo from 'src/containers/TxInfo'

const PageWithTxHash = withRouter(({ match }) => {
  const { txId } = match.params;
  return (
    <Page title={'Transaction page'}>
      <TxInfo hash={txId} />
    </Page>
  )
})

export default () => <PageWithTxHash />;
