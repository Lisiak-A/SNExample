import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
	let postsElements = props.postsData.map((post) => <Post message={post.post} likesCount={post.likesCount} />);

	let newPostElement = React.createRef();

	let addPost = () => {
		let text = newPostElement.current.value;
		props.addPost(text);
		newPostElement.current.value = '';
	};

	return (
		<div className={classes.mypostBlock}>
			<h3>My posts</h3>
			<div>
				<div>
					<textarea ref={newPostElement}></textarea>
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
