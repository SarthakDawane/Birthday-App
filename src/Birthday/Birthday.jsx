import { useEffect, useState } from 'react'
import './Birthday.css'
import Required from './Required'

const Birthday = () => {
    const [data,setData]=useState(Required)

    useEffect(()=>{
        fetch(Required)
        .then(res=>res.json())
        .then(d=>setData(d))
    })

    function empty(){
        setData([])
    }

    

  return (
    <div id='main'>

      <div className="content">
      <h1>Happy Birthday</h1>

    {data.map((e)=>{
    return(
        <section key={e.id}>
        <div className="sec-img">
            <img src={e.image} alt='not Upload'></img>
        </div>
        <div className="sec-info">
        <h4>{e.name}</h4>
        <p>{e.dob}</p>
        <p>{e.birthday}</p>
        </div>
    </section>

    )
    })}

    <h3>{data.length} Birthdays Today</h3>
    <button onClick={empty}>Clear</button>
      </div>

    </div>
  )
}

export default Birthday
