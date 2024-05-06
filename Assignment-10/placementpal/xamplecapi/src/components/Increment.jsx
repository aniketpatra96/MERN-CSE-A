import React from 'react'

const Increment = ({count, setCount }) => {
  return (
    <button onClick={()=>setCount(count+1)}>+</button>
  )
}

export default Increment