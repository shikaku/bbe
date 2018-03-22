import React from 'react'
import { Route } from 'react-router-dom'

import Home from 'src/pages/Home'
import Blocks from 'src/pages/Blocks'
import Tx from 'src/pages/Tx'
// import Blocks from 'src/pages/Blocks'
// import Block from 'src/pages/Block'
    // <Route path="/blocks" component={Blocks} />
    // <Route path="/block/:id" component={Block} />
    // <Route path="/transaction/:id" component={Transation} />

export default () => (
  <div>
    <Route exact path="/" component={Home} />
    <Route path="/tx/:txId" component={Tx} />
    <Route path="/blocks" component={Blocks} />
  </div>
)
