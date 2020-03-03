import { SET_POSTS, CREATE_POST, CREATE_POST_ERROR } from "../constants/action-types";

const initState = {
  posts: [
    {
      "id": 1,
      "author": "Benedict Cumberbatch",
      "createdAt": "15 Oct, 2018",
      "title": "8.2M Could Have Lower Mortgage Payments",
      "text": "Mortgage rates are dropping, giving millions of homeowners an opportunity to lower their monthly payments."
    },
    {
      "id": 2,
      "author": "Dawid Pemberton",
      "createdAt": "23 Nov, 2018",
      "title": "4 Maintenance Chores Your Clients Shouldn’t Delay",
      "text": "Homeowners who fail to perform certain maintenance tasks in a timely manner may face hefty repair bills in the future."
    },
    {
      "id": 3,
      "author": "Norah Greene",
      "createdAt": "03 Jan, 2019",
      "title": "2 Billion Records Exposed in Smart-Home Device Breach",
      "text": "Just how secure is that “smart” security camera or door lock? That is being called into question after reports of a massive data breach hitting."
    }
  ]
};

const postReducer = (state = initState, action) => {
  switch (action.type) {
    case CREATE_POST:
      console.log('created post', action.post);
      return state;
    case CREATE_POST_ERROR:
      console.log('create project error', action.error);
      return state;
    case SET_POSTS:
      console.log('set posts', action);
    default: 
      return state;
  }
};

export default postReducer