
import { useState } from 'react';



export default function Square({ value, squareClick }) {
    // function handleClick() {
        // setValue('X')
    // }

    return (
        <button className="box-border square bg-slate-900 text-emerald-400 border border-black min-h-14 max-h-14 max-w-14 min-w-14" onClick={squareClick}>
            {value}
         </button>

    )
};
// 

{/* // import './button.css' */}
{/* // export default function Square({ value, squareClick }) { */}
    {/* return ( */}
        {/* <button className="square" onClick={squareClick}> */}
            // {/* <span className="square-content">{value}</span> */}
        // {/* </button> */}
    {/* ); */}
{/* } */}
