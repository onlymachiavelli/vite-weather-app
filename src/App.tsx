import React, {useState, useEffect} from "react"

import geoApi from "./apiCall/geoApi"
const Home = () =>{
  const [wRes, setW] = useState({
    name:"",
    code:"",

  })
  useEffect(()=>{
    (
      async()=>{
        const location:any = await geoApi()
        if (location){
          console.log(location)
          setW({
            name:location.countryName,
            code:location.countryCode.toLowerCase()
          })
        }
      }
    )()
  },[])
  console.log(wRes)
  return (
    <div className="w-full h-screen bg-gen bg-cover bg-no-repeat">
      <div className="w-full h-full bg-transBlack absolute ">
        <div></div>
      </div>
    </div>
  )
}

export default Home