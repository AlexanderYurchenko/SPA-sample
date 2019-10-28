import React, { Component } from 'react';
import './App.scss';
import { Route, Switch, Redirect } from "react-router-dom";
import Menu from "./components/menu/menu";
import Posts from "./components/posts/posts";
import Contact from "./components/contact/contact";
import NotFound from "./components/not-found/not-found";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    let url = "https://raw.githubusercontent.com/AlexanderYurchenko/SPA-sample/master/src/data/posts.json"
    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({posts: data.posts});
      })
  }

  render() {
    const { posts } = this.state;

    return (  
      <React.Fragment>
        <div className="w-inner">
          <Menu />
          <Switch>
            <Route exact path="/" children={(props) => (
              props.match
                ? <Posts {...props} posts={posts} /> : ''
            )}/>
            <Route path="/contact" component={Contact} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </React.Fragment>
    );
  }
}
 
export default App;
