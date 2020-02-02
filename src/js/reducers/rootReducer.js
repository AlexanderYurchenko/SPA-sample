import { SET_POSTS } from "../constants/action-types";

const initialState = {
  posts: [
    {
        "id": 1,
        "title": "8.2M Could Have Lower Mortgage Payments",
        "info": "The average borrower stands to save about $266 per month on their mortgage by refinancing.",
        "date": "15 Oct, 2018",
        "author": "Alex Yurchenko"
    },
    {
        "id": 2,
        "title": "4 Maintenance Chores Your Clients Shouldn’t Delay",
        "info": "Homeowners who fail to perform these upkeep tasks in a timely manner may face hefty repair bills in the future.",
        "date": "15 Oct, 2018",
        "author": "Regular Everyday"
    },
    {
        "id": 3,
        "title": "2 Billion Records Exposed in Smart-Home Device Breach",
        "info": "Just how secure is that “smart” security camera or door lock? That is being called into question.",
        "date": "15 Oct, 2018",
        "author": "Some User"
    }],
  refreshPostsList: false,
  refreshPost: false
};

function rootReducer(state = initialState, action) {
  // if (action.type === SET_POSTS) {
  //   console.log(action);
  //   return Object.assign({}, state, {
  //     posts: state.posts.concat(action.payload)
  //   });
  // }

  return state;
};

export default rootReducer;