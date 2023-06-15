import styled from "styled-components";
import { Shadow, omitText } from "styles/common";

// OneIssue
const OneIssue = ({ issue, onNavigate }) => {
	const updatedAt = new Intl.DateTimeFormat().format(
		new Date(issue.updated_at),
	);
	return (
		<S.Box>
			<S.Wrapper onClick={onNavigate}>
				<S.Container>
					<div>
						<p>{issue.number}</p>
						<S.Title>{issue.title}</S.Title>
						<S.Comment>comments : {issue.comments}</S.Comment>
					</div>
					<div>
						<S.Content>{issue.body}</S.Content>
						<p>업데이트 날짜: {updatedAt}</p>
						<p>최신 순: {issue.created_at}</p>
					</div>
				</S.Container>
			</S.Wrapper>
		</S.Box>
	);
};

export default OneIssue;

const Box = styled.div`
	margin: 0 10px;
`;

const Wrapper = styled.div`
	background-color: #fff;
	margin: 0 auto;
	max-width: 1024px;
	margin: 0 auto;
	${Shadow}
	transition: transform 0.3s ease;

	:hover {
		transform: translateY(-5px);
	}
`;

const Container = styled.div`
	display: flex;
	justify-content: space-between;
	flex-direction: column;
	margin-bottom: 30px;
	padding: 30px;
	cursor: pointer;

	div {
		display: flex;
		justify-content: space-between;
		line-height: 1.5rem;
	}

	div:first-of-type {
		margin-bottom: 30px;
	}
`;
const Title = styled.p`
	${omitText}
	padding: 0 20px;
	font-weight: 700;

	@media ${({ theme }) => theme.DEVICE.pc} {
		text-align: center;
		width: 75%;
	}
	@media ${({ theme }) => theme.DEVICE.tablet} {
		padding: 0 50px;
		width: 70%;
	}
	@media ${({ theme }) => theme.DEVICE.mobile} {
		padding: 0;
		width: 40%;
	}
`;

const Comment = styled.p`
	/* @media ${({ theme }) => theme.DEVICE.tablet} {
		width: 70%;
	} */
`;

const Content = styled.p`
	width: 50%;
	${omitText}

	@media ${({ theme }) => theme.DEVICE.mobile} {
		width: 70%;
	}
`;

const S = {
	Box,
	Wrapper,
	Container,
	Title,
	Comment,
	Content,
};
