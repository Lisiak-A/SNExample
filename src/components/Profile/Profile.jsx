import React from 'react';
import classes from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
   return (
		<div className={classes.content}>
			<div>
				<img src="https://3.bp.blogspot.com/-2FAWxivXUUY/UwffyVvuYnI/AAAAAAAAPZ0/22AOcErMB2Q/s1600/davinci-panorama.jpg" />
			</div>
			<div>ava+description</div>
			<MyPosts />
		</div>
   );
}

export default Profile;