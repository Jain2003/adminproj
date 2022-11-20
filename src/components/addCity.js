import axios from 'axios'
import React from 'react'
import {useLocation} from 'react-router-dom';

const AddCity = () => {
    

    const [dispName,setName]=useState("")
    const [countryName,setCountry]=useState("")
    const [countryCode,setCountryCode]=useState("")
    const [countryCurrencyName,setCountryCurrencyName]=useState("")
    const [countryCurrencyCode,setCountryCurrencyCode]=useState("")
    const [countryTime,setCountryTime]=useState("")

    const loc=useLocation();
    const id=loc.state.id;

    axios.get(`http://localhost:4000/cities/${id}`).then(
        (res)=>{
            console.log(res);
            res=res.data;
            setName(res.displayName)
            setCountry(res.country.displayName)
            setCountryCode(res.country.code)
            setCountryCurrencyCode(res.country.currency.code)
            setCountryCurrencyName(res.country.currency.currencyName)
            setCountryTime(res.country.timezone)
        }
    )

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
        var data=[dispName,countryName,countryCode,countryCurrencyCode,countryCurrencyName,countryTime]
        axios.post('http://localhost:4000/cities',data)
    }

    
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

export default AddCity