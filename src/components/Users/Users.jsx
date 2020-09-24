import React from 'react';
import classes from './Users.module.css';

const Users = (props) => {
   if (props.usersData.length === 0) {
      props.setUsers([
			{
				id: 1,
				photoURL:
					'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Vitovsky_Dmytro.jpg/250px-Vitovsky_Dmytro.jpg',
				followed: false,
				fullName: 'Dmytro',
				status: 'This is really cool idea',
				location: {
					city: 'Minsk',
					country: 'Belarus'
				}
			},
			{
				id: 2,
				photoURL:
					'https://upload.wikimedia.org/wikipedia/uk/d/d5/%D0%84%D0%B3%D0%BE%D1%80%D0%BE%D0%B2_%D0%90%D0%BD%D0%B4%D1%80%D1%96%D0%B9_%D0%86%D0%B2%D0%B0%D0%BD%D0%BE%D0%B2%D0%B8%D1%87_1938.jpg',
				followed: false,
				fullName: 'Andrii',
				status: 'Thank you very much for your help',
				location: {
					city: 'Kyiv',
					country: 'Ukraine'
				}
			},
			{
				id: 3,
				photoURL:
					'https://ostrog.rayon.in.ua/upload/news/8/2019-02/155018946386/t_1_vasil-kostiantin-ostrozkii.jpg',
				followed: true,
				fullName: 'Kostia',
				status: 'I will be upfront with you ...',
				location: {
					city: 'Chicago',
					country: 'USA'
				}
			},
			{
				id: 4,
				photoURL: 'https://today.org.ua/uploads/media/name_famous/0001/65/thumb_64019_name_famous_small.jpeg',
				followed: true,
				fullName: 'Mykhailo',
				status: 'Today is rainy ...',
				location: {
					city: 'New-Delhi',
					country: 'India'
				}
			}
		]);
   }
   return (
		<div>
			{props.usersData.map((u) => (
				<div key={u.id}>
					<span>
						<div>
							<img src={u.photoURL} className={classes.userPhoto} />
						</div>
						<div>
							{u.followed ? (
								<button
									onClick={() => {
										props.unfollow(u.id);
									}}
								>
									Unfollow
								</button>
							) : (
								<button
									onClick={() => {
										props.follow(u.id);
									}}
								>
									Follow
								</button>
							)}
						</div>
					</span>
					<span>
						<span>
							<div> {u.fullName} </div>
							<div> {u.status} </div>
						</span>
						<span>
							<div> {u.location.city} </div>
							<div> {u.location.country} </div>
						</span>
					</span>
				</div>
			))}
		</div>
   );
}

export default Users;