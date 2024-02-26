import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(0)
  let [increasesCount,setincreasesCount]=useState(0)
  let [decreasesCount,setdecreasesCount]=useState(0)

  const increases=()=>{
    if(count>=20){
      alert("count is +ve")
      return;
    }
    setCount(count+1)
    setincreasesCount(increasesCount+1);
    // console.log('number increases')
  }

  const decreases=()=>{

    if(count<=0){
      alert("count is -ve")
      return;
    } 
    setCount(count-1)
    setdecreasesCount(decreasesCount-1)
    // console.log('number decreases')

  }

  return (
    <>
      <div>{count}</div>
      <button onClick={increases}>count++ = {increasesCount}</button>
      <button onClick={decreases}>count-- = {decreasesCount}</button>
    </>
  )
}

export default App
