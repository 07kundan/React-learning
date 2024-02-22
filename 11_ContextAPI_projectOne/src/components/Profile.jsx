import React, {useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const {user} = useContext(UserContext)
    if (!user) {
        return <div className='text-center text-violet-600'>Please log in</div>
    }
     
    return <div className='text-center text-violet-600'>Welcome {user.username}</div>
    
}

export default Profile