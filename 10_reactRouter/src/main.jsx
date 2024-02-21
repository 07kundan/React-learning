import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './components/home/home.jsx'
import Layout from './Layout.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github, { GithubInfoLoader } from './components/Github/Github.jsx'

// const router = createBrowserRouter([
// {
// path: '/',
// element: <Layout />,
// children: [
// {
// path: "",
// element: <Home />
// },
// {
// path: "about",   // path isn't case sensative
// element: <About />
// },
// {
// path: "contact",  // path isn't case sensative 
// element: <Contact />
// },
// {
// path: "User/:userid",
// element: <User />
// },
// {
// loader: { GithubInfoLoader },
// path: "Github",
// element: <Github />
// }
// ]
// }
// ])

// &&&&&&&&& Another way of routing

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:userId' element={<User />} />
      <Route
        loader={GithubInfoLoader}
        path='Github' element={<Github />}
      />

    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
