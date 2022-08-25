import Header from './components/Header'
import Menu from './components/Menu'
import Locations from './components/Locations'
import Reviews from './components/Reviews'
import Events from './components/Events'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
	return (
		<div className='App'>
			<Header />
			<main>
				<Menu />
				<Locations />
				<Reviews />
				<Events />
				<About />
				<Contact />
			</main>
			<Footer />
		</div>
	)
}

export default App
