import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// ************ making custom react



function MyApp(){
  return(
    <>
    <div>
      <h1>aur batao</h1>
    </div>
    </>
  )
}

// below js code won't work as it isn't correct syntax in react

  // const reactElement = {
    // type: 'a',
    // props: {
        // href: "https://google.com",
        // target: '_blank'
    // },
    // children: "click to open google"
// }



// following is the correct syntax

const reactElement= React.createElement(
  'a',
  {
    href:'https://google.com',
    target:'_blank'
  },
  "click me"
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <MyApp/>
  </React.StrictMode>,
  

  //  >>>>>>>>> we must right below things outside <React.StrictMode> as they are not react syntax

  // MyApp(),   /*as at the end MyApp is a fn, so we can also called it in this way but it'll be nuisance in optimization*/
  // reactElement // this is object so don't need paranthesis

  )
