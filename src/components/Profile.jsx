import React from 'react';
import classes from './Profile.module.css'

const Profile = () => {
   return (
		<div className={classes.content}>
			<div>
				<img src="https://3.bp.blogspot.com/-2FAWxivXUUY/UwffyVvuYnI/AAAAAAAAPZ0/22AOcErMB2Q/s1600/davinci-panorama.jpg" />
			</div>
			<div>ava+description</div>
			<div>
				My posts
				<div>New post</div>
				<div className={classes.posts}>
					<div className={classes.item}>post 1</div>
					<div className={classes.item}>post 2</div>
				</div>
			</div>
		</div>
   );
}

export default Profile;