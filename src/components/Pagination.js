import { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import theme from "styles/theme";

//페이지네이션
const Pagination = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	//현재페이지는 1
	//파라미터의 currentPage 가져오는 법
	const url = new URL(window.location.href);
	let urlPage = url.searchParams.get("currentPage") || 1;
	let urlPerPage = url.searchParams.get("perPage") || 10;
	let urlSort = url.searchParams.get("sort") || "updated_at";
	const params = new URLSearchParams(url.search);
	const [currentPage, setCurrentPage] = useState(urlPage);

	//렌더링 될떄마다 currentPage의 값을 변경시켜줌
	//처음에 url에 currentPage라는 쿼리스트링이 없다면 1로 currentPage를 설정함.
	useEffect(() => {
		if (!urlPage) {
			return setCurrentPage(1);
		}
		setCurrentPage(urlPage);
	}, [url]);

	//현재페이지 그룹 : 1~10버튼 => 1(그룹) / 11~20 => 2(그룹)
	const [currentPageGroup, setCurrentPageGroup] = useState(
		urlPage ? Math.ceil(urlPage / 10) : 1,
	);
	const PagePerGroup = 10;
	const totalIssueCount = 200;
	const lastPageGroup = Math.ceil(totalIssueCount / urlPerPage / PagePerGroup);
	const lastPage = Math.ceil(totalIssueCount / urlPerPage);

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
		navigate(`/main?currentPage=1&sort=${urlSort}&perPage=${urlPerPage}`);
		// getIssueData(1);
		setCurrentPageGroup(1);
	};

	//맨 뒤로 이동(맨뒤)
	const onMoveLastPage = () => {
		navigate(
			`/main?currentPage=${lastPage}&sort=${urlSort}&perPage=${urlPerPage}`,
		);
		setCurrentPageGroup(lastPageGroup);
	};

	//해당 페이지로 url 이동
	const onMovePage = e => {
		const movePage = Number(e.target.innerText);
		params.set("currentPage", movePage);
		url.search = params.toString();
		navigate(`/main${url.search}`);
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
