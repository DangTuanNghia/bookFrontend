import './App.css';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import HeaderComponent from "./components/HeaderComponent";
import ListBook from "./components/ListBook";
import FooterComponent from "./components/FooterComponent";
import CreateBook from "./components/CreateBook";
import ViewBook from "./components/ViewBook";

class App extends Component {
  render() {
    return (
        <div>
          <Router>
            <HeaderComponent />
            <div className="container">
              <Switch>
                <Route path = "/" exact component = {ListBook}></Route>
                <Route path = "/books" component = {ListBook}></Route>
                <Route path = "/add-book/:id" component = {CreateBook}></Route>
                <Route path = "/view-book/:id" component = {ViewBook}></Route>
                {/*/!* <Route path = "/update-employee/:id" component = {UpdateEmployeeComponent}></Route> *!/*/}
              </Switch>
            </div>
            <FooterComponent />
          </Router>
        </div>
    );
  }
}

export default App;

