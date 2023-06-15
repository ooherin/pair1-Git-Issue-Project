import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getIssue } from "reducer/issue";
import OneIssue from "./OneIssue";
import FilterBox from "components/FilterBox";
import { useNavigate } from "react-router-dom";
import Loading from "components/Loading";

const Issue = () => {
	const dispatch = useDispatch();
	const issueList = useSelector(state => state.issue.issues);
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

	if (loading) return <Loading />;
	return (
		<div>
			<FilterBox />
			{issueList.map(issue => (
				<>
					<OneIssue
						issue={issue}
						onNavigate={() => onNavigateDetailPage(issue.number)}
					/>
				</>
			))}
		</div>
	);
};

export default Issue;
