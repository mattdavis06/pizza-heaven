import { useState, useEffect } from 'react'
import { request } from 'graphql-request'
import EventsCard from './shared/EventsCard'

export default function Events() {
	const [locationsUpcomingEvents, setlocationsUpcomingEvents] = useState(null)
	const [cardIdx, setCardIdx] = useState(1)
	const [disableBtn, setDisabledBtn] = useState(false)

	useEffect(() => {
		const fetchProducts = async () => {
			const { locationsUpcomingEvents } = await request(
				`https://api-eu-west-2.hygraph.com/v2/${process.env.REACT_APP_API_KEY}/master`,
				`
				{
                    locationsUpcomingEvents(orderBy: eventDate_ASC) {
                        id
                        eventName
                        eventStartDate
                        eventEndDate
                        eventStartTime
                        eventEndTime
                        eventDate
                        eventDescription {
                            html
                          }
                        eventLink
                        eventLocation {
                          latitude
                          longitude
                        }
                        eventImage {
                            url
                          }
                      }
				}
			`
			)
			setlocationsUpcomingEvents(locationsUpcomingEvents)
		}

		fetchProducts()
		// eslint-disable-next-line
	}, [])

	const addMoreEvents = () => {
		if (cardIdx === locationsUpcomingEvents.length) {
			setDisabledBtn(!disableBtn)
		} else {
			setCardIdx((prev) => prev + 1)
		}
	}

	return (
		<section id='events' className='events'>
			<div className='container'>
				<div className='row heading'>
					<div className='subheader'>
						<h4>Upcoming Events</h4>
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
				<div className='row events'>
					{locationsUpcomingEvents &&
						locationsUpcomingEvents.slice(0, cardIdx).map((event) => {
							return (
								<EventsCard
									key={event.id}
									id={event.id}
									eventName={event.eventName}
									eventStartDate={event.eventStartDate}
									eventEndDate={event.eventEndDate}
									eventStartTime={event.eventStartTime}
									eventEndTime={event.eventEndTime}
									eventDate={event.eventDate}
									eventDescription={event.eventDescription}
									eventLink={event.eventLink}
									eventLocation={event.eventLocation}
									eventImage={event.eventImage}
								/>
							)
						})}
				</div>
				<div className='row'>
					<button
						className='btn btn-sm btn-outline'
						style={{ margin: 'auto' }}
						onClick={() => addMoreEvents()}
						disabled={disableBtn ? true : false}
					>
						{!disableBtn ? 'More Events' : 'No More Events'}
					</button>
				</div>
			</div>
		</section>
	)
}
