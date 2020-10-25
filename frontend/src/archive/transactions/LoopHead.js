import React from 'react'

const LoopHead = () => {
  function getKeys() {
    return Object.keys(props.transactions[0])
    }
    
    getColNames = function () {
      var keys = getKeys();
      return keys.map((key, index) => {
        return <th key={key}>{key}</th>
      })
    }
  return (
    <div>
      
    </div>
  )
}

export default LoopHead
