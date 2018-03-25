import React from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'

export default ({blocks}) => {
  console.log(blocks.map(b => b.toJS()));
  return (
    <div>
      <h3>10 latest blocks</h3>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">Height</th>
            <th scope="col">Age</th>
            <th scope="col">Transactions</th>
            <th scope="col">Size</th>
          </tr>
        </thead>
        <tbody>
          {blocks.map(block => (
            <tr>
              <td scope="row"><Link to={`/block/${block.get('height')}`}>{block.get('height')}</Link></td>
              <td>{moment(block.get('time') * 1000).startOf('minute').fromNow()}</td>
              <td>{block.get('tx').size}</td>
              <td>{block.get('size')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
