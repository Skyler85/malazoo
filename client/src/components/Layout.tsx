import { Outlet } from 'react-router';
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
	return (
		<div className="w-[768px] h-screen text-center m-auto relative">
			<Header></Header>
			<Outlet></Outlet>
			<Footer></Footer>
		</div>
	);
};

export default Layout;
