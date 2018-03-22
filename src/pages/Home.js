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
    To test transaction page:<br/>
    <Link to={`/tx/2bc42fd8e5c2dfe719b56fe82a1f8e7e9bf048f782889e7b794c229dcb765d92`}>2bc42fd8e5c2dfe719b56fe82a1f8e7e9bf048f782889e7b794c229dcb765d92</Link><br/>
    <Link to={`/tx/c750c44f76f5f5fc0447a19e063c945530ab88cdf71ed235eced7f04e49008ff`}>c750c44f76f5f5fc0447a19e063c945530ab88cdf71ed235eced7f04e49008ff</Link><br/>
    <Link to={`/tx/e111d7bd6d88fe116cc8aaa53d29319b63130ce930a5fd043c782e94ee6d030c`}>e111d7bd6d88fe116cc8aaa53d29319b63130ce930a5fd043c782e94ee6d030c</Link><br/>

    <LastBlocks count={10} />
  </Page>
)
