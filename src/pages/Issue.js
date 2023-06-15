import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import OneIssue from "./OneIssue";
import FilterBox from "components/FilterBox";
import { useNavigate } from "react-router-dom";
import Loading from "components/Loading";
import Pagination from "components/Pagination";
import { getIssue } from "reducer/issue";

const Issue = () => {
	const dispatch = useDispatch();
	const issueList = useSelector(state => state.issue.issues);
	const { loading } = useSelector(state => state.issue.getIssueState);
	const navigate = useNavigate();

	const url = new URL(window.location.href);
	const urlPage = url.searchParams.get("currentPage") || 1;
	const urlSort = url.searchParams.get("sort") || 10;
	const urlPerPage = url.searchParams.get("perPage") || "updated";

	//의존성 배열에 url이 아니라 urlPage를 넣어주어야 함
	//url을 넣어주면 url은 useEffect내에서 바뀌지 않으므로 무한 렌더링 발생
	useEffect(() => {
		if (issueList.length === 0) {
			getIssueData(1, 10);
		} else {
			getIssueData(urlPage, urlPerPage, urlSort);
		}
	}, [urlPage, urlSort, urlPerPage]);

	const getIssueData = async (page, perPage) => {
		try {
			const res = await dispatch(
				getIssue({
					owner: "angular",
					repo: "angular-cli",
					page: page,
					limit: perPage,
					filter: urlSort,
				}),
			);
			console.log("getIssueData", res);
		} catch (err) {
			console.error(err);
		}
	};

	console.log("issueList", issueList);
	console.log("loading", loading); // 로딩 상태 확인

	// 각 issue 상세페이지 연결
	const onNavigateDetailPage = issueId => {
		navigate(`/${issueId}`);
	};

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
