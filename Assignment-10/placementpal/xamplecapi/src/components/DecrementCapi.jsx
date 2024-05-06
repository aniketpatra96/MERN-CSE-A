import { useCount } from "../contexts/CounterContext"

const DecrementCapi = () => {
    // const counterContext = useContext(CounterContext)
    const counterContext = useCount()
    const {count, setCount} = counterContext

  return (
    <button onClick={()=>setCount(count-1)}>-</button>
  )
}

export default DecrementCapi