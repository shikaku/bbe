import React from 'react'
import Page from 'src/components/Page'
import { Link } from 'react-router-dom'

// import SearchBar from 'src/containers/SearchBar'
import LastBlocks from 'src/containers/LastBlocks'
// import LastTransactions from 'src/containers/LastTransactions'
// import Chart from 'src/containers/Chart'
    // <SearchBar />
    // <LastTransactions count={10} />
    // <Chart coin={'btc'} period={'month'} />

export default () => (
  <Page>
    <LastBlocks count={10} />
  </Page>
)
