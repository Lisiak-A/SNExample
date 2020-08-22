let state = {
	profilePage: {
		postsData: [
			{ id: 1, post: "What's up, dude?", likesCount: 15 },
			{ id: 2, post: "It's okay, man", likesCount: 115 }
		]
	},
	messagesPage: {
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
		]
	}
};


export let addPost = (postMessage) => {
	let newPost = {
		id: 5,
		post: postMessage,
		likesCount: 0
	};
	state.profilePage.postsData.push(newPost);
}

export default state;