import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem.jsx';
import Message from './Message/Message.jsx';
import { updateNewMessageBodyActionCreator, sendMessageActionCreator } from '../../redux/state';

const Dialogs = (props) => {
	let stateData = props.store.getState().messagesPage;

	let dialogsElements = stateData.dialogsData.map((dialog) => <DialogItem name={dialog.name} id={dialog.id} />);

	let messagesElements = stateData.messagesData.map((message) => <Message message={message.message} />);

	let newMessageBody = stateData.newMessageBody;

	let onSendMessageClick = () => {
		props.store.dispatch(sendMessageActionCreator());
	}

	let onNewMessageChange = (e) => {
		let body = e.target.value;
		props.store.dispatch(updateNewMessageBodyActionCreator(body));
	}

	return (
		<div className={classes.dialogs}>
			<div className={classes.dialogsItems}>{dialogsElements}</div>
			<div className={classes.messages}>
				<div>{messagesElements}</div>
				<div>
					<div>
						<textarea
							value={newMessageBody}
							onChange={onNewMessageChange}
							placeholder="Enter your message" />
					</div>
					<div>
						<button onClick={onSendMessageClick}>Send</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Dialogs;
