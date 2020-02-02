import React, { Component } from 'react';
import './App.scss';
import { connect } from 'react-redux';
import { setPosts } from './js/actions/index'
import { fetchPosts } from "./js/actions/index";
import store from "./js/store/index";
import { Route, Switch } from "react-router-dom";
import Menu from "./components/menu/menu";
import Posts from "./components/posts/posts";
import Notifications from "./components/notifications/notifications"
import PostSingle from "./components/post-single/post-single";
import Contact from "./components/contact/contact";
import NotFound from "./components/not-found/not-found";
import Footer from "./components/footer/footer";

// const mapStateToProps = state => {
//   return { 
//     posts: state.posts,
//     refreshPostsList: state.refreshPostsList,
//     refreshPost: state.refreshPost
//   };
// };

function mapDispatchToProps(dispatch) {
  return {
    setPosts: posts => dispatch(setPosts(posts)),
    fetchPosts: posts => dispatch(fetchPosts())
  };
}

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     posts: [],
  //     refreshPostsList: false,
  //     refreshPost: false
  //   };
  // }

  // componentDidMount() {
  //   console.log(this.props);
  //   store.dispatch(setPosts());
  // }

  // refreshPostsList = () => this.setState({refreshPostsList: !this.state.refreshPostsList})

  render() {
    // console.log(this.props);
    const { posts, refreshPostsList, refreshPost } = this.props;

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
 
export default connect(null, mapDispatchToProps)(App);
