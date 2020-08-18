import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
   return (
		<div className={classes.item}>
			<img src="https://upload.wikimedia.org/wikipedia/commons/2/2d/Ivan_Sirko_%28Repin_Cossacks%29.png" />
			{props.message}
			<div>
				{props.likesCount}
			</div>
		</div>
   );
}

export default Post