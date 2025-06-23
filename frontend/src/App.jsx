import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <form>
         <input type='file' nam="image" id="image"/>
         
      </form>
    </>
  )
}

export default App
