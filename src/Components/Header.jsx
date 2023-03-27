import { useState } from 'react'
import './Header.css'

export function Header() {
	const [isMenuVisible, setIsMenuVisible] = useState(false)

	function onHandleClick() {
		setIsMenuVisible(!isMenuVisible)
	}

	return (
		<header className='header'>
			<img
				className='header__logo'
				src='/assets/images/logo.svg'
				alt='This is the logo of the news homapage'
			/>
			<nav className={`header__menu ${isMenuVisible && 'header__menu--hide'}`}>
				<ul className='menu__list'>
					<li className='menu__list-item'>Home</li>
					<li className='menu__list-item'>New</li>
					<li className='menu__list-item'>Popular</li>
					<li className='menu__list-item'>Trending</li>
					<li className='menu__list-item'>Categories</li>
				</ul>
			</nav>
			<button className='header__menu-btn'>
				<img
					src={`${
						isMenuVisible
							? '/assets/images/icon-menu.svg'
							: '/assets/images/icon-menu-close.svg'
					}`}
					alt='This is the button menu that is shown on mobile devices'
					onClick={onHandleClick}
				/>
			</button>
		</header>
	)
}
