import { useState } from 'react'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='h-screen w-full bg-gray-700 flex items-center justify-center'>
      <div className="h-[50%] min-w-min-[50%] bg-emerald-200 border-2 border-emerald-700 p-5">
        <UserContextProvider>
          <Login />
          <Profile />
        </UserContextProvider>
      </div>
    </div>
  )
}

export default App
