const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
	postsData: [
		{ id: 1, post: "What's up, dude?", likesCount: 15 },
		{ id: 2, post: "It's okay, man", likesCount: 115 }
	],
	newPostText: 'lisiak'
};

const profileReducer = (state = initialState, action) => {

   switch (action.type) {
      case ADD_POST: {
         let newPost = {
            id: 5,
            post: state.newPostText,
            likesCount: 0
         };
         return {
            ...state,
            postsData: [...state.postsData, newPost],
            newPostText: ''
         };
      }
      case UPDATE_NEW_POST_TEXT: {
         return {
            ...state,
            newPostText: action.newText
         };
      }
      default:
         return state;
   }
}

export const addPostActionCreator = () => {
	return {
		type: ADD_POST
	};
};

export const updateNewPostTextActionCreator = (text) => {
	return {
		type: UPDATE_NEW_POST_TEXT,
		newText: text
	};
};

export default profileReducer;