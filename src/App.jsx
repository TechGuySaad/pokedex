import Header from "./components/Header"
import Body from "./components/Body"
import './index.css'
import { useEffect, useState,createContext } from "react"
import axios from "axios"

export const DataContext = createContext()
export const NextContext = createContext()
export const PrevContext = createContext()
export const CurrentApiContext = createContext()


function App() {

  const [data,setData] = useState([]);
  const [currentApi,setCurrentApi] = useState('https://pokeapi.co/api/v2/pokemon')
  const [next, setNext] = useState('')
  const [prev,setPrev] = useState('')
  


  useEffect(() => {

    async function getData(){
      const response = await axios.get(currentApi)
      response && setData( response.data) && data && setNext(data.next) && setPrev(data.prev)
      response && setNext(response.data.next)
      response && setPrev(response.data.previous)
   
      

    }
    getData()
   

  },[currentApi])
//   console.log(data);
//  console.log(next);
//  console.log(prev)


  return (
    <>
      <div className="app-container" >
        <DataContext.Provider value={{data}}>
        <NextContext.Provider value={{next,setNext}}>
        <PrevContext.Provider value={{prev,setPrev}}>
        <CurrentApiContext.Provider value={{currentApi,setCurrentApi}} >
        <Header></Header>
        <Body></Body>
        </CurrentApiContext.Provider>
        

        </PrevContext.Provider>
        </NextContext.Provider>
       

        </DataContext.Provider>
        
      </div>
    
    </>
  )
}

export default App
