import React from "react";

function ModelS() {
  return (
    <div className="ModelS">
      <div className="header-wrapper">
        <header className="header">
          <img
            href="/"
            src="https://png.monster/wp-content/uploads/2021/03/Tesla_Inc.-Wordmark-Black-Logo.wine-6bbe293a-370x247.png.webp"
          />
          <nav>
            <ul className="nav__links">
              <li>
                <a href="/model-s">Model S</a>
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
        </header>
      </div>
      <div className="model-s-img">
        <div className="title">
          <h2>Model S</h2>
          <p>
            Plaid
          </p>
        </div>
        <div className="order-buttons">
        <h3>396 mi<br/><p>Range (EPA est.)</p></h3>
        <h3>1.99 s<br/><p>0-60 mph*</p></h3>
        <h3>200 mph<br/><p>Top Speed*</p></h3>
        <h3>1,020 hp<br/><p>Peak Power</p></h3>

          <a
            //fix this to become my own build your own tesla page
            href="https://www.tesla.com/model3/design#overview"
          >
            <button className="button1">CUSTOM ORDER</button>
          </a>
          <p></p>
        </div>
      </div>
    </div>
  );
}

export default ModelS;
