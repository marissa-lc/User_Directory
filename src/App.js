import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Search from "./pages/Search";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Employee from "./pages/Employee";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/homepage" component={Homepage} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/employee" component={Employee} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
