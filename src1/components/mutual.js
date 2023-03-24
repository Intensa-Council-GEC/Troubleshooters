import React, { useState } from 'react';
import './mutual.css';

function SIPCalculator() {
  const [principalAmount, setPrincipalAmount] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [tenure, setTenure] = useState(0);
  const [result, setResult] = useState(0);

  const handlePrincipalAmountChange = (event) => {
    setPrincipalAmount(event.target.value);
  };

  const handleInterestRateChange = (event) => {
    setInterestRate(event.target.value);
  };

  const handleTenureChange = (event) => {
    setTenure(event.target.value);
  };

  const handleCalculate = (event) => {
    event.preventDefault();
    // const interestRatePerMonth = interestRate  / 100;
    // const maturityAmount = principalAmount * (((1 + interestRatePerMonth) ** (tenure*12))) ;
    
    // P [ (1+i)^n-1 ] * (1+i)/i
    const p=principalAmount;
    const n=tenure*12;
    const i=interestRate/100/12;
    const maturityAmount = p * ((1 + i) ** (n)-1)*((1+i)/i) ;

    setResult(maturityAmount.toFixed(2));
  };


//Lumpsum

const [LprincipalAmount, setLPrincipalAmount] = useState(0);
const [LinterestRate, setLInterestRate] = useState(0);
const [Ltenure, setLTenure] = useState(0);
const [Lresult, setLResult] = useState(0);

const LumphandlePrincipalAmountChange = (event) => {
  setLPrincipalAmount(event.target.value);
};

const LumphandleInterestRateChange = (event) => {
  setLInterestRate(event.target.value);
};

const LumphandleTenureChange = (event) => {
  setLTenure(event.target.value);
};

const LumphandleCalculate = (event) => {
  event.preventDefault();
  // const interestRatePerMonth = interestRate  / 100;
  // const maturityAmount = principalAmount * (((1 + interestRatePerMonth) ** (tenure*12))) ;
  
  //  P(1 + r)^n
  const Lp=LprincipalAmount;
  const Ln=Ltenure;
  const Li=LinterestRate/100;
  const LmaturityAmount = Lp * ((1 + Li) ** (Ln)) ;

  setLResult(LmaturityAmount.toFixed(2));
};

  return (
    <><div className='all-containers'>
    <div className='container1'>
      <h1>SIP Calculator</h1>
      <form onSubmit={handleCalculate}>
        <label>
          Principal Amount:
          <input type="number" value={principalAmount} onChange={handlePrincipalAmountChange} />
        </label>
        <br />
        <label>
          Interest Rate (%):
          <input type="number" step="0.01" value={interestRate} onChange={handleInterestRateChange} />
        </label>
        <br />
        <label>
          Tenure (years):
          <input type="number" value={tenure} onChange={handleTenureChange} />
        </label>
        <br />
        <button type="submit">Calculate</button>
      </form>
      <h2>Result: {result}</h2>
    </div>
    <div className='container2'>
      <h1>Lumpsum Calculator</h1>
      <form onSubmit={LumphandleCalculate}>
        <label>
          Principal Amount:
          <input type="number" value={LprincipalAmount} onChange={LumphandlePrincipalAmountChange} />
        </label>
        <br />
        <label>
          Interest Rate (%):
          <input type="number" step="0.01" value={LinterestRate} onChange={LumphandleInterestRateChange} />
        </label>
        <br />
        <label>
          Tenure (years):
          <input type="number" value={Ltenure} onChange={LumphandleTenureChange} />
        </label>
        <br />
        <button type="submit">Calculate</button>
      </form>
      <h2>Result: {Lresult}</h2>
    </div>
	</div>
    </>
  );
}

export default SIPCalculator;