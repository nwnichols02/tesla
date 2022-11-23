import React from "react";
import "./App.css";
import ReactFullpage from "@fullpage/react-fullpage";
import bootstrap from "bootstrap";

class Home extends React.Component {
  render() {
    return (
      <ReactFullpage
        scrollOverflow={true}
        scrollBar={true}
        paddingBottom={"0px"}
        paddingTop={"0px"}
        scrollingSpeed={700}
        navigation={true}
        render={({ state, fullpageApi }) => {
          return (
            <div className="App">
              {/* Model 3 */}
              <div className="header-wrapper">
                <header className="header">
                  <img
                    href="/"
                    onClick="/"
                    src="https://png.monster/wp-content/uploads/2021/03/Tesla_Inc.-Wordmark-Black-Logo.wine-6bbe293a-370x247.png.webp"
                  />
                  <nav>
                    <ul className="nav__links mt-3">
                      <li>
                        <a href="/" className="fs-5">
                          Model S
                        </a>
                        {/* use this when model S page is completed */}
                        {/* <a href="/model-s">Model S</a> */}
                      </li>
                      <li>
                        <a href="/" className="fs-5">
                          Model 3
                        </a>
                      </li>
                      <li>
                        <a href="/" className="fs-5">
                          Model X
                        </a>
                      </li>
                      <li>
                        <a href="/" className="fs-5">
                          Model Y
                        </a>
                      </li>
                      <li>
                        <a href="/" className="fs-5">
                          Solar Roof
                        </a>
                      </li>
                      <li>
                        <a href="/" className="fs-5">
                          Solar Panels
                        </a>
                      </li>
                    </ul>
                  </nav>
                  <ul className="nav__buttons mt-3">
                    <li>
                      <a className="cta fs-5" href="localhost:3000/">
                        <button>Shop</button>
                      </a>
                    </li>
                    <li>
                      <a className="cta fs-5" href="localhost:3000/">
                        <button>Account</button>
                      </a>
                    </li>
                    <li>
                      <a className="cta fs-5" href="localhost:3000/">
                        <button>Menu</button>
                      </a>
                    </li>
                  </ul>
                </header>
              </div>
              <div className="section section1">
                <div className="model-3-img">
                  <div className="title">
                    <h2 className="titleName">Model 3</h2>
                    <p className="fs-3">
                      Order Online for <u>Touchless Delivery</u>
                    </p>
                  </div>
                  <div className="order-buttons">
                    <a
                      //fix this to become my own build your own tesla page
                      href="https://www.tesla.com/model3/design#overview"
                    >
                      <button className="button1 fs-4">Custom Order</button>
                    </a>
                    <button className="button2 fs-4">Existing Inventory</button>
                  </div>
                </div>
              </div>

              {/* Model Y */}
              <div className="section section2">
                <div className="model-y-img">
                  <div className="title">
                    <h2 className="titleName">Model Y</h2>
                    <p className="fs-3">
                      Order Online for <u>Touchless Delivery</u>
                    </p>
                  </div>
                  <div className="order-buttons">
                    <a
                      //fix this to become my own build your own tesla page
                      href="https://www.tesla.com/modelY/design#overview"
                    >
                      <button className="button1 fs-4">Custom Order</button>
                    </a>
                    <button className="button2 fs-4">Existing Inventory</button>
                  </div>
                </div>
              </div>

              {/* Model S */}
              <div className="section section3">
                <div className="model-s-img">
                  <div className="title">
                    <h2 className="titleName">Model S</h2>
                    <p className="fs-3">
                      Order Online for <u>Touchless Delivery</u>
                    </p>
                  </div>
                  <div className="order-buttons">
                    <a
                      //fix this to become my own build your own tesla page
                      href="https://www.tesla.com/modelS/design#overview"
                    >
                      <button className="button1 fs-4">Custom Order</button>
                    </a>
                    <button className="button2 fs-4">Existing Inventory</button>
                  </div>
                </div>
              </div>

              {/* Model X */}
              <div className="section section4">
                <div className="model-x-img">
                  <div className="title">
                    <h2 className="titleName">Model X</h2>
                    <p className="fs-3">
                      Order Online for <u>Touchless Delivery</u>
                    </p>
                  </div>
                  <div className="order-buttons">
                    <a
                      //fix this to become my own build your own tesla page
                      href="https://www.tesla.com/modelX/design#overview"
                    >
                      <button className="button1 fs-4">Custom Order</button>
                    </a>
                    <button className="button2 fs-4">Existing Inventory</button>
                  </div>
                </div>
              </div>

              {/* Solar Panels */}
              <div className="section section5">
                <div className="solar-panels-img">
                  <div className="title">
                    <h2 className="titleName">Solar Panels</h2>
                    <p className="fs-3">Lowest Cost Solar Panels In America</p>
                  </div>
                  <div className="order-buttons">
                    <a
                      //fix this to become my own build your own tesla page
                      href="https://www.tesla.com/energy/design"
                    >
                      <button className="button1 fs-4">Order Now</button>
                    </a>
                    <button className="button2 fs-4">Learn More</button>
                  </div>
                </div>
              </div>

              {/* Solar Roof */}
              <div className="section section6">
                <div className="solar-roof-img">
                  <div className="title">
                    <h2 className="titleName">Solar Roof</h2>
                    <p className="fs-3">Produce Clean Energy From Your Roof</p>
                  </div>
                  <div className="order-buttons">
                    <a
                      //fix this to become my own build your own tesla page
                      href="https://www.tesla.com/energy/design"
                    >
                      <button className="button1 fs-4">Order Now</button>
                    </a>
                    <button className="button2 fs-4">Learn More</button>
                  </div>
                </div>
              </div>

              {/* Accessories */}
              <div className="section">
                <div className="accessories-img">
                  <div className="title">
                    <h2 className="titleName">Accessories</h2>
                  </div>
                  <div className="order-buttons pb-4">
                    <a
                      //fix this to become my own build your own tesla page
                      href="https://shop.tesla.com/?tesref=true"
                    >
                      <button className="button1 fs-4">SHOP NOW</button>
                    </a>
                  </div>
                  <div className="footer pt-3">
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
            </div>
          );
        }}
      />
    );
  }
}

export default Home;
