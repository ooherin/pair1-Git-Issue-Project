import Loading from "components/Loading";
import { useEffect } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getOneIssue } from "reducer/issue";
import styled from "styled-components";
import { Shadow, flexColumn } from "styles/common";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import Comment from "./Comment";

const IssueDetail = () => {
	const dispatch = useDispatch();
	const oneIssue = useSelector(state => state.issue.oneIssue);
	const { loading } = useSelector(state => state.issue.getOneIssueState);
	const { issueId } = useParams();

	console.log("oneIssue", oneIssue);
	console.log("oneIssue labels", oneIssue.labels);

	useEffect(() => {
		const getOneIssueDate = async () => {
			try {
				dispatch(
					getOneIssue({
						owner: "angular",
						repo: "angular-cli",
						issueId,
					}),
				);
			} catch (err) {
				console.error(err);
			}
		};
		getOneIssueDate();
	}, [issueId, dispatch]);

	if (loading) return <Loading />;
	return (
		<>
			<S.Box>
				<S.Wrapper>
					<S.Container>
						<p>#{oneIssue.number}</p>
						<p>{oneIssue.title}</p>
						<S.LabelsWrapper>
							{oneIssue.labels && oneIssue.labels.length !== 0 && (
								<S.LabelsContainer>
									{oneIssue.labels.map((label, idx) => (
										<S.Labels key={idx} color={label.color}>
											{label.name}
										</S.Labels>
									))}
								</S.LabelsContainer>
							)}
						</S.LabelsWrapper>
					</S.Container>
					<S.AvatarBox>
						<S.Avatar src={oneIssue.user?.avatar_url} />
						<S.Name>{oneIssue.user?.login}</S.Name>
					</S.AvatarBox>
					<S.Body>
						<ReactMarkdown
							children={oneIssue.body}
							remarkPlugins={[remarkGfm]}
							rehypePlugins={[rehypeRaw]}
						/>
					</S.Body>
				</S.Wrapper>
			</S.Box>
			{/*댓글 컴포넌트*/}
			{oneIssue.comments > 0 ? (
				<Comment issueId={issueId} />
			) : (
				<S.Wrapper>댓글이 없습니다.</S.Wrapper>
			)}
		</>
	);
};
export default IssueDetail;

const Box = styled.div`
	margin: 0px 10px 50px 10px;
`;

const Wrapper = styled.div`
	background: #fff;
	max-width: 1024px;
	margin: 0px auto;
	padding: 20px;
	${flexColumn}
	align-items: center;
	${Shadow}

	transition: transform 0.3s ease;

	:hover {
		transform: translateY(-5px);
	}

	p {
		width: 100%;
		margin-bottom: 20px;
	}
`;
const Name = styled.div`
	font-weight: 600;
`;
const Container = styled.div`
	width: 100%;
	padding-bottom: 35px;
	border-bottom: 5px solid #ebebeb;
	margin-bottom: 30px;
	text-align: center;
	p:first-of-type {
		font-size: 20px;
		font-weight: bold;
		margin-bottom: 20px;
	}

	p {
		font-size: 18px;
	}

	@media ${({ theme }) => theme.DEVICE.tablet} {
		padding-bottom: 25px;
	}
`;

const AvatarBox = styled.div`
	width: 100%;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	margin-bottom: 30px;
`;

const Avatar = styled.img`
	width: 46px;
	margin-right: 10px;
	border-radius: 50%;
`;

const Body = styled.p`
	word-break: break-all;
	line-height: 1.25rem;
	h2 {
		margin: 20px 0;
		font-size: 18px;
		font-weight: bold;
	}
	p {
		padding: 10px 0;
		width: 100%;
	}

	ul {
		margin: 20px 0;
	}
`;

const LabelsWrapper = styled.div`
	display: flex;
	justify-content: center;
`;

const LabelsContainer = styled.div`
	display: flex;
	justify-content: center;

	@media ${({ theme }) => theme.DEVICE.tablet} {
		flex-direction: column;
		align-items: center;
	}
`;

const Labels = styled.span`
	border-radius: 20px;
	padding: 2px 10px 4px;
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
	font-size: 14px;
	font-weight: 600;

	@media ${({ theme }) => theme.DEVICE.tablet} {
		margin-bottom: 10px;
	}
`;

const S = {
	Box,
	Wrapper,
	Container,
	AvatarBox,
	Avatar,
	Body,
	LabelsWrapper,
	LabelsContainer,
	Labels,
	Name,
};
