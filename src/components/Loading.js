import styled from "styled-components";

const Loading = () => {
	return (
		<S.Container>
			<S.Text>로딩중입니다 :)</S.Text>
			<S.Img
				src={`${process.env.PUBLIC_URL}/spinner.gif`}
				alt="로딩중 UI icon"
			/>
		</S.Container>
	);
};

export default Loading;

const Container = styled.div`
	position: absolute;
	width: 100vw;
	height: 100vh;
	top: 0;
	left: 0;
	z-index: 999;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const Img = styled.img`
	width: 200px;
`;
const Text = styled.div`
	font-size: 20px;
	font-weight: bold;
	text-align: center;

	@media ${({ theme }) => theme.DEVICE.mobile} {
		font-size: 16px;
	}
`;

const S = {
	Container,
	Text,
	Img,
};
