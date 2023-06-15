import Issue from "pages/Issue";
import Layout from "components/Layout";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
	{
		element: <Layout />,
		children: [
			{
				path: "/",
				element: <Issue />,
				children: [
					{
						path: "main",
						elememt: <Issue />,
					},
				],
			},
		],
	},
]);

export default router;
