
import { useCallback, useEffect, useRef, useState } from "react";


function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [specialChar, setSpecialChar] = useState(false)
  const [password, setPassword] = useState("")

  // *********method to generate password and useCallback memoraize the function************
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (specialChar) str += "!@#$%&*.~?/[]{}<>"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  }, [length, numberAllowed, specialChar, setPassword])



  //  method to copy in clipboard
  const copyToClipboard = useCallback(() => {

    passwordRef.current?.select();    // selected text highlighted when click to copy

    // ******to select withinrange
    // passwordRef.current?.setSelectionRange(0,3);

    window.navigator.clipboard.writeText(password)      // how to copy in clipboard using react
  }, [password])


  // ************ when page load it called automatically and when there is any change occur in dependencies it called again, and many other features 
  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, specialChar, passwordGenerator])


  // ********** It'll provide reference of any element on webpage and we can manipulate that element using useRef()
  const passwordRef = useRef(null)

  return (
    <>
      <div className="w-full max-w-md shadow-md mx-auto rounded-lg
    px-4 my-8 text-orange-500 bg-gray-700">

        <h1 className="text-center">password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">

          <input type="text" value={password} className="outline-none text-black w-full py-1 px-3"
            placeholder="password"
            readOnly
            ref={passwordRef}   // reference passed of useRef()
          />

          <button className="rounded-lg bg-red-400 text-black active:bg-red-600"
            onClick={copyToClipboard}
          >copy</button>
        </div>

        <div className="flex gap-x-3">

          <div className="flex items-center gap-x-1">
            <input type="range"
              min={6}
              max={16}
              value={length}
              className="cursor-pointer"
              onChange={(e) => { setLength(e.target.value) }}
            />
            <label htmlFor="">length:{length}</label>
          </div>

          <div className="flex items-center gap-x-1">

            <input type="checkbox" defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox" defaultChecked={specialChar}
              id="numberInput"
              onChange={() => {
                setSpecialChar((prev) => !prev);
              }}
            />
            <label htmlFor="">specialChar</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App
