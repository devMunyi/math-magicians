import React from 'react';
import './App.css';
import Calculator from './components/Calculator';

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Calculator />
      </div>
    );
  }
}
export default App;
