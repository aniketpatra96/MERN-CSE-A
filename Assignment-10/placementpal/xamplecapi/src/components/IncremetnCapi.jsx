import { useContext } from 'react'
import { CounterContext } from '../contexts/CounterContext'

const IncremetnCapi = () => {
    const abc = useContext(CounterContext)
    const { count, setCount } = abc
  return (
    <button onClick={()=>setCount(count+1)}>+</button>
  )
}

export default IncremetnCapi