import React from "react";
import './ModelS.css'

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
      <div className="model-s-interior-img">
        <div className="interior">
          <h2>Interior of the Future</h2>
        </div>
        
        </div>
        <div className="model-s-video">
            {/* I need to implement a casserole for 5 videos left and right  */}
            <video width={'50%'} height={'50%'} autoPlay>
                <source src="https://tesla-cdn.thron.com/static/YMWZUY_MS-Interior-Carousel-1-Cinematic-Display-Desktop-2000_ZL9RTQ.mp4?xseo="></source>
            </video>
            {/* //fix the auto play to only play while you are on that screen */}
            <h3>Cinematic Experience</h3>
            <p>A 17” touchscreen offers 2200 x 1300 resolution, true colors and exceptional responsiveness for gaming, movies and more.</p>
        </div>
        <div className="image-3-offset">
            <img/>
            <h4>Stay Connected</h4>
            <p>Instantly connect with multi-device Bluetooth, or fast charge devices with wireless and 36-watt USB-C charging.</p>
            <img/>
            <h4>Immersive Sound</h4>
            <p>A 22-speaker, 960-watt audio system with Active Road Noise Reduction offers immersive listening and studio-grade sound quality.</p>
            <img/>
            <h4>Room for Everything</h4>
            <p>With front and rear trunks and fold-flat seats you can fit your bike without taking the wheel off—and your luggage too.</p>
        </div>
      {/* </div> */}
    </div>
  );
}

export default ModelS;
