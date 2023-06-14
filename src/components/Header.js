import styled from "styled-components";
import { flexCenter } from "styles/common";

const Header = () => {
	return <S.IssueHeader>Github API를 활용한 Issue 조회하기</S.IssueHeader>;
};

export default Header;

const IssueHeader = styled.div`
	width: 100%;
	height: 80px;
	color: #fff;
	background-color: ${({ theme }) => theme.PALETTE.background};
	font-weight: bold;
	${flexCenter}
	margin-bottom: 60px;

	@media ${({ theme }) => theme.DEVICE.pc} {
		max-width: 1024px;
	}

	@media ${({ theme }) => theme.DEVICE.tablet} {
		max-width: 768px;
	}
`;

const S = {
	IssueHeader,
};
