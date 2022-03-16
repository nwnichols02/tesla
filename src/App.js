import "./App.css";

function App() {
  return (
    <div className="App">
      
      {/* Model 3 */}

      <div className="model-3-img">
      <div className="header-wrapper">
        <header className="header">
          <h1>
            <a href="localhost:3000/">TESLA</a>
          </h1>
          <ol>
            <button>
              <span>Menu</span>
            </button>
          </ol>
        </header>
      </div>
        <div className="title">
          <h2>Model 3</h2>
          <p>Order Online for Touchless Delivery</p>
        </div>
        <div className="order-buttons">
          <a
            //fix this to become my own build your own tesla page
            href="https://www.tesla.com/model3/design#overview"
          >
            <button>Custom Order</button>
          </a>
          <button>Existing Inventory</button>
        </div>
      </div>
      {/* Model Y */}
      <div className="model-y-img">
        <div className="title">
          <h2>Model Y</h2>
          <p>Order Online for Touchless Delivery</p>
        </div>
        <div className="order-buttons">
          <button>Custom Order</button>
          <button>Existing Inventory</button>
        </div>
      </div>
      {/* Model S */}
      <div className="model-s-img">
        <div className="title">
          <h2>Model S</h2>
          <p>Order Online for Touchless Delivery</p>
        </div>
        <div className="order-buttons">
          <button>Custom Order</button>
          <button>Existing Inventory</button>
        </div>
      </div>
      {/* Model X */}
      <div className="model-x-img">
        <div className="title">
          <h2>Model X</h2>
          <p>Order Online for Touchless Delivery</p>
        </div>
        <div className="order-buttons">
          <button>Custom Order</button>
          <button>Existing Inventory</button>
        </div>
      </div>
      {/* Solar Panels */}
      <div className="solar-panels-img">
        <div className="title">
          <h1>Solar Panels</h1>
          <p>Lowest Cost Solar Panels In America</p>
        </div>
        <div className="solar-panels-order-buttons">
          <button>Order Now</button>
          <button>Learn More</button>
        </div>
      </div>
      {/* Solar Roof */}
      <div className="solar-roof-img">
        <div className="title">
          <h1>Solar Roof</h1>
          <p>Produce Clean Energy From Your Roof</p>
        </div>
        <div className="solar-roof-order-buttons">
          <button>Order Now</button>
          <button>Learn More</button>
        </div>
      </div>
      {/* Accessories */}
      <div className="accessories-img">
        <div className="title">
          <h1>Accessories</h1>
        </div>
        <div className="accessories-buttons">
          <button>Shop Now</button>
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
  );
}

export default App;
