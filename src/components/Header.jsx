import React from 'react';
import classes from './Header.module.css'

const Header = () => {
   return (
		<header className={classes.header}>
			<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/POL_COA_Lis.svg/1200px-POL_COA_Lis.svg.png" />
		</header>
   );
}

export default Header;