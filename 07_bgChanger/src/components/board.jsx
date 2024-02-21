
import { useState } from "react";
import Button from "./button";

export default function Board() {

const [color,setColor]= useState('bg-red-800')

    return (
        <>
            <div className={`${color} h-screen w-full`}>

                <div className="flex border-2 border-black w-full justify-center items-center gap-6 fixed bottom-10 h-12 rounded-2xl bg-white shadow-lg">
                    <Button name="red" onClick={setColor}/>
                    <Button name="green" onClick={setColor}/>
                    <Button name="amber" onClick={setColor}/>
                    <Button name="slate" onClick={setColor}/>
                    <Button name="lime" onClick={setColor}/>
                    <Button name="purple" onClick={setColor}/>
                    <Button name="blue" onClick={setColor}/>
                </div>
            </div>
        </>
    )
};
