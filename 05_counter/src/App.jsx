import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(0)

  const increases=()=>{
    if(count>=20){
      alert("count is +ve")
      return;
    }
    setCount(count+1)
    // console.log('number increases')
  }

  const decreases=()=>{

    if(count<=0){
      alert("count is -ve")
      return;
    } 
    setCount(count-1)
    // console.log('number decreases')

  }

  return (
    <>
      <div>{count}</div>
      <button onClick={increases}>count++</button>
      <button onClick={decreases}>count--</button>
    </>
  )
}

export default App
