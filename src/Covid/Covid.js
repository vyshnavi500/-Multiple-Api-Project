import React,{useState, useEffect} from "react"
import axios from "axios"
import "./Covid.css"
import Card from "./Card"

export default function Covid(){

  const [covidData, setCovidData] = useState([])
  const [locFilter, setlocFilter] = useState('')
    const url = 'https://api.rootnet.in/covid19-in/stats/latest' 

    useEffect(()=>{
      axios.get(url).then(res =>{
        console.log(res.data)
        console.log(res.data.data.regional)
         setCovidData(res.data.data.regional)
      })
    },[])

  const getInputValue = (e) =>{
    setlocFilter(e.target.value)
  }
  const filterloc = covidData.filter(covidData =>{
    return covidData.loc.toLowerCase().includes(locFilter.toLowerCase())
  })

  return (
    <div className='text-center p-4'>
       <div className='row'>
        <h1>Covid Api project</h1>
          <div className="input-group w-50 center" >
              <input className="form-control" type="text" placeholder="search by Location" onChange={getInputValue} />
          </div>
       </div>
        <div className='row px-5 dashboard'>
            { 
            filterloc.map((val) =>{
            return (
            <div className='col-lg-4 covidcard'>
            <Card loc={val.loc} totalConfirmed={val.totalConfirmed} deaths={val.deaths} discharged={val.discharged}/>
            </div>
            )
            })
            }
        </div>
    </div>
  );
}



 