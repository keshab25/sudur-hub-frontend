/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */

import { memo } from 'react'

const ToDo = ({todos,addToDo}) => {
    console.log("child rendered")
  return (
    <>
      {todos.map((value, index) => (
        <p key={index}>{value +index }</p>
      ))}

      <button onClick={addToDo} className='bg-gray-700 text-white px-4 py-2'>Add ToDo</button>
    </>
  )
}

export default memo(ToDo)
