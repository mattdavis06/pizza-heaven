import { useState } from 'react'

export default function EventsCard({
	id,
	eventName,
	eventStartDate,
	eventEndDate,
	eventStartTime,
	eventEndTime,
	eventDate,
	eventDescription,
	eventLink,
	eventLocation,
	eventImage,
}) {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<div className='card col' key={id}>
			<div className='card-event'>
				<div className='card-header event'>
					<h5>{eventName}</h5>
					<div className='card-event-details'>
						<h6>
							Date:
							<span>
								{eventDate !== null
									? eventDate.split('-').reverse().join('-')
									: `${eventStartDate
											.split('-')
											.reverse()
											.join('-')} - ${eventEndDate
											.split('-')
											.reverse()
											.join('-')}`}
							</span>
						</h6>
						<h6>
							Time:
							<span>
								{eventStartTime === ''
									? 'TBC'
									: `${eventStartTime} - ${eventEndTime}`}
							</span>
						</h6>
					</div>
				</div>
				<div className='card-event-img'>
					<img src={eventImage.url} alt='event-img' />
				</div>
				<div
					className='card-event-details-heading'
					onClick={() => setIsOpen(!isOpen)}
				>
					<h6>Event Details:</h6>
					<i className={`fas fa-chevron-${isOpen ? 'up' : 'down'}`}></i>
				</div>
				<div className={`card-event-content ${isOpen ? 'open' : ''}`}>
					<div
						dangerouslySetInnerHTML={{
							__html: eventDescription.html,
						}}
					/>
					<div className='card-event-footer'>
						<div className='card-event-location'>
							<a
								href={`https://www.google.com/maps/search/?api=1&query=${eventLocation.latitude}, ${eventLocation.longitude}`}
								target='_blank'
								rel='noreferrer'
							>
								<i className='fa-solid fa-location-dot'></i>
							</a>
						</div>
						<div className='card-event-link'>
							<a href={`${eventLink}`} target='_blank' rel='noreferrer'>
								<i className='fa-solid fa-link'></i>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
