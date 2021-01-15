import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Switch, Route } from "react-router-dom";
import Error from './pages/Error'
import Landing from './pages/Landing'
import Register from './pages/Register'
const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/register" component={Register} />
        <Route component={Error} />
      </Switch>
      <Footer />
    </>
  );
};

export default App;
