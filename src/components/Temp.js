import React,{useState,useEffect} from 'react';
import './css/temp.css';

function Temp() {
    const [city,setCity] =useState(null); 
    const [search,setSearch] =useState('Mumbai'); 
    const [con,setCon] = useState(null)

    useEffect(()=>{
        const fetchapi = async()=>{
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=5f82362be75d9850319b73d260ea4c6b`
            const response = await fetch(url);
            // console.log(response)
            const resjson =  await response.json()
            setCity(resjson.main)
            setCon(resjson.sys)
        }
        fetchapi()
    },[search])

    return (<>
            <h1 className='heading' > Check Wheather Of Your City </h1>
        <div className='main_div'>
            <div className='input_data' >
                <input type='search' className='input_field' value={search}  onChange={(event)=>{setSearch(event.target.value)}}  />
            </div>

            {!city ? (
                <h3 className='nodatafound' > Please type the City name correctly </h3>
            ): (
            <div className='info' >
            <h2 className='location'>
            <i className="fas fa-street-view"></i> {search},{con ? (<p>{con.country}</p>):(<h1>not found</h1>) }
            </h2>
            <h1 className='temp'>{city.temp}° Cel </h1>
            <h6 className='tempmin_max'> Min : {city.temp_min}° Cel | Max : {city.temp_max}° Cel  </h6>
            </div>
            
            )
            }
        </div>
        </>
    )
}

export default Temp
