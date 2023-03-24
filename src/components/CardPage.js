import React, { useState } from 'react';
import './card.css'
// import Card from './Card';
// import pic from '../imgs/mon.jpg'
// import Funds from './Funds.json'
import CurrentInvestment from './CurrentInvestment';
import MutualFunds from './MutualFunds';
import Stocks from './Stocks';

const CardPage = () => {
//   const api_url = 
//         "./Funds.json";
    
//   // Defining async function
//   async function getapi(url) {
      
//       // Storing response
//       const response = await fetch(url);
      
//       // Storing data in form of JSON
//       var data = await response.json();
//       console.log(data);
      
//   }
//   // Calling that async function
//   getapi(api_url);
// function callCard(ind){
// document.getElementById('data').innerHTML+= 
// Funds[ind].profile.map((i,index)=>
// <Card imageSrc={i.image} title={i.name} content={i.risk} cagr={i.Cagr} description={i.description} />
// )
// }

const [activeButton, setActiveButton] = useState('button1');

    const handleClick = (buttonName) => {
        setActiveButton(buttonName);
    }
  return (
    <>
   
    

   <section >
            <nav>
                <h2>Investment Details</h2>
            </nav>
            <div>
                <button onClick={() => handleClick('button1')}>
                   Current Investment
                </button>
                <button onClick={() => handleClick('button2')}>
                    Mutual Funds
                </button>
                <button onClick={() => handleClick('button3')}>
                    Stocks
                </button>

                {activeButton === 'button1' && <CurrentInvestment  />}
                {activeButton === 'button2' && <MutualFunds />}
                {activeButton === 'button3' && <Stocks />}
            </div>
            
            
            {/* <Bill type={isToggled ? 'Income' : 'Expense'} /> */}
        </section>
    </>
    
    );
}

export default CardPage;

