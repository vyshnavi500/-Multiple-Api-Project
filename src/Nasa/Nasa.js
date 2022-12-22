import React from 'react'
import {useState, useEffect} from "react"
import axios from 'axios'
import './Nasa.css'


export default function() {
    const [NasaData, setNasaData] = useState([])
    
const url = 'https://api.nasa.gov/planetary/apod?api_key=gsr6F3Zv5KwlPPYD03USsa9BkSxjVeDvmrJEPBvG'
useEffect(()=>{
    axios.get(url).then(res =>{
    console.log(res.data)
    setNasaData(res.data)
  })
},[])

   return (
    <div className='Nasaapi'>
        <img src={NasaData.url} style={{height: '20rem', width:' 23rem',float:'left',marginTop:'5rem',marginLeft:'2rem'}}/>
        <h1 style={{marginLeft:'26rem'}}>{NasaData.title}</h1>
        <h2 style={{marginLeft:'26rem',width:'35rem'}}>Date : {NasaData.date}</h2>
        <p style={{color:'aliceblue', marginTop:'2rem',width:'50rem',float:'right'}}>{NasaData.explanation}</p>
    </div>
   )
}
