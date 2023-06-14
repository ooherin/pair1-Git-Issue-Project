import { Outlet } from "react-router-dom";
import Header from "./Header";
import Pagination from "./Pagination";
const Layout = () => {
	return (
		<>
			<Header />
			<Outlet />
			<Pagination />
		</>
	);
};

export default Layout;
