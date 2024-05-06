// import { useContext} from 'react'
// import { CounterContext } from '../contexts/CounterContext'
import { useCount } from "../contexts/CounterContext";
const DisplayCapi = () => {
    // const counterContext = useContext(CounterContext)
    const counterContext = useCount()
    console.log(counterContext);
    const { count, name } = counterContext
  return (
    <h1>Count(with Context): {count}</h1>
  )
}

export default DisplayCapi