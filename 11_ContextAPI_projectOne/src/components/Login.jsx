import React, { useState, useContext } from 'react'
import UserContext from '../context/UserContext'


function Login() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const { setUser } = useContext(UserContext)
    const handelSubmit = (e) => {
        e.preventDefault()
        setUser({ username, password })
    }

    return (
        <div className='w-full flex flex-col justify-around h-[90%]'>
            <h2 className='text-center text-red-600 '>Login</h2>
            <input
                className='block bg-transparent text-black border border-black w-full px-2 py-1 '
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder='username' />

            <input
                className='block bg-transparent text-black border border-black w-full px-2 py-1 '
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='password' />

            <button
                className='bg-amber-500 border-2 border-black block w-full text-center px-2 rounded-md text-red-800 '
                onClick={handelSubmit}>Submit</button>
        </div>
    )
}

export default Login