import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let postsData = [
	{ id: 1, post: "What's up, dude?", likesCount: 15 },
	{ id: 2, post: "It's okay, man", likesCount: 115 }
];

let dialogsData = [
	{ id: 1, name: 'Andrii' },
	{ id: 2, name: 'Dmytro' },
	{ id: 3, name: 'Svitlana' },
	{ id: 4, name: 'Anastasiia' },
	{ id: 5, name: 'Vlad' },
	{ id: 6, name: 'Maxym' }
];

let messagesData = [
	{ id: 1, message: 'Hi, man! How are you?' },
	{ id: 2, message: 'What is your phone number?' },
	{ id: 3, message: 'Who was that dude on my party?' },
	{ id: 4, message: 'Did you manage to do that complicated task?' },
	{ id: 5, message: 'What time is it?' },
	{ id: 6, message: "I'm fine, thank, dude." }
];

ReactDOM.render(
  <React.StrictMode>
    <App postsData={postsData} dialogsData={dialogsData} messagesData={messagesData} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
