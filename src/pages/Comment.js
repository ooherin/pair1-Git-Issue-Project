import { useEffect, useState } from "react";
import IssueApi from "apis/issue";
import styled from "styled-components";
import { flexColumn } from "styles/common";
import { Shadow } from "styles/common";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { MdOutlineChatBubbleOutline } from "react-icons/md";
const Comment = ({ issueId }) => {
	const [comments, setComments] = useState([]);
	useEffect(() => {
		const getComment = async () => {
			try {
				const res = await IssueApi.getComment({
					owner: "angular",
					repo: "angular-cli",
					issueId,
				});
				setComments(res.data);
			} catch (err) {
				console.log(err);
			}
		};
		getComment();
	}, [issueId]);

	return (
		<S.Box>
			<S.Wrapper>
				<S.CommentTitle>
					<S.Flex>
						<MdOutlineChatBubbleOutline size={20} />
						<div>{comments.length} comments</div>
					</S.Flex>
				</S.CommentTitle>
				{comments.map(comment => {
					const createdAt = new Intl.DateTimeFormat().format(
						new Date(comment.created_at),
					);
					return (
						<S.OneComment comments={comments}>
							<S.FlexBetween>
								<S.CreateDate>작성일 : {createdAt}</S.CreateDate>
								<S.Relative>
									<S.AvatarBox>
										<S.Avatar src={comment.user?.avatar_url} />
										<span>{comment.user?.login}</span>
									</S.AvatarBox>
								</S.Relative>
							</S.FlexBetween>
							<S.Body>
								<ReactMarkdown
									children={comment.body}
									remarkPlugins={[remarkGfm]}
									rehypePlugins={[rehypeRaw]}
								/>
							</S.Body>
						</S.OneComment>
					);
				})}
			</S.Wrapper>
		</S.Box>
	);
};
export default Comment;

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

const Flex = styled.div`
	display: flex;
`;

const FlexBetween = styled.div`
	display: flex;
	justify-content: space-between;
	background-color: #ebebeb;
	height: 60px;
`;
const CommentTitle = styled.div`
	font-size: 20px;
	font-weight: 600;
	width: 100%;
	padding-bottom: 10px;
	div {
		margin: 0 10px;
	}
`;

const Body = styled.p`
	word-break: break-all;
	line-height: 1.25rem;
	padding-left: 10px;
	padding-right: 10px;
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
	img {
		width: 10px;
	}
`;

const CreateDate = styled.div`
	font-weight: 600;
	width: 500px;
	padding-top: 20px;
	padding-left: 10px;
`;
const AvatarBox = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	position: absolute;
	left: 0;
	padding-top: 5px;
`;
const Relative = styled.div`
	width: 160px;
	position: relative;
`;

const Avatar = styled.img`
	margin-right: 10px;
	border-radius: 50%;
	width: 46px;
`;

const OneComment = styled.div`
	width: 100%;
	padding-top: 20px;
	border: 0.18rem solid #ebebeb;
	margin: 10px 0;
	padding: 10px;
`;

const S = {
	Box,
	Wrapper,
	Body,
	AvatarBox,
	Avatar,
	OneComment,
	Flex,
	CommentTitle,
	FlexBetween,
	CreateDate,
	Relative,
};
