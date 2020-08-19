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
   return (
		<div className={classes.dialogs}>
			<div className={classes.dialogsItems}>
				<DialogItem name="Andrii" id="1" />
				<DialogItem name="Dmytro" id="2" />
				<DialogItem name="Svitlana" id="3" />
				<DialogItem name="Anastasiia" id="4" />
				<DialogItem name="Vlad" id="5" />
				<DialogItem name="Maxym" id="6" />
			</div>
			<div className={classes.messages}>
				<Message message="Hi, man! How are you?" />
				<Message message="What is your phone number?" />
				<Message message="Who was that dude on my party?" />
				<Message message="Did you manage to do that complicated task?" />
				<Message message="What time is it?" />
				<Message message="I'm fine, thank, dude." />
			</div>
		</div>
   );
}

export default Dialogs