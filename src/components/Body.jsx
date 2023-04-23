import PokeCard from "./PokeCard";
import '../styles/body.css'
import { useContext, useEffect, useState } from "react";
import {DataContext, NextContext,PrevContext,CurrentApiContext } from "../App";

export default function Body(){
    const {next,setNext} = useContext(NextContext)
    const {prev,setPrev} = useContext(PrevContext)
    const {currentApi,setCurrentApi} = useContext(CurrentApiContext)
    const {data} = useContext(DataContext)
    let [count,setCount] = useState(0);

    useEffect(()=>{},[count])

    

    function handleNext(){
        setCurrentApi(next)
        // count = count + 20;
        setCount(count + 20)
    }

    function handlePrev(){
        

        prev && setCurrentApi(prev)
        // count = count - 20
        setCount(count - 20)
    }
    // console.log(data);
    return <div className="body">
    <div className="button-container">

    <button onClick={handlePrev}>PREV</button>
    <button onClick={handleNext}> NEXT</button>
    </div>

        
        {
            data?.results?.map((item,index)=>{
                return <PokeCard key={index} name={item.name} count={count + (index+1) }></PokeCard>
                
            })

        }
        
        
    </div>
}