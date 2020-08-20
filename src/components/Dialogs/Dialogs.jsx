import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem.jsx'
import Message from './Message/Message.jsx'


const Dialogs = (props) => {

	let dialogsData = [
		{id: 1, name: 'Andrii'},
		{id: 2, name: 'Dmytro'},
		{id: 3, name: 'Svitlana'},
		{id: 4, name: 'Anastasiia'},
		{id: 5, name: 'Vlad'},
		{id: 6, name: 'Maxym'},
	]

	let dialogsElements = dialogsData
		.map((dialog) => <DialogItem name={dialog.name} id={dialog.id} />);

		let messagesData = [
			{ id: 1, message: 'Hi, man! How are you?' },
			{ id: 2, message: 'What is your phone number?' },
			{ id: 3, message: 'Who was that dude on my party?' },
			{ id: 4, message: 'Did you manage to do that complicated task?' },
			{ id: 5, message: 'What time is it?' },
			{ id: 6, message: "I'm fine, thank, dude." }
	];
	
	let messagesElements = messagesData
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