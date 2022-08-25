import PizzaImg1 from '../../assets/imgs/hemant-latawa-IfQlwNqJqV8-unsplash.jpg'
import PizzaImg2 from '../../assets/imgs/emily-powers-9xWl_zhIcS4-unsplash.jpg'
import PizzaImg3 from '../../assets/imgs/nadya-spetnitskaya-tOYiQxF9-Ys-unsplash.jpg'
import PizzaImg4 from '../../assets/imgs/nik-owens-40OJLYVWeeM-unsplash.jpg'

export default function ImgBlock() {
	return (
		<div className='pizza-img-wrapper'>
			<div className='pizza-img'>
				<img src={PizzaImg1} alt='pizza-img' />
			</div>
			<div className='pizza-img'>
				<img src={PizzaImg2} alt='pizza-img' />
			</div>
			<div className='pizza-img'>
				<img src={PizzaImg3} alt='pizza-img' />
			</div>
			<div className='pizza-img'>
				<img src={PizzaImg4} alt='pizza-img' />
			</div>
		</div>
	)
}
