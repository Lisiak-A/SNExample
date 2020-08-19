import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
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
				<Post message="What's up, dude?" likesCount="like: 15" />
				<Post message="This is the post about post" likesCount="like: 35" />
			</div>
		</div>
   );
}

export default MyPosts