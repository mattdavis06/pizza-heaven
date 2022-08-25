import { useState, useEffect } from 'react'
import { request } from 'graphql-request'
import LogoWhite from '../assets/logo/logo-white.svg'

export default function Footer() {
	const [socialMediaDetail, setSocialMediaDetail] = useState(null)
	const [companyInformations, setCompanyInfomations] = useState(null)

	useEffect(() => {
		const fetchProducts = async () => {
			const { socialMediaDetail, companyInformations } = await request(
				`https://api-eu-west-2.hygraph.com/v2/${process.env.REACT_APP_API_KEY}/master`,
				`
				{
					socialMediaDetail {
						id
						socialMediaIcon
						socialMediaLink
						socialMediaTitle
					}
					companyInformations {
						id
						companyName
						companyAddress1
						companyAddress2
						companyAddress3
						companyCity
						companyCounty
						companyPostcode
						companyEmail
						companyMobile
						companyTelephone
					}

				}
			`
			)
			setSocialMediaDetail(socialMediaDetail)
			setCompanyInfomations(companyInformations)
		}

		fetchProducts()
		// eslint-disable-next-line
	}, [])

	return (
		<footer>
			<div className='container'>
				<div className='footer-wrapper'>
					<div className='row'>
						<div className='col'>
							<div className='footer-logo'>
								<div className='brand-logo footer'>
									<a href='#header'>
										<img src={LogoWhite} alt='brand-logo' />
										{/* <a href='https://www.freepik.com/vectors/pizzeria'>Pizzeria vector created by winkimages - www.freepik.com</a> */}
									</a>
								</div>
							</div>
						</div>
						<div className='col'>
							<div className='footer-links'>
								<ul>
									<li>
										<a href='#pizzas'>Pizzas</a>
									</li>
									<li>
										<a href='#locations'>Locations</a>
									</li>
									<li>
										<a href='#reviews'>Reviews</a>
									</li>
									<li>
										<a href='#about'>About</a>
									</li>
									<li>
										<a href='#contact'>Contact</a>
									</li>
								</ul>
							</div>
						</div>
						<div className='col'>
							<div className='footer-social-links'>
								{socialMediaDetail &&
									socialMediaDetail.map((socialMediaDetail) => {
										return (
											<div
												key={socialMediaDetail.id}
												className={`social-link ${socialMediaDetail.socialMediaTitle}`}
											>
												<i
													className={`fab ${socialMediaDetail.socialMediaIcon}`}
												></i>
											</div>
										)
									})}
							</div>
							<div className='footer-contact'>
								{companyInformations &&
									companyInformations.map((companyInfomation) => {
										return (
											<div key={companyInfomation.id}>
												<address className='contact-address'>
													{companyInfomation.companyAddress1 !== '' ? (
														<p>{companyInfomation.companyAddress1}</p>
													) : (
														''
													)}
													{companyInfomation.companyAddress2 !== '' ? (
														<p>{companyInfomation.companyAddress2}</p>
													) : (
														''
													)}
													{companyInfomation.companyAddress3 !== '' ? (
														<p>{companyInfomation.companyAddress3}</p>
													) : (
														''
													)}
													{companyInfomation.companyCity !== '' ? (
														<p>{companyInfomation.companyCity}</p>
													) : (
														''
													)}
													{companyInfomation.companyCounty !== '' ? (
														<p>{companyInfomation.companyCounty}</p>
													) : (
														''
													)}
													{companyInfomation.companyPostcode !== '' ? (
														<p>{companyInfomation.companyPostcode}</p>
													) : (
														''
													)}
												</address>
												<div className='contact-tel'>
													<p>
														<a
															href={`tel: ${companyInfomation.companyTelephone}`}
														>
															{companyInfomation.companyTelephone}
														</a>
													</p>
												</div>
												<div className='contact-email'>
													<p>
														<a
															href={`mailto: ${companyInfomation.companyEmail}`}
														>
															{companyInfomation.companyEmail}
														</a>
													</p>
												</div>
											</div>
										)
									})}
							</div>
						</div>
					</div>
					<div className='copyright-wrapper'>
						<div className='copyright-text'>
							<small>
								<span> &copy; Copyright {new Date().getFullYear()}&nbsp;</span>
								{companyInformations &&
									companyInformations.map((companyInformations) => {
										return companyInformations.companyName
									})}
							</small>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}
