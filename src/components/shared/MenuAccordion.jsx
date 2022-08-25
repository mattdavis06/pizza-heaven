import { useState, useEffect } from 'react'
import { request } from 'graphql-request'

export default function MenuAccordion({ heading, headingIcon }) {
	const [isOpen, setIsOpen] = useState(false)
	const [breads, setBreads] = useState(null)
	const [pizzas, setPizzas] = useState(null)
	const [pizzaVeggies, setPizzaVeggies] = useState(null)
	const [pizzaSpecials, setPizzaSpecials] = useState(null)

	useEffect(() => {
		const fetchProducts = async () => {
			const { breads, pizzas, pizzaVeggies, pizzaSpecials } = await request(
				`https://api-eu-west-2.hygraph.com/v2/${process.env.REACT_APP_API_KEY}/master`,
				`
		  {
			breads {
				id
				breadName
				breadPrice
			}
			pizzas {
				id
				pizzaName
				pizzaDescription
				pizzaPrice
			}
			pizzaVeggies {
				id
				pizzaName
				pizzaDescription
				pizzaPrice
			}
			pizzaSpecials {
				id
				pizzaName
				pizzaDescription
				pizzaPrice
			}
		  }
		`
			)
			setBreads(breads)
			setPizzas(pizzas)
			setPizzaVeggies(pizzaVeggies)
			setPizzaSpecials(pizzaSpecials)
		}

		fetchProducts()
		// eslint-disable-next-line
	}, [])

	return (
		<div className='card-heading'>
			<div
				className={`card-header accordion ${
					heading === 'Veggie Pizza' ? 'veggie' : ''
				}`}
				onClick={() => setIsOpen(!isOpen)}
			>
				<h5>{heading}</h5>
				<div className='card-header-icons'>
					<i className={`fas fa-chevron-${isOpen ? 'down' : 'up'}`}></i>
					{headingIcon === null ? (
						<i className='fa-solid fa-carrot'></i>
					) : (
						<img src={headingIcon} alt='classNameic-pizza-icon' />
					)}

					{/* <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */}
				</div>
			</div>
			<div className={`card-list-items ${isOpen ? 'open' : ''}`}>
				<ul>
					{heading === 'Breads' && breads
						? breads.map((bread) => {
								return (
									<li key={bread.id}>
										<div className='list-item'>
											<p>{bread.breadName}</p>
										</div>
										<div className='list-price'>
											<p>£{bread.breadPrice.toFixed(2)}</p>
										</div>
									</li>
								)
						  })
						: heading === 'Pizza' && pizzas
						? pizzas.map((pizza) => {
								return (
									<div key={pizza.id}>
										<li>
											<div className='list-item'>
												<p>{pizza.pizzaName}</p>
											</div>
											<div className='list-price'>
												<p>£{pizza.pizzaPrice.toFixed(2)}</p>
											</div>
										</li>
										<li>
											<div className='list-description'>
												<p>{pizza.pizzaDescription}</p>
											</div>
										</li>
									</div>
								)
						  })
						: heading === 'Veggie Pizza' && pizzaVeggies
						? pizzaVeggies.map((pizzaVeggie) => {
								return (
									<div key={pizzaVeggie.id}>
										<li>
											<div className='list-item'>
												<p>{pizzaVeggie.pizzaName}</p>
											</div>
											<div className='list-price'>
												<p>£{pizzaVeggie.pizzaPrice.toFixed(2)}</p>
											</div>
										</li>
										<li>
											<div className='list-description'>
												<p>{pizzaVeggie.pizzaDescription}</p>
											</div>
										</li>
									</div>
								)
						  })
						: heading === 'Specials' && pizzaSpecials
						? pizzaSpecials.map((specialPizza) => {
								return (
									<div key={specialPizza.id}>
										<li>
											<div className='list-item'>
												<p>{specialPizza.pizzaName}</p>
											</div>
											<div className='list-price'>
												<p>£{specialPizza.pizzaPrice.toFixed(2)}</p>
											</div>
										</li>
										<li>
											<div className='list-description'>
												<p>{specialPizza.pizzaDescription}</p>
											</div>
										</li>
									</div>
								)
						  })
						: heading === null}
				</ul>
			</div>
		</div>
	)
}
