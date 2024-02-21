import {useEffect,useState} from 'react'


// custom hook
function useCurrencyInfo(currency){

    const [data,setData]=useState({})       // curly braces('{}') used to prevent the crashes when there is empty json file

    //******whenever a there is a change in dependencies(currency) useEffect will call api
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res)=>res.json()) // API data comes in string formate here we're converting it into json formate, res stores the data
        .then((res)=>setData(res[currency]))
        console.log(data);
    },[currency])
    console.log(data);
    return data;
}


export default useCurrencyInfo;