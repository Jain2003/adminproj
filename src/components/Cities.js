import React, { useEffect, useState } from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'
//import card from

const Cities = () => {
    const [citynames,setcities]=useState([]);

    function createCard(city){
        //key=city.id;
        //idval=city.id;
        const deleteCity=async()=>{
            await axios.delete(`http://localhost:4000/cities/${city.id}`)
        }    

        const updateCity=async()=>{
            await axios.update
        }

        const nextPage=async()=>{
            //await axios.
        }

        return (
            <div>
                <h2>hello</h2>
                <h2>{city.displayName}</h2>
                <h2>{city.country.displayName}</h2>
                <h2>{city.country.code}</h2>
                <h4>{city.id}</h4>

                <Link to="/cityToExp"><button size="large" variant="contained" >
                    Goto experiences
                </button></Link>

                {/* <button onclick={nextPage(city.id)}>Experiences in {city.displayname}</button> */}

                <button onlick={deleteCity(city.id)}>Delete city</button>

                <Link to={{
                    pathname:"/addCity",
                    state:{id:city.id}
                }}><button size="large" variant="contained" >
                    Update City
                </button></Link>

                {/* <button onlick={updateCity(city.id)}>Update city</button> */}
            </div>
        )
    }

    useEffect(()=>{
        axios.get('http://localhost:4000/cities').then(
            (res)=>{
                console.log(res.data);
                setcities(res.data);
            }
        )
    },[])

  return (
    <div>
        <h1>CITIES</h1>
        <Link to="/addCity"><button size="large" variant="contained" >
                    Add City
                </button></Link>
        {citynames.map((city,index)=>(
            //key=city.id;
            <div>
                <h2>hello</h2>
                <h2>{city.displayName}</h2>
                <h2>{city.country.displayName}</h2>
                <h2>{city.country.code}</h2>
                <h4>{city.id}</h4>

                {/* <Link to="/cityToExp"><button size="large" variant="contained" >
                    Goto experiences
                </button></Link> */}

                {/* <button onclick={nextPage(city.id)}>Experiences in {city.displayname}</button> */}

                {/* <button onlick={deleteCity(city.id)}>Delete city</button>

                <Link to={{
                    pathname:"/addCity",
                    state:{id:city.id}
                }}><button size="large" variant="contained" >
                    Update City
                </button></Link> */}

                {/* <button onlick={updateCity(city.id)}>Update city</button> */}
            </div>))}
    </div>
  )
}

export default Cities