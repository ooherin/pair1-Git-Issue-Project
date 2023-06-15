import Issue from "pages/Issue";
import Layout from "components/Layout";
import { createBrowserRouter } from "react-router-dom";
import IssueDetail from "pages/IssueDetail";

const router = createBrowserRouter([
	{
		element: <Layout />,
		children: [
			{
				path: "/",
				element: <Issue />, // 메인페이지
			},
			{
				path: "/:issueId",
				element: <IssueDetail />,
			},
		],
	},
]);

export default router;
