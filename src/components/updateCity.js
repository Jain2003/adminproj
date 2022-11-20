import axios from 'axios'
import React, { useEffect } from 'react'

const addCity = () => {
    const [dispName,setName]=useState(NULL)
    const [countryName,setCountry]=useState(NULL)
    const [countryCode,setCountryCode]=useState(NULL)
    const [countryCurrencyName,setCountryCurrencyName]=useState(NULL)
    const [countryCurrencyCode,setCountryCurrencyCode]=useState(NULL)
    const [countryTime,setCountryTime]=useState(NULL)

    const handleNameChange=(e)=>{
        setName(e.target.value)
    }

    const handleCountryChange=(e)=>{
        setCountry(e.target.value)
    }
    const handleCountryCodeChange=(e)=>{
        setCountryCode(e.target.value)
    }
    const handleCountryCurrencyNameChange=(e)=>{
        setCountryCurrencyName(e.target.value)
    }
    const handleCountryCurrencyCodeChange=(e)=>{
        setCountryCurrencyCode(e.target.value)
    }
    const handleCountryTimeChange=(e)=>{
        setCountryTime(e.target.value)
    }

    function sendpost(e){
        e.preventDefault()
        var data=[dispName,countryName]
        axios.post('http://localhost:4000/cities',data)
    }

    useEffect(()=>{
        axios.get()
    })
    
  return (
    <div>addCity
        <form onSubmit={(e)=>{sendpost(e)}}>
            <h2>ADD NEW CITY</h2>
            <label>
                Display name:
            </label>
            <input type="text" value={dispName} required onChange={(e)=>{handleNameChange(e)}}></input>
            <br/>
            <label>
                Country name:
            </label>
            <input type="text" value={countryName} required onChange={(e)=>{handleCountryChange(e)}}></input>
            <br/>
            <label>
                Country code:
            </label>
            <input type="text" value={countryCode} required onChange={(e)=>{handleCountryCodeChange(e)}}></input>
            <br/>
            <label>
                Country currency name:
            </label>
            <input type="text" value={countryCurrencyName} required onChange={(e)=>{handleCountryCurrencyNameChange(e)}}></input>
            <br/>
            <label>
                Country currency code:
            </label>
            <input type="text" value={countryCurrencyCode} required onChange={(e)=>{handleCountryCurrencyCodeChange(e)}}></input>
            <br/>
            <label>
                Country time zone:
            </label>
            <input type="text" value={countryTime} required onChange={(e)=>{handleCountryTimeChange(e)}}></input>
            <br/>

            <input type="submit" value="Submit"/>


        </form>
    </div>
    )
}

export default addCity