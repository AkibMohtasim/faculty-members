import React from 'react';
import './Miniprofile.css'

const Miniprofile = (props) => {
  const {name, img} = props;
  return (
    <div className="mini-profile">
      <img src={img} alt=""/>
      <h4>{name}</h4>
    </div>
  );
};

export default Miniprofile;