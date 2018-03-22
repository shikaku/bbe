import React from 'react'

export default (props) => {
  return <div>{JSON.stringify(props, null, '  ')}</div>
}
