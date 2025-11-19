import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [limit, setLimit] = useState('')

const increment = () => {
    if(!limit || count >= limit) return
    setCount(count => count + 1)
  }

  const decrement = () => {
    setCount(count => count - 1)
  }

  return (
    <>
      <div style={{ padding: 20 }}>
        <h1>{count}</h1>
        <input  placeholder='Enter number' value={limit} onChange={(e)=>setLimit(Number(e.target.value))} style={{marginRight:10}}/>
        <button onClick={increment} style={{backgroundColor: count > 0 ? 'green' : 'white'}}>Click +</button>
        <button onClick={decrement} style={{marginLeft:8, backgroundColor: count < 0 ? 'red' : 'white' }}>Click -</button>
        <button onClick={()=>setCount(0)} style={{marginLeft:8}}>Reset</button>
      </div>
    </>
  )
}

export default App
