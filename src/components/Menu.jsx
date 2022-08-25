import RollingPin from '../assets/icons/dough-rolling.png'
import Ladle from '../assets/icons/ladle.png'
import Toppings from '../assets/icons/pepper.png'
import Bread from '../assets/icons/bread.png'
import Pizza from '../assets/icons/pizza.png'
import PizzaSpecials from '../assets/icons/pizza-special.png'
import ImgBlock from './shared/ImgBlock'
import MenuAccordion from './shared/MenuAccordion'

export default function Menu() {
	const headings = [
		{
			id: 1,
			heading: 'Breads',
			headingIcon: Bread,
		},
		{
			id: 2,
			heading: 'Pizza',
			headingIcon: Pizza,
		},
		{
			id: 3,
			heading: 'Veggie Pizza',
			headingIcon: null,
		},
		{
			id: 4,
			heading: 'Specials',
			headingIcon: PizzaSpecials,
		},
	]
	return (
		<section id='menu' className='menu'>
			<div className='container'>
				<div className='row heading'>
					<div className='subheader'>
						<h4>Menu</h4>
					</div>
				</div>
				<div className='row wrap pizzas'>
					<div className='col'>
						<div className='card-heading'>
							<div className='card-header'>
								<h5>Pizza Base</h5>
								<img src={RollingPin} alt='dough-rolling-icon' />
								{/* <div>Icons made by <a href="https://www.flaticon.com/authors/surang" title="surang">surang</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */}
							</div>
							<div className='card-text'>
								<p>
									Thin and crispy, made from Italian flour prepared in a touch
									of semolina for that extra crust. We also cater for gluten
									free, just ask!
								</p>
							</div>
						</div>
					</div>
					<div className='col'>
						<div className='card-heading'>
							<div className='card-header'>
								<h5>Sauce</h5>
								<img src={Ladle} alt='ladle-icon' />
								{/* <div>Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */}
							</div>
							<div className='card-text'>
								<p>
									Our pizza sauce is a unique blend of Italian tomatoes, herbs
									and spices evolved through testing on family, friends and our
									longer standing customers.
								</p>
							</div>
						</div>
					</div>
					<div className='col'>
						<div className='card-heading'>
							<div className='card-header'>
								<h5>Toppings</h5>
								<img src={Toppings} alt='toppings-icon' />
								{/* <div>Icons made by <a href="https://www.flaticon.com/authors/surang" title="surang">surang</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */}
							</div>
							<div className='card-text'>
								<p>
									We are constantly developing our range of toppings and are
									grateful for feedback, ideas and suggestions.
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className='row'>
					<div className='col'>
						{headings.map((heading) => {
							return (
								<MenuAccordion
									key={heading.id}
									id={heading.id}
									heading={heading.heading}
									headingIcon={heading.headingIcon}
								></MenuAccordion>
							)
						})}
					</div>
				</div>
			</div>
			<ImgBlock />
		</section>
	)
}
