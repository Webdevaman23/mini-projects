import React, { useState } from "react";

export default function BmiDashboard() {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [bmiCal, setBmiCal] = useState(0);
  const [bmiMessage , setBmiMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const heightInMeter = height / 100;
    const bmiCalculator = weight / (heightInMeter * heightInMeter);
    if (height === 0) {
      alert("Height field cannot be empty");
    } else if (weight === 0) {
      alert("Weight field cannot be empty");
    } else {
      setBmiCal(bmiCalculator.toFixed(1));
    }

    if(bmiCalculator <= 18.5){
        setBmiMessage("You are underweight")
    }else if(bmiCalculator > 18.5 || bmiCalculator <= 24.9){
        setBmiMessage("You are healty/fit")
    }else if(bmiCalculator > 25 || bmiCalculator <= 29.9){
        setBmiMessage("You are overweight")
    }else if(bmiCalculator > 30){
        setBmiMessage("You are obese")
    }
  };

  const handleReload = () => {
    window.location.reload()
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>BMI calculator</h2>
        <div>
          <label>Height (cm) </label>
          <input
            type="number"
            value={height}
            placeholder="Height in cm"
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
        <div>
          <label>Weight (kg) </label>
          <input
            type="number"
            value={weight}
            placeholder="Weight in kg"
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
        <div>
          <input type="submit" />
        </div>
        <button onClick={handleReload}>Reload</button>
        <h2>BMI Index - {bmiCal}</h2>
        {
            bmiMessage && (
                <h3>{bmiMessage}</h3>
            )
        }
      </form>
    </div>
  );
}
