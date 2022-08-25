import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper'

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
			reviewRating: 3,
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

	const displayReviewStars = (reviewRating) => {
		switch (reviewRating) {
			case 0:
				return (
					<>
						<i className='fa-solid fa-star no-star'></i>
						<i className='fa-solid fa-star no-star'></i>
						<i className='fa-solid fa-star no-star'></i>
						<i className='fa-solid fa-star no-star'></i>
						<i className='fa-solid fa-star no-star'></i>
					</>
				)
				break
			case 1:
				return (
					<>
						<i className='fa-solid fa-star'></i>
						<i className='fa-solid fa-star no-star'></i>
						<i className='fa-solid fa-star no-star'></i>
						<i className='fa-solid fa-star no-star'></i>
						<i className='fa-solid fa-star no-star'></i>
					</>
				)
				break
			case 2:
				return (
					<>
						<i className='fa-solid fa-star'></i>
						<i className='fa-solid fa-star'></i>
						<i className='fa-solid fa-star no-star'></i>
						<i className='fa-solid fa-star no-star'></i>
						<i className='fa-solid fa-star no-star'></i>
					</>
				)
				break
			case 3:
				return (
					<>
						<i className='fa-solid fa-star'></i>
						<i className='fa-solid fa-star'></i>
						<i className='fa-solid fa-star'></i>
						<i className='fa-solid fa-star no-star'></i>
						<i className='fa-solid fa-star no-star'></i>
					</>
				)
				break
			case 4:
				return (
					<>
						<i className='fa-solid fa-star'></i>
						<i className='fa-solid fa-star'></i>
						<i className='fa-solid fa-star'></i>
						<i className='fa-solid fa-star'></i>
						<i className='fa-solid fa-star no-star'></i>
					</>
				)
				break
			case 5:
				return (
					<>
						<i className='fa-solid fa-star'></i>
						<i className='fa-solid fa-star'></i>
						<i className='fa-solid fa-star'></i>
						<i className='fa-solid fa-star'></i>
						<i className='fa-solid fa-star'></i>
					</>
				)
				break
			default:
				break
		}
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
												{displayReviewStars(review.reviewRating)}
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
