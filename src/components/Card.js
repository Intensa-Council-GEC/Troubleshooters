import React from 'react';
import mutual from './mutual';
import './card.css';
import { useNavigate } from 'react-router-dom';
import MutualFunds from './MutualFunds';
function Card({ imageSrc, title, content, cagr, description }) {
  const navigate=useNavigate();
  
  const handle =()=>{
    navigate('/portfolio')
    sessionStorage.setItem("img",imageSrc);
    sessionStorage.setItem("title",title);
    sessionStorage.setItem("content",content);
    sessionStorage.setItem("cagr",cagr);
    sessionStorage.setItem("description",description);

  }
  
  return (
    <div className="card0" onClick={handle}>
      <img className="size" src={imageSrc} alt={title} />
      <div>
        <h3>{title}</h3>
        <h4>{content}</h4>
        <p>{description}</p>
        <p>CAGR: {cagr}%</p>
      </div>
    </div>
  );
}

export default Card;  