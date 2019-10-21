import React, { Component } from 'react';
import './App.scss';
import { Route, Switch, Redirect } from "react-router-dom";
import Menu from "./components/menu/menu";
import Posts from "./components/posts/posts";
import Contact from "./components/contact/contact";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (  
      <React.Fragment>
        <div className="w-inner">
          <Menu />
          <Route exact path="/" component={Posts} />
          <Route path="/contact" component={Contact} />
        </div>
      </React.Fragment>
    );
  }
}
 
export default App;
