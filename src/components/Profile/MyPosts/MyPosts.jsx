import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

	let postsElements = props.postsData.map((post) => (
		<Post message={post.post} likesCount={post.likesCount} />
	));

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
				{postsElements}
			</div>
		</div>
   );
}

export default MyPosts