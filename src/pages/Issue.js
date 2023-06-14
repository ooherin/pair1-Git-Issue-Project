import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getIssue } from "reducer/issue";
import OneIssue from "./OneLissue";
import FilterBox from "components/FilterBox";

const Issue = () => {
	const dispatch = useDispatch();
	const issueList = useSelector(state => state.issue.issues);
	const [page, setPage] = useState(1);
	const [limit, setLimit] = useState(10);

	useEffect(() => {
		const getIssueData = async () => {
			try {
				dispatch(
					getIssue({ owner: "angular", repo: "angular-cli", page, limit }),
				);
			} catch (err) {
				console.error(err);
			}
		};
		getIssueData();
	}, []);

	return (
		<div>
			<FilterBox />
			{issueList.map(issue => (
				<OneIssue issue={issue} />
			))}
		</div>
	);
};

export default Issue;
