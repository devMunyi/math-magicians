import React, { Component } from 'react';
// import operate from '../logic/operate';
import calculate from '../logic/calculate';

// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends Component {
  constructor(props) {
    super(props);

    // initialize state
    this.state = {
      total: 0,
      next: 0,
      operation: null,
    };

    // bind onclick handler
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const buttonName = event.target.textContent?.trim();

    // calculate
    const result = calculate(this.state, buttonName);

    // update state object
    this.setState(result);
  }

  render() {
    const { total, operation, next } = this.state;
    return (
      <div className="container">
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
                onClick={this.handleClick}
                onKeyPress={this.handleClick}
                className="bg-silver"
              >
                {' '}
                AC
              </td>
              <td
                role="presentation"
                onClick={this.handleClick}
                onKeyDown={this.handleClick}
                className="bg-silver"
              >
                +/-
              </td>
              <td
                role="presentation"
                onClick={this.handleClick}
                onKeyDown={this.handleClick}
                className="bg-silver"
              >
                %
              </td>
              <td
                role="presentation"
                onClick={this.handleClick}
                onKeyDown={this.handleClick}
                className="bg-orange"
              >
                ÷
              </td>
            </tr>
            <tr>
              <td
                role="presentation"
                onClick={this.handleClick}
                onKeyDown={this.handleClick}
                className="bg-silver"
              >
                9
              </td>
              <td
                role="presentation"
                onClick={this.handleClick}
                onKeyDown={this.handleClick}
                className="bg-silver"
              >
                8
              </td>
              <td
                role="presentation"
                onClick={this.handleClick}
                onKeyDown={this.handleClick}
                className="bg-silver"
              >
                7
              </td>
              <td
                role="presentation"
                onClick={this.handleClick}
                onKeyDown={this.handleClick}
                className="bg-orange"
              >
                x
              </td>
            </tr>
            <tr>
              <td
                role="presentation"
                onClick={this.handleClick}
                onKeyDown={this.handleClick}
                className="bg-silver"
              >
                6
              </td>
              <td
                role="presentation"
                onClick={this.handleClick}
                onKeyDown={this.handleClick}
                className="bg-silver"
              >
                5
              </td>
              <td
                role="presentation"
                onClick={this.handleClick}
                onKeyDown={this.handleClick}
                className="bg-silver"
              >
                4
              </td>
              <td
                role="presentation"
                onClick={this.handleClick}
                onKeyDown={this.handleClick}
                className="bg-orange"
              >
                -
              </td>
            </tr>
            <tr>
              <td
                role="presentation"
                onClick={this.handleClick}
                onKeyDown={this.handleClick}
                className="bg-silver"
              >
                3
              </td>
              <td
                role="presentation"
                onClick={this.handleClick}
                onKeyDown={this.handleClick}
                className="bg-silver"
              >
                2
              </td>
              <td
                role="presentation"
                onClick={this.handleClick}
                onKeyDown={this.handleClick}
                className="bg-silver"
              >
                1
              </td>
              <td
                role="presentation"
                onClick={this.handleClick}
                onKeyDown={this.handleClick}
                className="bg-orange"
              >
                +
              </td>
            </tr>
            <tr>
              <td
                role="presentation"
                onClick={this.handleClick}
                onKeyDown={this.handleClick}
                className="bg-silver"
                colSpan={2}
              >
                0
              </td>
              <td
                role="presentation"
                onClick={this.handleClick}
                onKeyDown={this.handleClick}
                className="bg-silver"
              >
                .
              </td>
              <td
                role="presentation"
                onClick={this.handleClick}
                onKeyDown={this.handleClick}
                className="bg-orange"
              >
                =
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Calculator;
