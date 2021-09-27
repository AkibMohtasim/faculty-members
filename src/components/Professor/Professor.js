import './Professor.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faAddressBook, faBlog, faCommentDots, faDesktop, faPhone } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

const element1 = <FontAwesomeIcon icon={faPhone} />;
const element2 = <FontAwesomeIcon icon={faCommentDots} />;
const element3 = <FontAwesomeIcon icon={faBlog} />;




const Professor = (props) => {
  const {name, nationality, age, img, salary, subject}= props.professor;

  return (
    <div className="professor-card">
      <img src={img} alt="" />
      <h2>{name}</h2>
      <p><small>Nationality: {nationality}</small></p>
      <p>Specializes in: {subject}</p>
      <p>Age: {age} years</p>
      <h3>Salary: ${salary}</h3>
      <button className="add-btn" onClick={ () => {props.totalSalary(props.professor)}}>add to your university</button>
      <div className="contact">
        <a href="#">{element1}</a> <a href="#">{element2}</a> <a href="#">{element3}</a>
      </div>
    </div>
  );
};

export default Professor;