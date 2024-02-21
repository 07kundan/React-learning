import React from 'react'
import { useParams } from 'react-router-dom' // this hook used to


function User() {
    const {userid}=useParams()      // now we can use userId variable
  return (
    <div className='flex text-white text-3xl justify-evenly bg-gray-500 min-h-56 w-[80%] m-auto'>
    User: {userid}
    </div>
  )
}
export default  User