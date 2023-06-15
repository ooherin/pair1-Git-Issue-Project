import { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getIssue } from "reducer/issue";
import theme from "styles/theme";

//페이지네이션
const Pagination = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	//현재페이지는 1
	//파라미터의 currentPage 가져오는 법
	const url = new URL(window.location.href);
	let urlPage = url.searchParams.get("currentPage");
	const [currentPage, setCurrentPage] = useState(urlPage);

	//렌더링 될떄마다 currentPage의 값을 변경시켜줌
	//처음에 url에 currentPage라는 쿼리스트링이 없다면 1로 currentPage를 설정함.
	useEffect(() => {
		if (!urlPage) {
			return setCurrentPage(1);
		}
		setCurrentPage(urlPage);
	}, [url]);
	//한페이지의 콘텐츠 개수
	const [limit, setLimit] = useState(10);

	// const [currentPage, setCurrentPage] = useState(1);
	//현재페이지 그룹 : 1~10버튼 => 1(그룹) / 11~20 => 2(그룹)
	const [currentPageGroup, setCurrentPageGroup] = useState(
		Math.ceil(urlPage / limit),
	);
	const PagePerGroup = 10;
	const totalIssueCount = 200;
	const lastPageGroup = Math.ceil(totalIssueCount / limit / PagePerGroup);
	const lastPage = Math.ceil(totalIssueCount / limit);

	//이전 버튼 그룹으로 이동(<)
	const onMovePrevGroup = () => {
		if (currentPageGroup === 1) {
			return;
		}
		return setCurrentPageGroup(currentPageGroup - 1);
	};

	//이전 버튼 그룹으로 이동(>)
	const onMoveNextGroup = () => {
		if (currentPageGroup === lastPageGroup) {
			return;
		}
		return setCurrentPageGroup(currentPageGroup + 1);
	};

	//맨 앞으로 이동(맨처음)
	const onMoveFirstPage = () => {
		navigate(`/main?currentPage=1`);
		// getIssueData(1);
		setCurrentPageGroup(1);
	};

	//맨 뒤로 이동(맨뒤)
	const onMoveLastPage = () => {
		navigate(`/main?currentPage=${lastPage}`);
		// getIssueData(lastPage);
		setCurrentPageGroup(lastPageGroup);
	};

	//해당 페이지의 issue데이터 요청
	const getIssueData = async page => {
		try {
			return dispatch(
				getIssue({ owner: "angular", repo: "angular-cli", page, limit }),
			);
		} catch (err) {
			console.error(err);
		}
	};

	//해당 페이지로 url 이동후 getIssueData함수로 데이터 요청
	const onMovePage = e => {
		// setCurrentPage(e.target.innerText);
		navigate(`/main?currentPage=${e.target.innerText}`);
		// getIssueData(e.target.innerText);
	};

	return (
		<Wrapper>
			<TextButton onClick={onMoveFirstPage}>맨처음</TextButton>
			<ArrowButton onClick={onMovePrevGroup}>{"<"}</ArrowButton>
			{Array(10)
				.fill()
				.map((_, index) => {
					const pageNumber = (currentPageGroup - 1) * 10 + index + 1;
					return (
						<Button
							onClick={onMovePage}
							key={Math.floor(Math.random() * 100000)}
							pageNumber={pageNumber}
							currentPage={currentPage}
						>
							{pageNumber}
						</Button>
					);
				})}
			<ArrowButton onClick={onMoveNextGroup}>{">"}</ArrowButton>
			<TextButton onClick={onMoveLastPage}>맨끝</TextButton>
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
	font-weight: ${props =>
		Number(props.currentPage) === Number(props.pageNumber) ? "700" : "300"};
	color: ${props =>
		Number(props.currentPage) === Number(props.pageNumber) ? "white" : "black"};
	background-color: ${props =>
		Number(props.currentPage) === Number(props.pageNumber)
			? `black`
			: `${theme.PALETTE.fontColor.white}`};
`;

const ArrowButton = styled.button`
	width: 30px;
	height: 30px;
	font-size: 14px;
	background-color: ${({ theme }) => theme.PALETTE.fontColor.white};
`;

const TextButton = styled.button`
	width: 50px;
	height: 30px;
	font-size: 12px;
	background-color: ${({ theme }) => theme.PALETTE.fontColor.white};
`;
