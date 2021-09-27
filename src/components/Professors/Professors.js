import './Professors.css';
import React, { useState } from 'react';
import { useEffect } from 'react';
import Professor from '../Professor/Professor';
import Cart from '../Cart/Cart';



const Professors = () => {
  const [professors, setProfessors] = useState([]);
  const [cart, setCart] = useState([]);


  useEffect( () => {
    fetch('./professors.json')
    .then(res => res.json())
    .then(data => setProfessors(data))
  }, []);
 
  const profileFunc = (profs) => {
    let newCart = [...cart];
    if(newCart.indexOf(profs) === -1){
      newCart = [...cart, profs];
    }
    setCart(newCart);
  }


  return (
  <div className="professor-container">
    
    <div className="professor-card-container">
      {professors.map(professor => <Professor
      totalSalary={profileFunc} 
      key={professor.id} 
      professor={professor}> 
    </Professor>)
    }
    </div>

    <div>
      <Cart cart={cart}></Cart>
    </div>
  </div>
  );
};

export default Professors;