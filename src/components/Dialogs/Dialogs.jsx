import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem.jsx'
import Message from './Message/Message.jsx'


const Dialogs = (props) => {

	let dialogsElements = props.stateData.dialogsData
		.map((dialog) => <DialogItem name={dialog.name} id={dialog.id} />);
	
	let messagesElements = props.stateData.messagesData
		.map((message) => <Message message={message.message} />);


   return (
		<div className={classes.dialogs}>
			<div className={classes.dialogsItems}>

				{dialogsElements}

				
			</div>
			<div className={classes.messages}>

				{messagesElements}

			</div>
		</div>
   );
}

export default Dialogs