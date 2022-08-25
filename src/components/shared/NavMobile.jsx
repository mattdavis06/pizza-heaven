import { useState, useEffect } from 'react'
import { useMediaQuery } from 'react-haiku'
import Logo from '../../assets/logo/logo.svg'

export default function NavMobile() {
	const [isActive, setIsActive] = useState(false)

	const handleMenuClick = () => {
		!isActive ? setIsActive(true) : setIsActive(false)
	}

	const handleMenuScrollLock = () => {
		if (isActive) {
			document.body.style.position = 'fixed'
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.position = ''
			document.body.style.overflow = ''
		}
	}

	useEffect(() => {
		handleMenuScrollLock()
	}, [isActive])

	const breakpoint = useMediaQuery('(max-width:1024px)')

	return (
		<>
			<div className='nav-mobile'>
				<div className='brand-logo'>
					<img src={Logo} alt='brand-logo' />
					{/* <a href='https://www.freepik.com/vectors/pizzeria'>Pizzeria vector created by winkimages - www.freepik.com</a> */}
				</div>
				<div
					className={`nav-toggle-menu-bars ${isActive ? 'active' : ''}`}
					onClick={handleMenuClick}
				>
					<div className='bar1'></div>
					<div className='bar2'></div>
					<div className='bar3'></div>
				</div>
			</div>
			<div className='nav-mobile-links'>
				<ul className={`${isActive ? 'active' : ''}`}>
					<li
						className={`${isActive ? 'slide-in-1' : 'slide-out-1'}`}
						onClick={() => setIsActive(!isActive)}
					>
						<a href='#menu'>Menu</a>
					</li>
					<li
						className={`${isActive ? 'slide-in-2' : 'slide-out-2'}`}
						onClick={() => setIsActive(!isActive)}
					>
						<a href='#locations'>Locations</a>
					</li>
					<li
						className={`${isActive ? 'slide-in-3' : 'slide-out-3'}`}
						onClick={() => setIsActive(!isActive)}
					>
						<a href='#reviews'>Reviews</a>
					</li>
					<li
						className={`${isActive ? 'slide-in-3' : 'slide-out-3'}`}
						onClick={() => setIsActive(!isActive)}
					>
						<a href='#events'>Events</a>
					</li>
					<li
						className={`${isActive ? 'slide-in-4' : 'slide-out-4'}`}
						onClick={() => setIsActive(!isActive)}
					>
						<a href='#about'>About</a>
					</li>
					<li
						className={`${isActive ? 'slide-in-5' : 'slide-out-5'}`}
						onClick={() => setIsActive(!isActive)}
					>
						<a href='#contact'>Contact</a>
					</li>
				</ul>
			</div>
		</>
	)
}
