import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { flexCenter } from "styles/common";

const Header = () => {
	const navigate = useNavigate();

	const onMoveMainPage = () => {
		navigate("/");
	};
	return (
		<>
			<S.IssueHeader onClick={onMoveMainPage}>
				<S.Logo src="/image/logo3.png" />
				<S.Title>Github API를 활용한 Issue 조회하기</S.Title>
			</S.IssueHeader>
		</>
	);
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
	cursor: pointer;

	@media ${({ theme }) => theme.DEVICE.pc} {
		max-width: 1024px;
	}

	@media ${({ theme }) => theme.DEVICE.tablet} {
		max-width: 768px;
	}
`;

const Logo = styled.img`
	width: 30px;
	filter: invert(100%);
`;

const Title = styled.div`
	padding-left: 20px;
	:hover {
		color: #660099;
		transition: scale(1.2);
	}
`;

const S = {
	IssueHeader,
	Logo,
	Title,
};
