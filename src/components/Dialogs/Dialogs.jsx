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
				<div className={classes.message}>Hi, man! How are you?</div>
				<div className={classes.message}>What is your phone number?</div>
				<div className={classes.message}>Who was that dude on my party?</div>
				<div className={classes.message}>Did you manage to do that complicated task?</div>
				<div className={classes.message}>What time is it?</div>
				<div className={classes.message}>I'm fine, thank, dude.</div>
			</div>
		</div>
   );
}

export default Dialogs