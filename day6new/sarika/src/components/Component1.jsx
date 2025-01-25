import React, { useState } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './style.css'
//var a = 10;
//var b = 20;
//var c = a + b ;
//var a = parseInt(document.getElementById(num1.value))

function Component1() {
    const[num1,setnum1] = useState(0);
    const[num2,setnum2] = useState(0);
    const[res,setres] = useState(0);


    const storenum1= (e)=>{
      setnum1( parseFloat(e.target.value))
      console.log(num1);
    }
    const storenum2= (e)=> {
        setnum2( parseFloat(e.target.value))
      console.log(num2);

    }  
    const addition=(e)=>{
        var c = num1 + num2;
        setres(c)
    }
    const sub=(e)=>{
        var c = num1 - num2;
        setres(c)
    }
    const div=(e)=>{
        var c = num1 / num2;
        setres(c)
    }
    const mul=(e)=>{
        var c = num1 * num2;
        setres(c)
    }
    const mod=(e)=>{
        var c = num2 % num2 ;
        setres(c)
    }

  return (

    
    
    <>
    <div className='background'>
    <h1>Calculator</h1>
    <form >
    <div className='container' class="form w-25">
      <input type="text" id="num1" placeholder='Enter the number1' 
       onChange={storenum1}/><br /><br />
      <input type="text" id="num2" placeholder='Enter the number2' 
      onChange={storenum2} /><br /><br />
      {/* <button type='button' class="btn btn-primary">Add</button><br />
      <button type='button' class="btn btn-primary">Sub</button><br />
      <button type='button' class="btn btn-primary">mul</button><br />
      <button type='button' class="btn btn-primary">Div</button><br /> */}
      <input type="button" value='Add' onClick={addition} />
      <input type="button" value='sub'  onClick={sub}/>
      <input type="button" value='div' onClick={div} />
      <input type="button" value='mul' onClick={mul} />
      <button type='button' class="bg-success" onClick={mod}>mod</button>
      <h1 id="result"></h1>
      <div className="box1"  >
      <h1>Result:{res}</h1>
      </div>
    </div>
    </form>
    </div>
    </>
  )
}

export default Component1
