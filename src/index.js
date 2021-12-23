import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';

// function Square(props) {
//   return (
//     <button className="square" onClick={props.onClick}>
//       {props.value}
//     </button>
//   );
// }

// ========================================

ReactDOM.render(
  <App />,
  document.getElementById('root')
);