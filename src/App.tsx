import { useState } from 'react'

function App() {
 const [counter, setCounter] = useState(1)


  function increment() {
    setCounter(counter + 1)
    setCounter(counter + 1)
    setCounter(counter + 1)
    setCounter(counter + 1)
    setCounter(counter + 1)
  }


  return <div>
  
    <button onClick={() => increment()}>{counter}</button>
  </div>
}

export default App
