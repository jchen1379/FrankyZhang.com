import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import {NavBar} from "./Components/Navigation/NavBar";
import {ContentDisplayArea} from "./Components/Layout/ContentDisplayArea";
import {Footer} from "./Components/Navigation/Footer";
import {PageRouter} from "./Components/Navigation/NavBarRouterSwitch";

ReactDOM.render(
  <React.StrictMode>
    <ContentDisplayArea>
      <NavBar/>
      <PageRouter/>
      <Footer/>
    </ContentDisplayArea>
  </React.StrictMode>,
  document.getElementById('root')
);

let request = new XMLHttpRequest();

const WakeUpHeroku = () => {
  request.open("GET", "https://franky-zhang-portfolio.herokuapp.com/");
  console.debug(new Date().toISOString() + ": Pinging Heroku App");
  request.send();
}

setInterval(WakeUpHeroku, 10000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
