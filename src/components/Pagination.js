import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import theme from "styles/theme";
import { useSearchParams } from "react-router-dom";

//페이지네이션
const Pagination = () => {
	const navigate = useNavigate();

	//쿼리스트링 가져오기
	const [searchParams, setSearchParams] = useSearchParams();
	let perPage = searchParams.get("perPage") || 10;
	let sort = searchParams.get("sort") || "updated_at";
	let page = searchParams.get("currentPage") || 1;

	//현재 페이지 : 기본값은 쿼리스트링의 page, 없으면 1(1페이지)
	const [currentPage, setCurrentPage] = useState(page || 1);

	//현재페이지 그룹 : 1~10버튼 => 1(그룹) / 11~20 => 2(그룹)
	const [currentPageGroup, setCurrentPageGroup] = useState(
		page ? Math.ceil(page / 10) : 1,
	);

	//페이지네이션 변수
	const PagePerGroup = 10;
	const totalIssueCount = 200;
	const lastPageGroup = Math.ceil(totalIssueCount / perPage / PagePerGroup);
	const lastPage = Math.ceil(totalIssueCount / perPage);

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

	//양 끝 페이지로 이동(맨처음/ 맨끝)
	const onMoveEndPage = targetPage => {
		navigate(`/main?currentPage=${targetPage}&sort=${sort}&perPage=${perPage}`);
	};

	//해당 페이지로 url 이동
	const onMovePage = e => {
		const movePage = Number(e.target.innerText);
		navigate(`/main?currentPage=${movePage}&sort=${sort}&perPage=${perPage}`);
	};

	return (
		<S.Wrapper>
			<S.Container>
				<S.TextButton
					onClick={() => {
						onMoveEndPage(1);
					}}
				>
					맨처음
				</S.TextButton>
				<S.ArrowButton onClick={onMovePrevGroup}>{"<"}</S.ArrowButton>
				{Array(PagePerGroup)
					.fill()
					.map((_, index) => {
						const pageNumber = (currentPageGroup - 1) * 10 + index + 1;
						//마지막 페이지보다 pageNumber가 더 크면 (없는 페이지이면) 얼리 리턴
						if (pageNumber > lastPage) {
							return;
						}
						return (
							<S.Button
								onClick={onMovePage}
								key={Math.floor(Math.random() * 100000)}
								pageNumber={pageNumber}
								currentPage={currentPage}
							>
								{pageNumber}
							</S.Button>
						);
					})}
				<S.ArrowButton onClick={onMoveNextGroup}>{">"}</S.ArrowButton>
				<S.TextButton
					onClick={() => {
						onMoveEndPage(lastPage);
					}}
				>
					맨끝
				</S.TextButton>
			</S.Container>
		</S.Wrapper>
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
	margin: 0 auto;

	@media ${({ theme }) => theme.DEVICE.mobile} {
		padding: 0;
	}
`;

const Container = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	@media ${({ theme }) => theme.DEVICE.mobile} {
		flex-wrap: wrap;
		justify-content: center;
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

const S = {
	Wrapper,
	Container,
	Button,
	ArrowButton,
	TextButton,
};
