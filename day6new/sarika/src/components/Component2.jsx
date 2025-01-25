import React, { useState } from 'react'
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
function Component2() {
    const [weight,setweight]= useState(0);
    const [height,setheight]= useState(0);
    const [bmi ,setBmi]= useState(0);
    const [res ,setres] = useState(0);
    

    const storeweight=(e)=>{
      setweight(parseFloate(e.target.value))
      
    }
    const storeheight=(e)=>{
      setheight(parseFloate(e.target.value))
      
    }
    const calculatebmi = (e) => {
       
       
     const bmi = weight / (height * height);
      
        if (bmiValue < 18.5){
          console.log('Underweight');
          setBmi("underweight")
        }
        else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
          console.log('Normal Weight');
          setBmi("Normalweight")
        }
        else if (bmiValue >= 25 && bmiValue <= 29.9){
          console.log('Overweight')
          setBmi("Overweight")

        }
        else{ 
          console.log('Obesity');
        }
    




    

  return (
    <>
    <div className='background'>
      <h1>BMI Calculator</h1>

       <div>
       
        <input type="number"  onChange={storeweight} placeholder='Enter the weight'/><br /><br />
        <input type="number"  onChange={storeheight} placeholder='Enter the height'/><br /><br />
        
        <button type='button' class="btn btn-success" onClick={calculatebmi}>calculate bmi</button>
        <div>
          <h1>result:{res}</h1>
          <h2>Your BMI</h2>
          {/* <p>{message}</p> */}
        </div>
    </div>
    </div>
    </>
  )
}
}

export default Component2
