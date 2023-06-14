import { useSelector } from "react-redux";
import OneIssue from "./OneLissue";
import FilterBox from "components/FilterBox";
import { useDispatch } from "react-redux";
const Issue = () => {
	const dispatch = useDispatch();
	let issueList = useSelector(state => state.issue.issues);

	console.log("issueList", issueList);

	//첫페이지에서 렌더링이 안될때
	// useEffect(() => {
	// 	if (issueList.length > 0) {
	// 		return;
	// 	}
	// 	const getIssueData = async (page = 1, limit = 10) => {
	// 		try {
	// 			res = await dispatch(
	// 				getIssue({ owner: "angular", repo: "angular-cli", page, limit }),
	// 			);
	// 		} catch (err) {
	// 			console.error(err);
	// 		}
	// 	};
	// 	issueList = getIssueData();
	// 	console.log("issueList", issueList);
	// }, []);

	return (
		issueList.length > 0 && (
			<div>
				<FilterBox />
				{issueList.map(issue => (
					<OneIssue issue={issue} />
				))}
			</div>
		)
	);
};

export default Issue;
