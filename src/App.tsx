import React, {useState, useEffect} from "react"

import geoApi from "./apiCall/geoApi"
const Home = () =>{
  const [g, setG] = useState({})
  useEffect(()=>{
    geoApi().then(
      (res:any)=>{

        console.log(res);
        
        if(res){
          setG(res)
        }
      }
    )
  },[])
  console.log(g)
  return (
    <div>
      
    </div>
  )
}

export default Home