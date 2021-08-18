import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import GameButton from "./components/GameButton/GameButton";
import Game from "./components/Game/Game";

ReactDOM.render(
  <React.StrictMode>
    {/*<App />*/}
    {/*<GameButton num={1} color={'red'} colorName={"RED"}></GameButton>*/}
    <Game></Game>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
