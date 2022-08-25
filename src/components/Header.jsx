import NavDesktop from './shared/NavDesktop'
import NavMobile from './shared/NavMobile'

export default function Header() {
	return (
		<header id='header' className='header'>
			<div className='container'>
				<nav>
					<NavDesktop />
					<NavMobile />
				</nav>
				<div className='hero'>
					<div className='row'>
						<div className='hero-text-wrapper'>
							<div className='hero-text'>
								<h1>Freshly Prepared Wood Fired Pizza</h1>
								<h2>
									Lorem ipsum dolor sit, amet consectetur adipisicing elit.
									Laborum aut iure esse totam quibusdam reiciendis beatae sunt,
									veritatis exercitationem unde magnam porro. Aliquid quae
									necessitatibus rerum dolore quod, saepe quas.
								</h2>
							</div>
						</div>
					</div>
					<div className='row'>
						<div className='hero-cta'>
							<a className='btn cta' href='#contact'>
								Enquire Now
							</a>
						</div>
					</div>
				</div>
			</div>
		</header>
	)
}
