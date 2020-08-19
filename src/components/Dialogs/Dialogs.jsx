import React from 'react';
import classes from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
	let path = "/dialogs/" + props.id;

	return (
		<div className={`${classes.dialog} ${classes.active}`} >
			<NavLink to={path}>{props.name}</NavLink>
		</div>
	)
}

const Message = (props) => {
	return (
		<div className={classes.message}>
			{props.message}
		</div>
	)
}

const Dialogs = (props) => {

	let dialogsData = [
		{id: 1, name: 'Andrii'},
		{id: 2, name: 'Dmytro'},
		{id: 3, name: 'Svitlana'},
		{id: 4, name: 'Anastasiia'},
		{id: 5, name: 'Vlad'},
		{id: 6, name: 'Maxym'},
	]

		let messagesData = [
			{ id: 1, message: 'Hi, man! How are you?' },
			{ id: 2, message: 'What is your phone number?' },
			{ id: 3, message: 'Who was that dude on my party?' },
			{ id: 4, message: 'Did you manage to do that complicated task?' },
			{ id: 5, message: 'What time is it?' },
			{ id: 6, message: "I'm fine, thank, dude." }
		];


   return (
		<div className={classes.dialogs}>
			<div className={classes.dialogsItems}>
				<DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
				<DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
				<DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
				<DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
				<DialogItem name={dialogsData[4].name} id={dialogsData[4].id} />
				<DialogItem name={dialogsData[5].name} id={dialogsData[5].id} />
			</div>
			<div className={classes.messages}>
				<Message message={messagesData[0].message} />
				<Message message={messagesData[1].message} />
				<Message message={messagesData[2].message} />
				<Message message={messagesData[3].message} />
				<Message message={messagesData[4].message} />
				<Message message={messagesData[5].message} />
			</div>
		</div>
   );
}

export default Dialogs