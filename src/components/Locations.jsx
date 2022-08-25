import { useState, useEffect } from 'react'
import { request } from 'graphql-request'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import MapIcon from '../assets/icons/map-marker-alt-solid.svg'

export default function Locations() {
	let [isCurrentDay, setIsCurrentDay] = useState(null)
	const [locationsWeekdays, setLocationsWeekdays] = useState(null)

	const GetIcon = (_iconSize) => {
		return L.icon({
			iconUrl: MapIcon,
			iconSize: _iconSize,
		})
	}

	const getCurrentDay = () => {
		let currentDay = new Date().getDay()
		setIsCurrentDay(currentDay)
	}

	const openLocationMap = (location) => {
		window.open(
			`https://www.google.com/maps/search/?api=1&query=${location.locationAddress.latitude}, ${location.locationAddress.longitude}`
		)
	}

	useEffect(() => {
		const fetchProducts = async () => {
			const { locationsWeekdays } = await request(
				`https://api-eu-west-2.hygraph.com/v2/${process.env.REACT_APP_API_KEY}/master`,
				`
		  {
			locationsWeekdays {
				id
				locationDay
				locationName
				locationStartTime
				locationEndTime
				locationDayNumber
				locationAddress {
				  latitude
				  longitude
				}
			}
		  }
		`
			)
			setLocationsWeekdays(locationsWeekdays)
		}

		fetchProducts()
		getCurrentDay(isCurrentDay)
		// eslint-disable-next-line
	}, [])

	return (
		<section id='locations' className='locations'>
			<div className='container'>
				<div className='row heading'>
					<div className='subheader'>
						<h4>Locations</h4>
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
				<div className='row wrap locations'>
					{locationsWeekdays &&
						locationsWeekdays.map((location) => {
							return (
								<div className='card col' key={location.id}>
									<div className='card-location'>
										<div className='card-header location'>
											<h5
												className={
													isCurrentDay === location.locationDayNumber
														? 'active'
														: ''
												}
											>
												{location.locationDay}
											</h5>
											<i
												className={`fas fa-map-marker-alt ${
													isCurrentDay === location.dayId ? 'active' : ''
												}`}
											></i>
										</div>
										<div className='card-content'>
											<div className='card-list-items location'>
												<ul>
													<li>
														<div className='list-address-heading'>
															<p>Address:</p>{' '}
														</div>
														<div className='list-address'>
															<p>{location.locationName}</p>
														</div>
													</li>
													<li>
														<div className='list-time-heading'>
															<p>Time:</p>
														</div>
														<div className='list-time'>
															<p>
																{location.locationStartTime} -{' '}
																{location.locationEndTime}
															</p>
														</div>
													</li>
												</ul>
											</div>
										</div>
										<div
											className='card-map-wrapper'
											onClick={() => openLocationMap(location)}
										>
											<div id={location.id} className='card-location-map'>
												<MapContainer
													center={[
														location.locationAddress.latitude,
														location.locationAddress.longitude,
													]}
													zoom={13}
													scrollWheelZoom={false}
													zoomControl={false}
													dragging={false}
													doubleClickZoom={false}
													boxZoom={false}
													tap={false}
													touchZoom={false}
													closePopupOnClick={false}
													keyboard={false}
													attributionControl={false}
												>
													<TileLayer
														attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
														url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
													/>
													<Marker
														position={[
															location.locationAddress.latitude,
															location.locationAddress.longitude,
														]}
														icon={GetIcon(40)}
													></Marker>
												</MapContainer>
											</div>
										</div>
									</div>
								</div>
							)
						})}
				</div>
			</div>
		</section>
	)
}
