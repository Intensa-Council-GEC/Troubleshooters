import { useState, useEffect } from 'react';
import { ref, set } from 'firebase/database';
import { db, auth } from '../firebase';
import { uid } from 'uid';
import './card.css'

import ExpenseList from './ExpenseList.js';
import Card from './Card';
// import pic from '../imgs/mon.jpg'
import Funds from './Funds.json'

import './mutual.css';
import Modal from 'react-modal';

Modal.setAppElement('#root');

function Portfolio(params) {
  const title=sessionStorage.getItem('title')
    const imageSrc=sessionStorage.getItem('img')
    const description=sessionStorage.getItem('description')
    const content=sessionStorage.getItem('content')
    const cagr=sessionStorage.getItem('cagr')

  const initVals = { name: title,intrest:cagr ,  date: new Date().toLocaleDateString() }
	const [newExpense, setNewExpense] = useState(initVals);


    


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


    const [isOpen, setIsOpen] = useState(false);
    const [principleAmount, setPrincipleAmount] = useState(0);
    const [numYears, setNumYears] = useState(0);
  
    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    const handleSubmit = (event) => {
      event.preventDefault();
      const type= 'investment';
      // Do something with principleAmount and numYears
      console.log(`Investing ${principleAmount} for ${numYears} years`);
      const getExpenseDate = new Date(newExpense.date),
				// yearExpense = getExpenseDate.getFullYear(),
				// monthExpense = getExpenseDate.getMonth() + 1,
        yearExpense=2023,
        monthExpense=3,
				idExpense = uid();
      set(
        ref(db,`/users/${auth.currentUser.uid}/${type}/${yearExpense}/${monthExpense}/${idExpense}/`),
        { ...newExpense, id: idExpense ,Amount:principleAmount,year:numYears }
      ).then(() => console.log('Investment saved successfully!'))
      .catch(err => console.log(err));
  
      //s//etNewExpense(initVals);
      closeModal();
    };


  

    return(
        <>
        
        <div className='content'>
           
                 <img className='tot' src={imageSrc}/><br/>
                 

                 <div className='text-align'>
                 <div className='t'>
                 {title}
                 </div>
                 <div>
                {content},</div><div>
                <p>CAGR:{cagr},</p></div><div>
                <p>{description}</p></div>
        </div>


         {/* <button className='btn' >Invest Now</button> */}


         
         <button className='btn' onClick={openModal}>Invest Now</button>
      <Modal isOpen={isOpen} onRequestClose={closeModal} >
        <h4 className='heading'>Investment Details</h4>
        <form onSubmit={handleSubmit} >
          <div >
            <label htmlFor="principle-amount">Principle Amount:</label>
            <input
              type="number"
              id="principle-amount"
              value={principleAmount}
              onChange={(event) => setPrincipleAmount(event.target.value)}
            />
          </div>
          <div>
            <label htmlFor="num-years">Number of Years:</label>
            <input
              placeholder='Number of Years:'
              type="number"
              id="num-years"
              value={numYears}
              onChange={(event) => setNumYears(event.target.value)}
            />
          </div><div className="sweet">
          <button className='btn' type="submit">Invest</button>
          <button className='btn' onClick={closeModal}>Cancel</button></div>
        </form>
      </Modal>
    

        </div><br/>
        <div className='content1'>
            <a className='card1'>
                <p><h1>BETTER RETURNS</h1>
                1.5x higher
                <li>This porfolio has a 20.10% CAGR vs benchmark's 13.02% since inception</li></p>
            </a>
            <a className='card2'>
                <p><h1>LESSER DRAWDOWN
</h1>
31% lesser
During the worst fall, this portfolio fell by 42.35% vs benchmark's 61.00%</p>
            </a>
            <a className='card3'>
                <p><h1>
                LOWER RISK
                </h1>
25% lesser
This porfolio has a 14.77% risk vs benchmark's 19.78% since inception</p>
            </a>
        </div><br/>
        <div className='container3'>
      <h1>Lumpsum Calculator</h1>
      <form className='one' onSubmit={LumphandleCalculate}>
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
        <button className='btn' type="submit">Calculate</button>
      </form>
      <h2>Maturity Amount: ₹ {Lresult}</h2>
    </div>
	{/* </div> */}
        
        </>
    )
}
export default Portfolio;