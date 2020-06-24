import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import Index from "./pages/Index";
import Login from "./pages/Login";
import MyBills from "./pages/MyBills";
import { BillsProvider, MyBillsProvider } from "./stores";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BillsProvider>
      <MyBillsProvider>
        <Router>
          <Route path="/" exact component={Index} />
          <Route path="/my/bills" exact component={MyBills} />
          <Route path="/login" exact component={Login} />
        </Router>
      </MyBillsProvider>
    </BillsProvider>
  );
}

export default App;
