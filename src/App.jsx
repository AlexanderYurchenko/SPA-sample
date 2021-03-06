import React, { Component } from 'react';
import './App.scss';
import { connect } from 'react-redux';
import { setPosts } from './js/actions/index'
import { fetchPosts } from "./js/actions/postActions";
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Route, Switch } from "react-router-dom";
import Menu from "./components/menu/menu";
import Posts from "./components/posts/posts";
import Notifications from "./components/notifications/notifications"
import PostSingle from "./components/post-single/post-single";
import Contact from "./components/contact/contact";
import NotFound from "./components/not-found/not-found";
import Footer from "./components/footer/footer";
import SignIn from "./components/auth/sign-in";
import SignUp from "./components/auth/sign-up";
import CreatePost from "./components/post-create/post-create";

function mapDispatchToProps(dispatch) {
  return {
    setPosts: posts => dispatch(setPosts(posts)),
    fetchPosts: posts => dispatch(fetchPosts())
  };
}

class App extends Component {
  render() {
    const { refreshPost } = this.props;

    return (
      <React.Fragment>
        <div className="w-inner">
          <Menu />
          <div className="w-center">
            <div className="w-content">
              <Switch>
                <Route exact path="/" children={(props) => (
                  props.match
                    ? <div className="w-cols">
                        <Posts/>
                        <Notifications/>
                      </div> : ''
                )}/>
                <Route path="/post/:postId" children={(props) => (
                  props.match
                    ? <PostSingle {...props} refresh={refreshPost}/> : ''
                )}/>
                <Route path="/contact" component={Contact} />
                <Route path="/signin" component={SignIn} />
                <Route path="/signup" component={SignUp} />
                <Route path="/create" component={CreatePost} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default compose(
  connect(null, mapDispatchToProps),
  firestoreConnect(['posts'])
)(App);
