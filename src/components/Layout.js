import { Outlet } from "react-router-dom";
import Header from "./Header";
import TopButton from "./TopBotton";
const Layout = () => {
	return (
		<>
			<Header />
			<TopButton />
			<Outlet />
		</>
	);
};

export default Layout;
