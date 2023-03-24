import React from "react";
import Card from './Card';
import pic from '../imgs/mon.jpg'
import Funds from './Funds.json'

function Stocks(){
    return(
        <>
        {
      // console.log(Funds[0].profile[0].name)
      Funds[1].profile.map((i,index)=>
        <Card imageSrc={i.image} title={i.name} content={i.risk} cagr={i.Cagr} description={i.description} />
      )
    }
        </>
    )
}
export default Stocks;