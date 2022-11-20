import axios from 'axios'
import React from 'react'
import {useLocation} from 'react-router-dom';

const addExperience = () => {
    

    const [cityId,setCityId]=useState(NULL)
    const [name,setName]=useState(NULL)
    const [startingPrice,setStartingPrice]=useState(NULL)
    const [highlights,setHighlights]=useState(NULL)
    const [nextAvailable,setNextAvailable]=useState(NULL)
    const [duration,setDuration]=useState(NULL)
    const [city,setCity]=useState(NULL)

    const loc=useLocation();
    const id=loc.state.id;

    function findcity(a){
        axios.get(`http://localhost:4000/cities/${a}`).then((res)=>{
            return res;
        })
    }

    axios.get(`http://localhost:4000/cities/${id}`).then(
        (res)=>{
            console.log(res);
            res=res.data;
            setCityId(res.cityId)
            setName(res.displayName)
            setStartingPrice(res.StartingPrice)
            setHighlights(res.highlights)
            setNextAvailable(res.nextAvailable)
            setDuration(res.duration)
            const data=findcity(res.cityId)
            setCity(data);
        }
    )

    const handleNameChange=(e)=>{
        setName(e.target.value)
    }

    const handlePriceChange=(e)=>{
        setStartingPrice(e.target.value)
    }
    const handleHighlightsChange=(e)=>{
        setHighlights(e.target.value)
    }
    const handleNextAvailableChange=(e)=>{
        setNextAvailable(e.target.value)
    }
    const handleDurationChange=(e)=>{
        setDuration(e.target.value)
    }
    const handleCityChange=(e)=>{
        setCity(e.target.value)
        handleCityIdChange(e.target.value)

    }
    const handleCityIdChange=(e)=>{
        const idno=axios.get(`http://localhost:4000/cities/${e}`).then((res)=>{
            return res.data.id;
        })
        setCityId(idno);
    }

    function sendpost(e){
        e.preventDefault()
        var data=[name,startingPrice,highlights,nextAvailable,duration,cityId]
        axios.post('http://localhost:4000/experience',data)
    }

    
  return (
    <div>
        <form onSubmit={(e)=>{sendpost(e)}}>
            <h2>ADD NEW EXPERIENCE</h2>
            <label>
                Display name:
            </label>
            <input type="text" value={name} required onChange={(e)=>{handleNameChange(e)}}></input>
            <br/>
            <label>
                Starting price:
            </label>
            <input type="text" value={startingPrice} required onChange={(e)=>{handlePriceChange(e)}}></input>
            <br/>
            <label>
                Highlights:
            </label>
            <input type="text" value={highlights} required onChange={(e)=>{handleHighlightsChange(e)}}></input>
            <br/>
            <label>
                Next available:
            </label>
            <input type="text" value={nextAvailable} required onChange={(e)=>{handleNextAvailableChange(e)}}></input>
            <br/>
            <label>
                Experience duration:
            </label>
            <input type="text" value={duration} required onChange={(e)=>{handleDurationChange(e)}}></input>
            <br/>
            <label>
                City:
            </label>
            <input type="text" value={city} required onChange={(e)=>{handleCityChange(e)}}></input>
            <br/>

            <input type="submit" value="Submit"/>


        </form>
    </div>
    )
}

export default addExperience