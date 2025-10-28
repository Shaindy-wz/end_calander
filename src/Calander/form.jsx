import { useState } from "react"
import "./style.css"
export const Form=({mysetName,mysetFont, mysetBackRound,create,flug,counter,setBasicCalender,steFlag})=>{
 

  const choseCalander=(event)=>{
    debugger
    let x=JSON.parse(window.localStorage.getItem(window.localStorage.key(event.target.value)))
    setBasicCalender(x)
    mysetName(window.localStorage.key(event.target.value))
    steFlag(true)
  }

    return<>
  
      <h2>
        <i>Personalized calendar</i>
      </h2>
      <div className="contianer">
        <div class="col-3 input-effect">
          <input
            class="effect-16"
            type="text"
            placeholder=""
            onBlur={(e) => mysetName(e.target.value)}
          ></input>
          <label>בחר שם ללוח שנה</label>
          <span class="focus-border"></span>
        </div>
        <div class="col-3 input-effect">
          <label>בחר צבע רקע</label>
          <input
            type="color"
            onBlur={(e) => mysetBackRound(e.target.value)}
          ></input>
        </div>
        <div class="col-3 input-effect">
          <label>בחר צבע גופן</label>
          <input type="color" onBlur={(e) => mysetFont(e.target.value)}></input>
        </div>
        {!flug?
        <button onClick={create} >יצירת לוח שנה</button>
    :<h1></h1>}
      <select onChange={choseCalander}>

        <option disabled selected hidden >בחר לוח שנה</option>
        { 
        Array.from({length:counter-1},(x,i)=>
            <option value={i}>{window.localStorage.key(i)}</option> 
        )} 
      </select>
      </div>
      
      {/* <span class="focus-border"></span> */}

      {/* <input type="text" onBlur={(e) => mysetName(e.target.value)}></input>
    <h1>בחר צבע רקע</h1>
     <input type="color" onBlur={(e)=>mysetBackRound(e.target.value)}></input>
    <h1>בחר צבע כיתוב</h1>
     <input type="color" onBlur={(e)=>mysetFont(e.target.value)}></input>
     {/* !flug? */}
     
     {/* : */}
    </>
}