import React from 'react';
import classes from './Post.module.css';

const Post = () => {
   return (
		<div className={classes.item}>
			<img src="https://upload.wikimedia.org/wikipedia/commons/2/2d/Ivan_Sirko_%28Repin_Cossacks%29.png" />
			post 2
			<div>
				<span>like</span>
			</div>
		</div>
   );
}

export default Post