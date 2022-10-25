import React from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends React.Component {
  render() {
    return (
      <div className="container">
        <table className="table table-bordered">
          <thead className="bg-secondary">
            <tr>
              <td className="calc-output" colSpan={4}>
                0
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="bg-silver">AC</td>
              <td className="bg-silver">+/-</td>
              <td className="bg-silver">%</td>
              <td className="bg-orange">&divide;</td>
            </tr>
            <tr>
              <td className="bg-silver">9</td>
              <td className="bg-silver">8</td>
              <td className="bg-silver">7</td>
              <td className="bg-orange">&times;</td>
            </tr>
            <tr>
              <td className="bg-silver">6</td>
              <td className="bg-silver">5</td>
              <td className="bg-silver">4</td>
              <td className="bg-orange">&minus;</td>
            </tr>
            <tr>
              <td className="bg-silver">3</td>
              <td className="bg-silver">2</td>
              <td className="bg-silver">1</td>
              <td className="bg-orange">+</td>
            </tr>
            <tr>
              <td className="bg-silver" colSpan={2}>
                0
              </td>
              <td className="bg-silver">&#x2022;</td>
              <td className="bg-orange">=</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Calculator;
