import React from 'react'

const List = ({Item, select}) => {
  return (
    <li className='list-item' onClick={e=>select(e)}>{Item}</li>
  )
}

export default List
