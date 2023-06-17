import styled from "styled-components";
import { Shadow, omitText } from "styles/common";
import { MdOutlineChatBubbleOutline } from "react-icons/md";
import { MdOutlineWatchLater } from "react-icons/md";
import { GoIssueOpened } from "react-icons/go";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

// OneIssue
const OneIssue = ({ issue, onNavigate }) => {
	const updatedAt = new Intl.DateTimeFormat().format(
		new Date(issue.updated_at),
	);
	const createdAt = new Intl.DateTimeFormat().format(
		new Date(issue.created_at),
	);
	return (
		<S.Box>
			<S.Wrapper onClick={onNavigate}>
				<S.Container>
					<S.Flex>
						<S.Number>#{issue.number}</S.Number>
						<S.Title>
							<ReactMarkdown
								children={issue.title}
								remarkPlugins={[remarkGfm]}
								rehypePlugins={[rehypeRaw]}
							/>
						</S.Title>
						<S.UserContainer>
							<S.Avatar src={issue.user?.avatar_url} />
							{/* <S.Name>{issue.user?.login}</S.Name> */}
						</S.UserContainer>
					</S.Flex>
					<div>
						{issue.labels.length === 0 ? null : (
							<S.LabelsContainer>
								{issue.labels.map((label, idx) => (
									<S.Labels key={idx} color={label.color}>
										{label.name}
									</S.Labels>
								))}
							</S.LabelsContainer>
						)}
					</div>
					<S.Flex>
						<S.Days>
							<p>
								<MdOutlineWatchLater sie={16} /> updated {updatedAt}
							</p>
							<p>
								<GoIssueOpened size={16} />
								opened on {createdAt}
							</p>
						</S.Days>
						<S.Comment>
							<MdOutlineChatBubbleOutline size={20} />
							<span>{issue.comments}</span>
						</S.Comment>
					</S.Flex>
				</S.Container>
			</S.Wrapper>
		</S.Box>
	);
};

export default OneIssue;

const Flex = styled.div`
	display: flex;
	position: relative;
`;

const Name = styled.div`
	width: 200px;
	border-radius: 5px;
	width: 100px;
	padding-top: 10px;
	padding-left: 10px;
`;

const UserContainer = styled.div`
	font-weight: 600;
	width: 50px;
	display: block;
`;

const Box = styled.div`
	margin: 0 10px;
`;

const Avatar = styled.img`
	width: 50px;
	border-radius: 50%;
`;

const Wrapper = styled.div`
	background-color: #fff;
	margin: 0 auto;
	max-width: 1024px;
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
		margin-bottom: 30px;

		@media ${({ theme }) => theme.DEVICE.tablet} {
			flex-direction: column;
			margin-bottom: 20px;
		}
	}

	div:last-of-type {
		margin: 0;
		justify-content: flex-start;
	}
`;

const Number = styled.p`
	font-weight: 600;
	color: ${({ theme }) => theme.PALETTE.fontColor.grey};
`;

const Title = styled.p`
	${omitText}
	padding: 0 20px;
	font-weight: 700;
	height: 50px;
	margin-right: 30px;

	@media ${({ theme }) => theme.DEVICE.pc} {
		text-align: center;
		width: 75%;
	}
	@media ${({ theme }) => theme.DEVICE.tablet} {
		text-align: inherit;
		padding: 10px 0;
		width: 100%;
	}
	@media ${({ theme }) => theme.DEVICE.mobile} {
		padding: 0;
	}
`;

const Comment = styled.p`
	display: flex;
	align-items: flex-end;
	position: absolute;
	right: 60px;
	bottom: 10px;

	span {
		margin-left: 6px;
	}
`;

const Content = styled.p`
	width: 100%;
	${omitText}
`;

const LabelsContainer = styled.div`
	width: 100%;

	@media ${({ theme }) => theme.DEVICE.tablet} {
		align-items: flex-start;
	}
`;

const Labels = styled.span`
	border-radius: 20px;
	padding: 2px 10px;
	margin-right: 6px;
	background: ${props => `#${props.color}`};
	color: ${({ color, theme }) =>
		color === "5319e7" ||
		color === "B0279B" ||
		color === "7028c1" ||
		color === "0e8a16" ||
		color === "b60205" ||
		color === "0052cc" ||
		color === "006b75"
			? theme.PALETTE.fontColor.white
			: theme.PALETTE.fontColor.dark};
	font-size: 12px;
	font-weight: 600;
	${omitText}

	@media ${({ theme }) => theme.DEVICE.tablet} {
		margin-bottom: 10px;
	}
`;

const Days = styled.div`
	justify-content: flex-end;

	p {
		margin-right: 8px;
		color: ${({ theme }) => theme.PALETTE.fontColor.grey};
		display: flex;
		align-items: center;
	}

	& svg {
		margin-right: 6px;
	}
`;

const S = {
	Box,
	Wrapper,
	Container,
	Number,
	Title,
	Comment,
	Content,
	LabelsContainer,
	Labels,
	Days,
	Flex,
	Avatar,
	UserContainer,
	Name,
};
