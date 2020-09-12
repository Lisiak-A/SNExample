const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
	messagesData: [
		{ id: 1, message: 'Hi, man! How are you?' },
		{ id: 2, message: 'What is your phone number?' },
		{ id: 3, message: 'Who was that dude on my party?' },
		{ id: 4, message: 'Did you manage to do that complicated task?' },
		{ id: 5, message: 'What time is it?' },
		{ id: 6, message: "I'm fine, thank, dude." }
	],
	dialogsData: [
		{ id: 1, name: 'Andrii' },
		{ id: 2, name: 'Dmytro' },
		{ id: 3, name: 'Svitlana' },
		{ id: 4, name: 'Anastasiia' },
		{ id: 5, name: 'Vlad' },
		{ id: 6, name: 'Maxym' }
	],
	newMessageBody: ''
};

const messagesReducer = (state = initialState, action) => {

   switch (action.type) {
      case UPDATE_NEW_MESSAGE_BODY:
         state.newMessageBody = action.body;
         return state;
      case SEND_MESSAGE:
         let body = state.newMessageBody;
         state.newMessageBody = '';
         state.messagesData.push({ id: 7, message: body });
         return state;
      default:
         return state;
   }
}

export const sendMessageActionCreator = () => {
	return {
		type: SEND_MESSAGE
	};
};

export const updateNewMessageBodyActionCreator = (body) => {
	return {
		type: UPDATE_NEW_MESSAGE_BODY,
		body: body
	};
};

export default messagesReducer;