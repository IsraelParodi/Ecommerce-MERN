import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout/layout";
import "./App.css";
import Home from "./Pages/Home/index";
import Signin from "./Pages/Signin/index";
import Signup from "./Pages/Signup/index";

function App() {
  return (
    <div className="App">
      <Layout>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </Router>
      </Layout>
    </div>
  );
}

export default App;
