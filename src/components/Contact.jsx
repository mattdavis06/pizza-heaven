export default function Contact() {
	return (
		<section id='contact' className='contact'>
			<div className='container'>
				<div className='row heading'>
					<div className='subheader'>
						<h4>Contact</h4>
					</div>
				</div>
				<div className='subheader-text dark'>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita
						asperiores repellat nulla ab magni fuga, labore voluptates molestiae
						alias? Quia!
					</p>
				</div>
				<div className='form-wrapper contact'>
					<form>
						<div className='row'>
							<div className='col'>
								<div className='form-control'>
									<div className='form-input contact'>
										<label htmlFor='name'>Name:</label>
										<input
											type='text'
											name='name'
											placeholder='Name'
											required
										/>
									</div>
									<div className='form-input contact'>
										<label htmlFor='email'>Email:</label>
										<input
											type='email'
											name='email'
											placeholder='Email'
											required
										/>
									</div>
									<div className='form-input contact'>
										<label htmlFor='msg'>Message:</label>
										<textarea
											name='msg'
											placeholder='Type your message here...'
										></textarea>
									</div>
									<div className='form-input contact' hidden>
										<label htmlFor='bot-field' hidden>
											Don't fill out if human:
										</label>
										<input
											name='bot-field'
											hidden
											placeholder='Type your message here...'
										></input>
									</div>
									<div className='form-input contact'>
										<label htmlFor='submit'></label>
										<input name='submit' type='submit' value='Send' />
									</div>
								</div>
							</div>
						</div>
					</form>
				</div>
			</div>
		</section>
	)
}
