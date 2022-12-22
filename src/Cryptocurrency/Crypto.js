import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react';
import Coin from './Coin';
import "./crypto.css"

export default function Crypto() {
  
    const [coins, setCoins] = useState([])
      const [search, setSearch] = useState('')
      const [dateFilter, setDateFilter] = useState('')
      const [priceFilter, setPriceFilter] = useState(0)
    
      const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
      
      useEffect(()=>{
        axios.get(url).then(res =>{
          console.log(res.data)
           setCoins(res.data)
        })
      },[])
    
      const getInputValue = (e) =>{
        setSearch(e.target.value)
      }
      
    
      const getInputValue2 = (e) =>{
        setPriceFilter(e.target.value)
      }
    
      const filterCoins = coins.filter(coin =>{
        return coin.name.toLowerCase().includes(search.toLowerCase())
      })
      
      const priceFilterCoins =  filterCoins.filter(coin =>{
        return coin.current_price > priceFilter 
      })
    
      return (
        <div className='text-center p-4'>
           <div className='row'>
            <h1>Crypocurrency project</h1>
              <div className="input-group w-50 center" >
                  <input className="form-control" type="text" placeholder="search by name" onChange={getInputValue} />
                  <input className="form-control" type="number" placeholder="search by price" onChange={getInputValue2} />
              </div>
           </div>
            <div className='row px-5 '>
                {
                  (coins.length > 0) ?  
                    priceFilterCoins.map((coin) =>{
                    return (
                    <div className='col-lg-4 '>
                      <Coin key={coin.id} image={coin.image} name={coin.name} price={coin.current_price}/>
                    </div>
                    )
                    }) : 
                    <h1>Cryptocurrency Data is not there</h1>
                }
            </div>
        </div>
      );
}
