import { useState } from 'react'
import './App.css'
import Display from './components/Display'
import Increment from './components/Increment'
import Decrement from './components/Decrement'
import { Test } from './components/Test'
import DisplayCapi from './components/DisplayCapi'
import IncremetnCapi from './components/IncremetnCapi'
import DecrementCapi from './components/DecrementCapi'
import TestCapi from './components/TestCapi'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      {/* <Display count={count} />*/}
      {/* <Increment count={count} setCount={setCount} /> */}
      {/* <Test />
      <Decrement count={count} setCount={setCount}  />  */}

      <DisplayCapi />
      {/* <IncremetnCapi /> */}
      <TestCapi />
      <DecrementCapi />
    </>
  )
}

export default App
