import React from 'react';
import { updateNewMessageBodyActionCreator, sendMessageActionCreator } from '../../redux/messagesReducer';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {
	let stateData = props.store.getState().messagesPage;

	let onSendMessageClick = () => {
		props.store.dispatch(sendMessageActionCreator());
	}

	let onNewMessageChange = (body) => {
		props.store.dispatch(updateNewMessageBodyActionCreator(body));
	}

	return (
		<Dialogs updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick} messagesPage={stateData} />
	);
};

export default DialogsContainer;
