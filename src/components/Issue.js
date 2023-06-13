import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getIssue } from "reducer/issue";

const Issue = () => {
	const dispatch = useDispatch();
	const issueList = useSelector(state => state.issue.issues);

	useEffect(() => {
		const getIssueData = async () => {
			try {
				dispatch(getIssue({ owner: "angular", repo: "angular-cli" }));
			} catch (err) {
				console.error(err);
			}
		};
		getIssueData();
	}, []);

	return (
		<div>
			{issueList.map(issue => (
				<li>{issue.title}</li>
			))}
		</div>
	);
};

export default Issue;
