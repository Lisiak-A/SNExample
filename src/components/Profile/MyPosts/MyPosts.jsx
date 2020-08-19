import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

	let postsData = [
		{ id: 1, post: "What's up, dude?", likesCount: 15 },
		{ id: 2, post: "It's okay, man", likesCount: 115 }
	];

   return (
		<div className={classes.mypostBlock}>
			<h3>My posts</h3>
			<div>
				<div>
					<textarea></textarea>
				</div>
				<div>
					<button>Add Post</button>
				</div>
			</div>
			<div className={classes.posts}>
				<Post message={postsData[0].post} likesCount={postsData[0].likesCount} />
				<Post message={postsData[1].post} likesCount={postsData[1].likesCount} />
			</div>
		</div>
   );
}

export default MyPosts