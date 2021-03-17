import React,{useState} from 'react'
import Onemore from './Onemore'

function Testing() {
    const [count,setCount] =useState(0)

    const fire = ()=>{
        setCount(count+ 1)
    }

    return (
        <div>
            <h1> counting :{count}</h1>
            <button onClick={fire}> fire</button>
            <Onemore name='arham'/>
        </div>
    )
}

export default Testing
