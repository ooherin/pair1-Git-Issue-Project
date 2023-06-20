import { useNavigate } from "react-router-dom";
import styled from "styled-components";
const LadingPage = () => {
	const navigate = useNavigate();

	const onMovePagination = () => {
		navigate("/main");
	};

	const onMoveInfinite = () => {
		navigate("/infinite");
	};

	return (
		<>
			<Title>보기 방식을 선택해주세요</Title>
			<Wrapper>
				<Flex>
					<PaButton onClick={onMovePagination}>Pagination</PaButton>
					<Video src="/video/pagination_video.gif" />
				</Flex>
				<Flex>
					<InButton onClick={onMoveInfinite}>Infinite Scroll</InButton>
					<Video src="/video/infinite_video.gif" />
				</Flex>
			</Wrapper>
		</>
	);
};
export default LadingPage;

const PaButton = styled.button`
	width: 200px;
	height: 50px;
	font-size: 20px;
	margin-top: 30px;
	background-color: black;
	color: #999;
	:hover {
		transform: scale(1.1);
	}
`;
const Video = styled.img`
	width: 450px;
	margin-top: 20px;
`;
const Flex = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 50%;
`;

const InButton = styled.button`
	width: 200px;
	height: 50px;
	font-size: 20px;
	margin-top: 30px;
	:hover {
		transform: scale(1.1);
	}
`;
const Wrapper = styled.div`
	display: flex;
	margin-top: 100px;
	width: 80%;
	flex-wrap: wrap;
	justify-content: space-between;
	margin: 0 auto;
`;
const Title = styled.div`
	margin: 0 auto;
	font-size: 20px;
	font-weight: 500;
	text-align: center;
`;
