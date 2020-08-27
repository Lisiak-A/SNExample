import React from 'react';
import classes from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
	return (
		<div>
			<ProfileInfo />
			<MyPosts postsData={props.stateData.postsData}
				newPostText={props.stateData.newPostText}
				updateNewPostText={props.updateNewPostText}
				addPost={props.addPost} />
		</div>
   );
}

export default Profile;