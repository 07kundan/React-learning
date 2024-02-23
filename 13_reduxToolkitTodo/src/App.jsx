import { useState } from 'react'
import AddToDo from './components/AddToDo'
import ToDos from './components/ToDos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AddToDo />
      <ToDos />
    </>
  )
}

export default App
