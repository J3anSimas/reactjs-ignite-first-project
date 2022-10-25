import { useState } from 'react'

function Counter () {
  const [counter, setCounter] = useState(0)
  return (
    <>
      <span>{counter}</span>
      <button onClick={(e) => setCounter(counter + 1)}>Incrementar</button>
    </>
  )
}

export default Counter
