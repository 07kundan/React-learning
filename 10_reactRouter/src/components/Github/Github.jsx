import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'


function Github() {
  const data=useLoaderData()
  
  // const [data,setdata]=useState([])
    // useEffect(()=>{
        // fetch('https://api.github.com/users/07kundan')
        // .then (response=>response.json())
        // .then (data=>{
          // console.log(data)
          // setdata(data)
          // 
        // })
    // },[])

  return (
    <div className=' flex justify-around items-center text-white text-3xl m-4 bg-gray-600'>
        <img src="{data.avatar_url}" alt="Git picture"
        className='' 
        width={300}/>
        Github Followers: {data.followers}
        </div>
  )
}

export default Github

// optimized way to fetch api

export  const GithubInfoLoader=async()=>{
  const response=await fetch('https://api.github.com/users/07kundan')
  return response.json()

}