import React, { useState }  from 'react'
import PropTypes from 'prop-types'



export default function Navbar(props) {
const [theme,setTheme]=useState('dark')
  const [color,setColor]=useState(
    'bg-red-300 text-black'
  )

  function switchColor(){
    if(theme==='dark'){
      setColor('bg-slate-600 text-cyan-400')
      setTheme('light')
    }
    else{
      setColor('bg-red-300 text-black')
      setTheme('dark')
    }
  }

  return (
    <>
        <div className={`${color} w-screen h-10`}>
          <ul className='h-full w-screen flex justify-around items-center'>
            <li>Home</li>
            <li>About</li>
            <li>Contact us </li>
            <button className={`${theme==='dark'?'bg-slate-950 text-emerald-400':'bg-red-300 text-blue-900'} border-2 rounded-lg pl-3 pr-3 border-slate-900`} onClick={switchColor}>change to {theme}</button>
          </ul>
        </div>
    </>
  )
}

// 



// Navbar.propTypes ={
    // title:PropTypes.string.isRequired          //if props is not given it'll through error
// };
// 

// setting defaultProps
// Navbar.defaultProps ={
    // title: 'yepp'
// }
