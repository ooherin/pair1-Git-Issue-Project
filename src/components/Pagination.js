import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getIssue } from "reducer/issue";
//페이지네이션은 해당 버튼을 클릭하면 해당 페이지로 url를 바꿔주는 기능만함

const Pagination = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [currentPage, setCurrentPage] = useState(1);
	const [currentPageGroup, setCurrentPageGroup] = useState(1);
	//한페이지의 콘텐츠 개수
	const [limit, setLimit] = useState(10);
	const PagePerGroup = 10;
	const totalIssueCount = 200;
	const lastPageGroup = Math.ceil(totalIssueCount / limit / PagePerGroup);

	const onMovePrevGroup = () => {
		if (currentPageGroup === 1) {
			return;
		}
		return setCurrentPageGroup(currentPageGroup - 1);
	};

	const onMoveNextGroup = () => {
		if (currentPageGroup === lastPageGroup) {
			return;
		}
		return setCurrentPageGroup(currentPageGroup + 1);
	};

	const getIssueData = async page => {
		try {
			return dispatch(
				getIssue({ owner: "angular", repo: "angular-cli", page, limit }),
			);
		} catch (err) {
			console.error(err);
		}
	};

	const onMovePage = e => {
		setCurrentPage(e.target.innerText);
		navigate(`/mainPage?currentPage=${e.target.innerText}`);
		getIssueData(e.target.innerText);
	};

	return (
		<Wrapper>
			<TextButton>맨처음</TextButton>
			<Button onClick={onMovePrevGroup}>{"<"}</Button>
			{Array(10)
				.fill()
				.map((_, index) => {
					return (
						<Button onClick={onMovePage} key={Math.random() * 10000}>
							{(currentPageGroup - 1) * 10 + index + 1}
						</Button>
					);
				})}
			<Button onClick={onMoveNextGroup}>{">"}</Button>
			<TextButton>맨끝</TextButton>
		</Wrapper>
	);
};

export default Pagination;

const Wrapper = styled.div`
	width: 100%;
	height: 100px;
	display: flex;
	justify-content: center;
	align-items: center;
	button {
		margin: 4px;
	}
`;

const Button = styled.button`
	width: 30px;
	height: 30px;
	font-size: 14px;
`;

const TextButton = styled.button`
	width: 50px;
	height: 30px;
	font-size: 12px;
`;
