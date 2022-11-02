/* eslint-disable */
import React from 'react';
import Calculator from '../components/Calculator';
import { FaHandPointRight } from 'react-icons/fa';

const CalculatorPage = () => {
  const quote = "Let's do some maths!";

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-5">
          <h4>
            {quote} <FaHandPointRight />
          </h4>
        </div>
        <div className="col-md-7">
          <Calculator />
        </div>
      </div>
    </div>
  );
};

export default CalculatorPage;
