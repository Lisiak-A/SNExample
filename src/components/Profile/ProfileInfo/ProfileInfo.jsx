import React from 'react';
import classes from './ProfileInfo.module.css';

const ProfileInfo = () => {
   return (
		<div className={classes.content}>
			<div>
				<img src="https://3.bp.blogspot.com/-2FAWxivXUUY/UwffyVvuYnI/AAAAAAAAPZ0/22AOcErMB2Q/s1600/davinci-panorama.jpg" />
			</div>
			<div className={classes.descriptionBlock}>ava+description</div>
		</div>
   );
}

export default ProfileInfo;