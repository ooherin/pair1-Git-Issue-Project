import Loading from "components/Loading";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getOneIssue } from "reducer/issue";
import styled from "styled-components";
import { Shadow, flexColumn } from "styles/common";

const IssueDetail = () => {
	const dispatch = useDispatch();
	const oneIssue = useSelector(state => state.issue.oneIssue);
	const { loading } = useSelector(state => state.issue.getOneIssueState);
	const { issueId } = useParams();

	console.log("oneIssue", oneIssue);

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
		<S.Box>
			<S.Wrapper>
				<S.Container>
					<p>#{oneIssue.number}</p>
					<p>{oneIssue.title}</p>
				</S.Container>
				<S.AvatarBox>
					<S.Avatar src={oneIssue.user?.avatar_url} />
					<span>{oneIssue.user?.login}</span>
				</S.AvatarBox>
				<S.Body>{oneIssue.body}</S.Body>
			</S.Wrapper>
		</S.Box>
	);
};
export default IssueDetail;

const Box = styled.div`
	margin: 0 10px;
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
`;

const S = {
	Box,
	Wrapper,
	Container,
	AvatarBox,
	Avatar,
	Body,
};
