import { Router, Route, Switch } from 'react-router-dom';

import './styles/App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import Feeds from './components/Feeds';
import Footer from './components/Footer';

function App() {
	return (
		<div className="app">
			<Router>
				<Header />
				<Banner />
				<Feeds />
				<Footer />
			</Router>
		</div>
	);
}

export default App;
