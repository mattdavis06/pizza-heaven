import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper'
import ReviewRatingStar from './shared/ReviewRatingStar'
import 'swiper/css'

export default function Reviews() {
	const reviewData = [
		{
			id: 1,
			review:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modidignissimos reprehenderit, voluptatibus nostrum eveniet placeatadipisci mollitia impedit ullam dolor',
			reviewRating: 4,
			reviewerName: 'Mark',
			reviewerLocation: 'Preston',
			reviewedDate: '11/08/2022',
			reviwerImg: 'https://randomuser.me/api/portraits/med/men/14.jpg',
		},
		{
			id: 2,
			review:
				'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum pariatur explicabo temporibus, quidem doloribus, dolor ipsam laborum error placeat minus fugit provident nihil soluta officiis sed quisquam, aliquam odio eligendi.',
			reviewRating: 5,
			reviewerName: 'Angela',
			reviewerLocation: 'Chorley',
			reviewedDate: '09/07/2022',
			reviwerImg: 'https://randomuser.me/api/portraits/med/women/56.jpg',
		},
		{
			id: 3,
			review:
				'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum pariatur explicabo temporibus, quidem doloribus, dolor ipsam laborum error placeat minus fugit provident nihil soluta officiis sed quisquam, aliquam odio eligendi.',
			reviewRating: 4,
			reviewerName: 'Lucy',
			reviewerLocation: 'Bamber Bridge',
			reviewedDate: '01/07/2022',
			reviwerImg: 'https://randomuser.me/api/portraits/med/women/6.jpg',
		},
		{
			id: 4,
			review:
				'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum pariatur explicabo temporibus, quidem doloribus, dolor ipsam laborum error placeat minus fugit provident nihil soluta officiis sed quisquam, aliquam odio eligendi.',
			reviewRating: 4,
			reviewerName: 'Alex',
			reviewerLocation: 'Lostock Hall',
			reviewedDate: '27/06/2022',
			reviwerImg: 'https://randomuser.me/api/portraits/med/men/53.jpg',
		},
	]

	const reviewRatings = (review) => {
		return [...Array(review.reviewRating)].map((review, idx) => (
			<ReviewRatingStar key={idx} />
		))
	}

	return (
		<section id='reviews' className='reviews'>
			<div className='container'>
				<div className='row heading'>
					<div className='subheader white'>
						<h4>Reviews</h4>
					</div>
				</div>
			</div>
			<div className='reviews-wrapper'>
				<div className='container'>
					<Swiper
						loop={true}
						autoplay={{
							delay: 4000,
							disableOnInteraction: false,
						}}
						modules={[Autoplay]}
					>
						{reviewData.map((review) => {
							return (
								<SwiperSlide key={review.id}>
									<div className='review'>
										<div className='review-quote'>
											<i className='fa-solid fa-quote-left'></i>
											<h4>{review.review}</h4>
											<i className='fa-solid fa-quote-right'></i>
											<div className='review-rating'>
												{reviewRatings(review)}
											</div>
											<div className='reviewer-details'>
												<small className='reviewer-name'>
													{review.reviewerName}
												</small>
												<span>-</span>
												<small className='reviewer-loction'>
													{review.reviewerLocation}
												</small>
												<span>-</span>
												<small className='reviewed-date'>
													{review.reviewedDate}
												</small>
											</div>
											<img src={review.reviwerImg} alt='review-user-img' />
										</div>
									</div>
								</SwiperSlide>
							)
						})}
					</Swiper>
				</div>
			</div>
		</section>
	)
}
