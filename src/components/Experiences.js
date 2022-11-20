import React, { useEffect, useState } from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'

const Experiences = () => {
  const [expnames,setexp]=useState(null);

    function createCard(experience){
        //key=city.id;
        //idval=city.id;
        const deleteExp=async()=>{
            await axios.delete(`http://localhost:5000/experiences/${city.id}`)
        }    

        const updateCity=async()=>{
            await axios.update
        }

        const nextPage=async()=>{
            //await axios.
        }

        return (
            <div>
                
                <h4>{experience.displayName}</h4>
                <h4>{experience.startingPrice}</h4>
                <h4>{experience.highlights}</h4>
                <h4>{experience.nextAvailable}</h4>
                <h4>{experience.duration}</h4>

                <Link to="/cityToExp"><button size="large" variant="contained" >
                    Goto experiences
                </button></Link>

                {/* <button onclick={nextPage(city.id)}>Experiences in {city.displayname}</button> */}

                <button onlick={deleteExp(experience.id)}>Delete city</button>

                <Link to={{
                    pathname:"/addExperience",
                    state:{id:city.id}
                }}><button size="large" variant="contained" >
                    Update City
                </button></Link>

                {/* <button onlick={updateCity(city.id)}>Update city</button> */}
            </div>
        )
    }

    useEffect(()=>{
        axios.get('http://localhost:4000/experience').then(
            (res)=>{
                setexp(res.data);
            }
        )
    },[])

  return (
    <div>
        <h1>EXPERIENCES</h1>
        <Link to="/addExperience"><button size="large" variant="contained" >
                    Add Experience
                </button></Link>
        {expnames.map(createCard)}
    </div>
  )
  

  
}

export default Experiences