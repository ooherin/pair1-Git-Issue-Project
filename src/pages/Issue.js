import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import OneIssue from "./OneIssue";
import FilterBox from "components/FilterBox";
import { useNavigate } from "react-router-dom";
import Loading from "components/Loading";
import Pagination from "components/Pagination";
import { getIssue } from "reducer/issue";
import { useSearchParams } from "react-router-dom";

const Issue = () => {
	const dispatch = useDispatch();
	const issueList = useSelector(state => state.issue.issues);
	const { loading } = useSelector(state => state.issue.getIssueState);
	const navigate = useNavigate();
	const [searchParams, setSearchParams] = useSearchParams();
	let perPage = searchParams.get("perPage") || 10;
	let sort = searchParams.get("sort") || "updated_at";
	let page = searchParams.get("currentPage") || 1;

	//쿼리스트링의 변수가 바뀔 때마다 렌더링함.
	//에러핸들링 : 현재페이지가 마지막 페이지보다 큰 수일때 마지막 페이지로 연결
	useEffect(() => {
		const lastPage = Math.ceil(200 / perPage);
		if (lastPage < page) {
			page = lastPage;
			return navigate(
				`/main?currentPage=${lastPage}&sort=${sort}&perPage=${perPage}`,
			);
		}
		getIssueData();
	}, [page, sort, perPage]);

	const getIssueData = async () => {
		try {
			const res = await dispatch(
				getIssue({
					owner: "angular",
					repo: "angular-cli",
					page,
					perPage,
					sort,
				}),
			);
			console.log("getIssueData", res);
		} catch (err) {
			console.error(err);
		}
	};

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
						key={issue.id}
						onNavigate={() => onNavigateDetailPage(issue.number)}
					/>
				</>
			))}
			<Pagination />
		</div>
	);
};

export default Issue;
