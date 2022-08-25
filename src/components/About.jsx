import GirdImg1 from '../assets/imgs/amy-vann-oweVAD78zcQ-unsplash.jpg'
import GirdImg2 from '../assets/imgs/PHOTO-2022-01-06-12-24-54.jpg'
import GirdImg3 from '../assets/imgs/vaishnav-chogale-cvfxrmFYkZ8-unsplash.jpg'
import GirdImg4 from '../assets/imgs/amy-vann-As9e1qJG-vM-unsplash.jpg'
import GirdImg5 from '../assets/imgs/PHOTO-2022-01-06-12-34-17.jpg'
import GirdImg6 from '../assets/imgs/emily-powers-9xWl_zhIcS4-unsplash.jpg'

export default function About() {
	return (
		<section id='about' className='about'>
			<div className='container'>
				<div className='row heading'>
					<div className='subheader'>
						<h4>About</h4>
					</div>
				</div>
				<div className='subheader-text dark'>
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores
						quod porro magni neque quasi hic, omnis sit dicta officia, quos
						delectus ipsam, dolor consequuntur commodi voluptates et facere
						minus consequatur?
					</p>
				</div>
			</div>
			<div className='about-wrapper'>
				<div className='grid-box grid-text-1'>
					<p>
						Lorem ipsum, <span>dolor sit amet</span> consectetur adipisicing
						elit. Id, quo quod exercitationem suscipit hic doloribus quasi,{' '}
						<span>fugiat molestias </span> fugit esse delectus voluptas illo
						similique temporibus ut, maxime iure sunt? Dolorem!
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab
						aspernatur <span>qui numquam cum facere</span> dignissimos libero
						eum nulla aperiam?{' '}
						<span>Sunt voluptatem labore placeat consequuntur</span>
						rerum.
					</p>
				</div>
				<div className='grid-box grid-text-2'>
					<div className='grid-quote-wrapper'>
						<i className='fas fa-quote-left'></i>
						<blockquote>
							We aim to offer the best produce and product we can. Along with
							customer feedback, researching new pizzas ideas and toppings.
							We're always looking to push the boundaries.
						</blockquote>
						<i className='fas fa-quote-right'></i>
					</div>
					<figcaption>Andrew &amp; Jill - Pizza Heaven</figcaption>
				</div>
				<div className='grid-box grid-text-3'>
					<h6>Why Pizza Heaven?</h6>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo iusto
						eligendi omnis cupiditate optio ipsam hic recusandae. Sed neque in
						enim dolor cumque voluptatem assumenda iure nesciunt provident vero
						perspiciatis odio, sit repellat labore placeat laborum amet facere
						recusandae tempore doloremque error qui ut. Exercitationem illo
						assumenda vitae pariatur fuga.
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt eum
						quos id suscipit facere dolor, quidem dolorem perferendis mollitia
						autem impedit molestias molestiae odit cupiditate!
					</p>
					<p>
						Lorem....<span>Pizza Heaven was born!!</span>
					</p>
				</div>
				<div className='grid-box grid-img-1'>
					<img src={GirdImg1} alt='grid-img' />
				</div>
				<div className='grid-box grid-img-2'>
					<img src={GirdImg2} alt='grid-img' />
				</div>
				<div className='grid-box grid-img-3'>
					<img src={GirdImg3} alt='grid-img' />
				</div>
				<div className='grid-box grid-img-4'>
					<img src={GirdImg4} alt='grid-img' />
				</div>
				<div className='grid-box grid-img-5'>
					<img src={GirdImg5} alt='grid-img' />
				</div>
				<div className='grid-box grid-img-6'>
					<img src={GirdImg6} alt='grid-img' />
				</div>
			</div>
		</section>
	)
}
