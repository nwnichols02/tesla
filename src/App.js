import React from "react";
import ModelS from "./ModelS";
import Home from "./Home";
import {Routes, Route} from 'react-router-dom';

function App (){
  return (
    <div>
      <Routes>
        <Route path="/model-s" element={<ModelS/>}/>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </div>      
  )
}

export default App;