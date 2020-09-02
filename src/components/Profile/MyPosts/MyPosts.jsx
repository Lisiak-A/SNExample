import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
	let postsElements = props.postsData.map((post) => <Post message={post.post} likesCount={post.likesCount} />);

	let newPostElement = React.createRef();

	let addPost = () => {
		props.dispatch({ type: 'ADD-POST' });
	};

	let onPostChange = () => {
		let text = newPostElement.current.value;
		props.dispatch({ type: 'UPDATE-NEW-POST-TEXT', newText: text });
	}

	return (
		<div className={classes.mypostBlock}>
			<h3>My posts</h3>
			<div>
				<div>
					<textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
				</div>
				<div>
					<button onClick={addPost}>Add Post</button>
				</div>
			</div>
			<div className={classes.posts}>{postsElements}</div>
		</div>
	);
};

export default MyPosts;
