import React, { Fragment } from 'react';
import mealsImage from '../../../assets/meals.jpg';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header = ({ onShowCart }) => {
	return (
		<Fragment>
			<header className={classes.header}>
				<h1>Snap Foods</h1>
				<HeaderCartButton onShowCart={onShowCart} />
			</header>
			<div className={classes['main-image']}>
				<img src={mealsImage} alt="A table full all delicius foods" />
			</div>
		</Fragment>
	);
};

export default Header;
