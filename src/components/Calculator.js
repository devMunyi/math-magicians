import React, { useState } from 'react';
// import operate from '../logic/operate';
import calculate from '../logic/calculate';

// eslint-disable-next-line react/prefer-stateless-function

const Calculator = () => {
  // initialize state using useState hook
  const [total, setTotal] = useState(0);
  const [next, setNext] = useState(null);
  const [operation, setOperation] = useState(null);

  // set an object to pass to calculate function
  const params = {
    total,
    next,
    operation,
  };

  // handle click function
  const handleClick = (e) => {
    // get clicked button name
    const buttonName = e.target.textContent?.trim();

    // call calculate function
    const result = calculate(params, buttonName);

    // destructure value from result variable
    const { total, next, operation } = result;

    // update states
    setTotal(total);
    setNext(next);
    setOperation(operation);
  };

  return (
    <div>
      <table className="table table-bordered">
        <thead className="bg-secondary">
          <tr>
            <td className="calc-output" colSpan={4}>
              {total}
              {operation}
              {next}
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td
              role="presentation"
              onClick={handleClick}
              onKeyPress={handleClick}
              className="bg-silver"
            >
              {' '}
              AC
            </td>
            <td
              role="presentation"
              onClick={handleClick}
              onKeyDown={handleClick}
              className="bg-silver"
            >
              +/-
            </td>
            <td
              role="presentation"
              onClick={handleClick}
              onKeyDown={handleClick}
              className="bg-silver"
            >
              %
            </td>
            <td
              role="presentation"
              onClick={handleClick}
              onKeyDown={handleClick}
              className="bg-orange"
            >
              ÷
            </td>
          </tr>
          <tr>
            <td
              role="presentation"
              onClick={handleClick}
              onKeyDown={handleClick}
              className="bg-silver"
            >
              9
            </td>
            <td
              role="presentation"
              onClick={handleClick}
              onKeyDown={handleClick}
              className="bg-silver"
            >
              8
            </td>
            <td
              role="presentation"
              onClick={handleClick}
              onKeyDown={handleClick}
              className="bg-silver"
            >
              7
            </td>
            <td
              role="presentation"
              onClick={handleClick}
              onKeyDown={handleClick}
              className="bg-orange"
            >
              x
            </td>
          </tr>
          <tr>
            <td
              role="presentation"
              onClick={handleClick}
              onKeyDown={handleClick}
              className="bg-silver"
            >
              6
            </td>
            <td
              role="presentation"
              onClick={handleClick}
              onKeyDown={handleClick}
              className="bg-silver"
            >
              5
            </td>
            <td
              role="presentation"
              onClick={handleClick}
              onKeyDown={handleClick}
              className="bg-silver"
            >
              4
            </td>
            <td
              role="presentation"
              onClick={handleClick}
              onKeyDown={handleClick}
              className="bg-orange"
            >
              -
            </td>
          </tr>
          <tr>
            <td
              role="presentation"
              onClick={handleClick}
              onKeyDown={handleClick}
              className="bg-silver"
            >
              3
            </td>
            <td
              role="presentation"
              onClick={handleClick}
              onKeyDown={handleClick}
              className="bg-silver"
            >
              2
            </td>
            <td
              role="presentation"
              onClick={handleClick}
              onKeyDown={handleClick}
              className="bg-silver"
            >
              1
            </td>
            <td
              role="presentation"
              onClick={handleClick}
              onKeyDown={handleClick}
              className="bg-orange"
            >
              +
            </td>
          </tr>
          <tr>
            <td
              role="presentation"
              onClick={handleClick}
              onKeyDown={handleClick}
              className="bg-silver"
              colSpan={2}
            >
              0
            </td>
            <td
              role="presentation"
              onClick={handleClick}
              onKeyDown={handleClick}
              className="bg-silver"
            >
              .
            </td>
            <td
              role="presentation"
              onClick={handleClick}
              onKeyDown={handleClick}
              className="bg-orange"
            >
              =
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default Calculator;
