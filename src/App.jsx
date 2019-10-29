import React, { Component } from 'react';
import './App.scss';
import { Route, Switch, Redirect } from "react-router-dom";
import Menu from "./components/menu/menu";
import Posts from "./components/posts/posts";
import PostSingle from "./components/post-single/post-single";
import Contact from "./components/contact/contact";
import NotFound from "./components/not-found/not-found";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      refreshPostsList: false,
      refreshPost: false
    };
  }

  componentDidMount() {
    let url = "https://raw.githubusercontent.com/AlexanderYurchenko/SPA-sample/master/src/data/posts.json"
    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({posts: data.posts});
      })
      .then(this.refreshPostsList)
  }

  refreshPostsList = () => this.setState({refreshPostsList: !this.state.refreshPostsList})

  render() {
    const { posts, refreshPostsList, refreshPost } = this.state;

    return (  
      <React.Fragment>
        <div className="w-inner">
          <Menu />
          <div className="w-center">
            <Switch>
              <Route exact path="/" children={(props) => (
                props.match
                  ? <Posts {...props} posts={posts} refresh={refreshPostsList} /> : ''
              )}/>
              <Route path="/post/:postId" children={(props) => (
                props.match
                  ? <PostSingle {...props} refresh={refreshPost}/> : ''
              )}/>
              <Route path="/contact" component={Contact} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
 
export default App;
