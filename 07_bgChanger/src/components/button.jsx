

// export default function Button(props) {

// ************OR*****

    export default function Button({name="default",onClick}) {
       
        // const x=`bg-${name}-600`
        
    return (
        <>
            <button className={`bg-${name}-500 flex px-3 items-center justify-center border-2 h-[80%] border-black rounded-3xl`}onClick={()=>onClick(`bg-${name}-600`)}>
                {name}
            </button>
        </>
    )
};
