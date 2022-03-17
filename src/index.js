import React from "react";
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import "./App.css";
import ReactFullpage from "@fullpage/react-fullpage";
import ReactDOM from "react-dom";

class App extends React.Component {
  render() {
    return (
      <ReactFullpage
        scrollOverflow={true}
        scrollBar={true}
        paddingBottom={"0px"}
        paddingTop={"0px"}
        scrollingSpeed={700}
        navigation={true}
        // fixedElements={'header'}
        render={({ state, fullpageApi }) => {
          return (
            <div className="App">
              {/* Model 3 */}
              <div className="header-wrapper">
                <header className="header">
                  <img
                    href="localhost:3000/"
                    src="https://png.monster/wp-content/uploads/2021/03/Tesla_Inc.-Wordmark-Black-Logo.wine-6bbe293a-370x247.png.webp"
                  />
                  <nav>
                    <ul className="nav__links">
                      <li>
                        <a href="www.tesla.com/models">Model S</a>
                      </li>
                      <li>
                        <a href="www.tesla.com/models">Model 3</a>
                      </li>
                      <li>
                        <a href="www.tesla.com/models">Model X</a>
                      </li>
                      <li>
                        <a href="www.tesla.com/models">Model Y</a>
                      </li>
                      <li>
                        <a href="www.tesla.com/models">Solar Roof</a>
                      </li>
                      <li>
                        <a href="www.tesla.com/models">Solar Panels</a>
                      </li>
                    </ul>
                  </nav>
                  <ul className="nav__buttons">
                    <li>
                      <a className="cta" href="localhost:3000/">
                        <button>Shop</button>
                      </a>
                    </li>
                    <li>
                      <a className="cta" href="localhost:3000/">
                        <button>Account</button>
                      </a>
                    </li>
                    <li>
                      <a className="cta" href="localhost:3000/">
                        <button>Menu</button>
                      </a>
                    </li>
                  </ul>

                  {/* <button>Shop</button>
                <button>Account</button> */}
                </header>
              </div>
              <div className="section section1">
                <div className="model-3-img">
                  <div className="title">
                    <h2>Model 3</h2>
                    <p>
                      Order Online for <u>Touchless Delivery</u>
                    </p>
                  </div>
                  <div className="order-buttons">
                    <a
                      //fix this to become my own build your own tesla page
                      href="https://www.tesla.com/model3/design#overview"
                    >
                      <button className="button1">Custom Order</button>
                    </a>
                    <button className="button2">Existing Inventory</button>
                  </div>
                </div>
              </div>

              {/* Model Y */}
              <div className="section section2">
                <div className="model-y-img">
                  <div className="title">
                    <h2>Model Y</h2>
                    <p>
                      Order Online for <u>Touchless Delivery</u>
                    </p>
                  </div>
                  <div className="order-buttons">
                    <a
                      //fix this to become my own build your own tesla page
                      href="https://www.tesla.com/model3/design#overview"
                    >
                      <button className="button1">Custom Order</button>
                    </a>
                    <button className="button2">Existing Inventory</button>
                  </div>
                </div>
              </div>

              {/* Model S */}
              <div className="section section3">
                <div className="model-s-img">
                  <div className="title">
                    <h2>Model S</h2>
                    <p>
                      Order Online for <u>Touchless Delivery</u>
                    </p>
                  </div>
                  <div className="order-buttons">
                    <a
                      //fix this to become my own build your own tesla page
                      href="https://www.tesla.com/model3/design#overview"
                    >
                      <button className="button1">Custom Order</button>
                    </a>
                    <button className="button2">Existing Inventory</button>
                  </div>
                </div>
              </div>

              {/* Model X */}
              <div className="section section4">
                <div className="model-x-img">
                  <div className="title">
                    <h2>Model X</h2>
                    <p>
                      Order Online for <u>Touchless Delivery</u>
                    </p>
                  </div>
                  <div className="order-buttons">
                    <a
                      //fix this to become my own build your own tesla page
                      href="https://www.tesla.com/model3/design#overview"
                    >
                      <button className="button1">Custom Order</button>
                    </a>
                    <button className="button2">Existing Inventory</button>
                  </div>
                </div>
              </div>

              {/* Solar Panels */}
              <div className="section section5">
                <div className="solar-panels-img">
                  <div className="title">
                    <h2>Solar Panels</h2>
                    <p>Lowest Cost Solar Panels In America</p>
                  </div>
                  <div className="order-buttons">
                    <a
                      //fix this to become my own build your own tesla page
                      href="https://www.tesla.com/model3/design#overview"
                    >
                      <button className="button1">Order Now</button>
                    </a>
                    <button className="button2">Learn More</button>
                  </div>
                </div>
              </div>

              {/* Solar Roof */}
              <div className="section section6">
                <div className="solar-roof-img">
                  <div className="title">
                    <h2>Solar Roof</h2>
                    <p>Produce Clean Energy From Your Roof</p>
                  </div>
                  <div className="order-buttons">
                    <a
                      //fix this to become my own build your own tesla page
                      href="https://www.tesla.com/model3/design#overview"
                    >
                      <button className="button1">Order Now</button>
                    </a>
                    <button className="button2">Learn More</button>
                  </div>
                </div>
              </div>

              {/* Accessories */}
              <div className="section">
                <div className="accessories-img">
                  <div className="title">
                    <h2>Accessories</h2>
                  </div>
                  <div className="order-buttons">
                    <a
                      //fix this to become my own build your own tesla page
                      href="https://www.tesla.com/model3/design#overview"
                    >
                      <button className="button1">Shop Now</button>
                    </a>
                  </div>
                </div>
                <div className="footer">
                  <footer>
                    <li>Tesla © 2022</li>
                    <li>Privacy and Legal</li>
                    <li>Contact</li>
                    <li>Careers</li>
                    <li>News</li>
                    <li>Engage</li>
                    <li>Locations</li>
                  </footer>
                </div>
              </div>

            </div>
          );
        }}
      />
      
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

export default App;

//head cold
//scared of liking anime
//holy toliet paper!
//i like hair striaght form the movie greese
//go to bed more hm tomorrow
