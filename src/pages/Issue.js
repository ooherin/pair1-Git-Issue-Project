import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getIssue } from "reducer/issue";
import OneIssue from "./OneIssue";
import FilterBox from "components/FilterBox";
import { useNavigate } from "react-router-dom";
import Loading from "components/Loading";
import Pagination from "components/Pagination";

const Issue = () => {
	const dispatch = useDispatch();
	let issueList = useSelector(state => state.issue.issues);
	const { loading } = useSelector(state => state.issue.getIssueState);
	const [page, setPage] = useState(1);
	const [limit, setLimit] = useState(10);
	const navigate = useNavigate();

	console.log("issueList", issueList);
	console.log("loading", loading); // 로딩 상태 확인

	// 각 issue 상세페이지 연결
	const onNavigateDetailPage = issueId => {
		navigate(`/${issueId}`);
	};

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

	if (loading) return <Loading />;
	return (
		<div>
			<FilterBox />
			{issueList.map(issue => (
				<>
					<OneIssue
						issue={issue}
						key={Math.floor(Math.random() * 10000)}
						onNavigate={() => onNavigateDetailPage(issue.number)}
					/>
				</>
			))}
			<Pagination />
		</div>
	);
};

export default Issue;
