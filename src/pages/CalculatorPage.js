/* eslint-disable */
import React from 'react';
import Calculator from '../components/Calculator';
import Quote from './Quote';

const CalculatorPage = () => {
  const quote = "Let's do some maths!";

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-5">
          <h4>{quote}</h4>
        </div>
        <div className="col-md-7">
          <Calculator />
        </div>
      </div>
    </div>
  );
};

export default CalculatorPage;
