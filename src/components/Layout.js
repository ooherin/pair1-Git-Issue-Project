import { Outlet } from "react-router-dom";
import Header from "./Header";
import Pagination from "./Pagination";
import TopButton from "./TopBotton";
const Layout = () => {
	return (
		<>
			<Header />
			<TopButton />
			<Outlet />
			<Pagination />
		</>
	);
};

export default Layout;
