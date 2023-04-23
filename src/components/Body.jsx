import PokeCard from "./PokeCard";
import '../styles/body.css'
import { useContext } from "react";
import {DataContext, NextContext,PrevContext,CurrentApiContext } from "../App";

export default function Body(){
    const {next,setNext} = useContext(NextContext)
    const {prev,setPrev} = useContext(PrevContext)
    const {currentApi,setCurrentApi} = useContext(CurrentApiContext)
    const {data} = useContext(DataContext)
    // console.log(data);
    return <div className="body">
    <div className="button-container">

    <button>PREV</button>
    <button> NEXT</button>
    </div>

        
        {
            data?.results?.map((item,index)=>{
                return <PokeCard key={index} name={item.name}></PokeCard>
                
            })

        }
        
        
    </div>
}