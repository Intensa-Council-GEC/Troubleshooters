import { useState } from 'react';
import {
    oldTaxRegimeCalculator,
    newTaxRegimeCalculator,
    findBetterTaxRegime,
  } from './taxCalculations';

function TaxCalcForm({ type }) {


	const initSal = { salary: 1200000, business: 0,house:0,others:0, sum: 0  }
	const [sal, setNewSal] = useState(initSal);

    const initExemp = {new:72000, old:222000, cNew:'', cOld:'', message:''}
    const [exemp, setNewExemp] = useState(initExemp);

    const handleChange3 = e => {
        const { id, value } = e.target;
      setNewExemp({ ...exemp, [id]: value });

    }

    const handleChange2 = e => {
        const { id, value } = e.target;
      setNewSal({ ...sal, [id]: value });

    }

    const handleAdd = e => {
        e.preventDefault()
        const newSumValue = Number(sal.salary) + Number(sal.business)+ Number(sal.house) + Number(sal.others);
        const newCOldValue= oldTaxRegimeCalculator(newSumValue,exemp.old)
        const newCNewValue= newTaxRegimeCalculator(newSumValue,exemp.new)
        const newMessage = findBetterTaxRegime(newCOldValue, newCNewValue) 
        setNewExemp(prevState=>({ ...prevState, cOld:newCOldValue,  cNew:newCNewValue }) )


        setNewExemp(prevState=>({ ...prevState,  message:newMessage }) )

        setNewSal(prevState => ({ ...prevState, sum: newSumValue }));
      }

	return (
		<form onSubmit={handleAdd} className="form2">

		
            <h2>Income from Salaries</h2>
			<input
				type="number"
				step="any"
				value={sal.salary}
				placeholder="€ price"
				id="salary"
				onChange={handleChange2}
				required
			/>
            <h2>Income from Business</h2>

            <input
				type="number"
				step="any"
				value={sal.business}
				placeholder="€ price"
				id="business"
				onChange={handleChange2}
				
			/>
             <h2>Income from House Property</h2>

            <input
                type="number"
                step="any"
                value={sal.house}
                placeholder="€ price"
                id="house"
                onChange={handleChange2}
                
            />
            <h2>Others</h2>

            <input
                type="number"
                step="any"
                value={sal.others}
                placeholder="€ price"
                id="others"
                onChange={handleChange2}
                
            />
          
			<h2>
            Enter exemptions for old tax regime excluding 50k of standard deduction:
            </h2>
            <input
                type="number"
                step="any"
                value={exemp.old}
                placeholder="€ price"
                id="old"
                onChange={handleChange3}
                
            />
            <h2>
            Enter exemption for new tax regime (Employer PF amount): 
            </h2>
            <input
                type="number"
                step="any"
                value={exemp.new}
                placeholder="€ price"
                id="new"
                onChange={handleChange3}
                
            />
            
            <h2>Income Tax for Old tax regime = {exemp.cOld}</h2>
            <h2>Income Tax for New tax regime = {exemp.cNew}</h2>


            <h2>{exemp.message}</h2>

            
			<button type="submit">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M511.6 36.86l-64 415.1c-1.5 9.734-7.375 18.22-15.97 23.05c-4.844 2.719-10.27 4.097-15.68 4.097c-4.188 0-8.319-.8154-12.29-2.472l-122.6-51.1l-50.86 76.29C226.3 508.5 219.8 512 212.8 512C201.3 512 192 502.7 192 491.2v-96.18c0-7.115 2.372-14.03 6.742-19.64L416 96l-293.7 264.3L19.69 317.5C8.438 312.8 .8125 302.2 .0625 289.1s5.469-23.72 16.06-29.77l448-255.1c10.69-6.109 23.88-5.547 34 1.406S513.5 24.72 511.6 36.86z"></path></svg>
			</button>
		</form>
	);
}

export default TaxCalcForm;