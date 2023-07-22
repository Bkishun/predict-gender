import React from 'react'
import Axios from 'axios'
import "./App.css";
import { useEffect, useState } from 'react'

export default function App() {
    const [name, setName]= useState("");
    const [finalName, setFinalName]= useState("");
    const[PredictedGender, setpredictGender]=useState("non");
    const fetchData=()=>{
        Axios.get(`https://api.genderize.io/?name=${name}`).then((res)=>{
            setpredictGender(res.data.gender);
        })
        afinalName();
    };
    const afinalName =()=>{
      setFinalName(name);
    }
   return (
    <div className="App">

      <div className='container'>
        <input className="input" placeholder='Enter firstName..' onChange={(event) => {setName(event.target.value)}}/>
        <button className='button' onClick={fetchData}>Predict Gender</button>
      </div>
      <div className='container'>
        <h1 className='result'>Name : {finalName}</h1>
        <h1 className='result'>Predicted Gender : {PredictedGender}</h1>
      </div>  
    </div>
  )
}
