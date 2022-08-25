import Logo from '../../assets/logo/logo.svg'

export default function NavDesktop() {
	return (
		<div className='nav-desktop'>
			<div className='brand-logo'>
				<img src={Logo} alt='brand-logo' />
				{/* <a href='https://www.freepik.com/vectors/pizzeria'>Pizzeria vector created by winkimages - www.freepik.com</a> */}
			</div>
			<div className='nav-desktop-links'>
				<ul>
					<li>
						<a href='#menu'>menu</a>
					</li>
					<li>
						<a href='#locations'>Locations</a>
					</li>
					<li>
						<a href='#reviews'>Reviews</a>
					</li>
					<li>
						<a href='#events'>Events</a>
					</li>
					<li>
						<a href='#about'>About</a>
					</li>
					<li>
						<a href='#contact'>Contact</a>
					</li>
				</ul>
			</div>
		</div>
	)
}
