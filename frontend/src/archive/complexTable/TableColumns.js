import React from 'react'

function Col(props) {
  return <th>{props.message}</th>
}
function Columns(input){
  if (input.length > 0) {
    let cols = [],
      columnsIn = input[0];
    for (var key in columnsIn) {
      cols.push(key);
    }
    return cols;
  }
}

const TableColumns = ({transactions}) => {
  
 
//  console.log(Columns(transactions))
 
  const todos = ['finish doc', 'submit pr', 'nag dan to review'];
  return (
    <tr>{todos.map((message, ind) => <Col key={ind} message={message} />)}</tr>
  )
}

export default TableColumns

