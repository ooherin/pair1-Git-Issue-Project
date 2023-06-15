import { useSelector } from "react-redux";
import OneIssue from "./OneLissue";
import FilterBox from "components/FilterBox";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getIssue } from "reducer/issue";
const Issue = () => {
	const dispatch = useDispatch();
	let issueList = useSelector(state => state.issue.issues);
	//첫페이지에서 렌더링이 안될때
	useEffect(() => {
		if (issueList.length > 0) {
			return;
		}
		const getIssueData = async () => {
			try {
				const res = await dispatch(
					getIssue({
						owner: "angular",
						repo: "angular-cli",
						page: 1,
						limit: 10,
					}),
				);
				console.log("getIssueData", res);
			} catch (err) {
				console.error(err);
			}
		};
		issueList = getIssueData();
		console.log("issueList", issueList);
	}, []);

	return (
		issueList.length > 0 && (
			<div>
				<FilterBox />
				{issueList.map(issue => (
					<OneIssue key={Math.floor(Math.random() * 10000)} issue={issue} />
				))}
			</div>
		)
	);
};

export default Issue;
