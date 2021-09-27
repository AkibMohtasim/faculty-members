import './Cart.css';
import React from 'react';
import Miniprofile from '../Miniprofile/Miniprofile';

const Cart = (props) => {
  const {cart} = props;
  let totalSalary = 0;
  for(const prof of cart){
    totalSalary = totalSalary + prof.salary;
  }

  return (
    <div className="cart">
      <h1>Add Professors as your guest faculty</h1>
      <h3>Total teachers added: {cart.length}</h3>
      <h4>Total Salary: ${totalSalary}</h4>
      {
        cart.map(miniprofile => <Miniprofile name={miniprofile.name} img={miniprofile.img} key={miniprofile.id}></Miniprofile>)
      }
    </div>
  );
};

export default Cart;