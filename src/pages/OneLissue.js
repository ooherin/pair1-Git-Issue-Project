import styled from "styled-components";
import { Shadow, omitText } from "styles/common";

// OneIssue
const OneIssue = ({ issue }) => {
	return (
		<S.Box>
			<S.Wrapper>
				<S.Container>
					<div>
						<p>{issue.number}</p>
						<S.title>{issue.title}</S.title>
						<S.Comment>comments : {issue.comments}</S.Comment>
					</div>
					<div>
						<S.Content>{issue.body}</S.Content>
						<p>{issue.user.login}</p>
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
const title = styled.p`
	${omitText}
	padding: 0 20px;

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
	width: 80%;
	${omitText}
`;

const S = {
	Box,
	Wrapper,
	Container,
	title,
	Comment,
	Content,
};
