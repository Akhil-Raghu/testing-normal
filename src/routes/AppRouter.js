import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import About from '../pages/About/About';
import Solutions from '../pages/Solutions/Solutions';
import Layout from '../components/Layout/Layout';
import Connect from '../pages/Connect/Connect';
import Invest from '../pages/Invest/Invest';

const AppRouter = () => {
	return (
		<BrowserRouter>
			<Layout>
				<Routes>
					<Route path="/*" element={<HomePage />} />
					<Route path="/solutions" element={<Solutions />} />
					<Route path="/invest" element={<Invest />} />
					<Route path="/about" element={<About />} />
					<Route path="/connect" element={<Connect />} />
				</Routes>
			</Layout>
		</BrowserRouter>
	);
};

export default AppRouter;
