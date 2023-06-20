import Layout from "components/Layout";
import { createBrowserRouter } from "react-router-dom";
import IssueDetail from "pages/IssueDetail";
import LadingPage from "pages/Lading";
import Issue from "pages/Issue";
import InfiniteScroll from "pages/InfiniteScroll";

const router = createBrowserRouter([
	{
		element: <Layout />,
		children: [
			{
				path: "/",
				element: <LadingPage />,
				// children: [
				// 	{
				// 		path: "main",
				// 		elememt: <Issue />,
				// 	},
				// ],
			},
			{ path: "/infinite", element: <InfiniteScroll /> },
			{
				path: "/main",
				element: <Issue />,
			},
			{
				path: "/:issueId",
				element: <IssueDetail />,
			},
		],
	},
]);

export default router;
