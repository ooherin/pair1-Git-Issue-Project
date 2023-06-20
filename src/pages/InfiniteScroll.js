import { useInfiniteQuery } from "@tanstack/react-query";
import IssueApi from "apis/issue";
import React, { useEffect, useCallback, useRef } from "react";
import Loading from "components/Loading";
import OneIssue from "./OneIssue";
import { useNavigate } from "react-router-dom";

const InfinitePage = () => {
	const observerElem = useRef(null);
	const navigate = useNavigate();

	const fetchIssue = async page => {
		const res = await IssueApi.getIssue("angular", "angular-cli", page);
		const result = res.data;
		console.log("infinite scroll", result);
		return result;
	};

	const {
		status,
		data,
		isSuccess,
		hasNextPage,
		fetchNextPage,
		isFetchingNextPage,
	} = useInfiniteQuery(
		["Issues"],
		({ pageParam = 1 }) => fetchIssue(pageParam),
		{
			getNextPageParam: (lastPage, allPages) => {
				const nextPage = allPages.length + 1;
				//lastPage에는 데이터가 담김.
				// console.log("nextPage", nextPage); => 2
				return nextPage > lastPage.length ? undefined : nextPage;
				// return lastPage.items.length !== 0 ? nextPage : undefined;
			},
		},
	);

	const handleObserver = useCallback(
		entries => {
			console.log("entries", entries);
			const [target] = entries;
			if (target.isIntersecting && hasNextPage) {
				fetchNextPage();
			}
		},
		[fetchNextPage, hasNextPage],
	);

	useEffect(() => {
		const element = observerElem.current;
		if (!element) return;
		const option = { threshold: 0 };
		const observer = new IntersectionObserver(handleObserver, option);
		observer.observe(element);
		return () => observer.unobserve(element);
	}, [fetchNextPage, hasNextPage, handleObserver]);

	if (status === "loading") {
		return <Loading />;
	}
	if (status === "error") {
		return <h3>잘못된 데이터 입니다.</h3>;
	}
	// 각 issue 상세페이지 연결
	const onNavigateDetailPage = issueId => {
		navigate(`/${issueId}`);
	};

	return (
		<div>
			{isSuccess &&
				data.pages.map(page => {
					return page.map(item => {
						return (
							<OneIssue
								issue={item}
								key={item.id}
								onNavigate={() => onNavigateDetailPage(item.number)}
							/>
						);
					});
				})}
			<div className="loader" ref={observerElem}>
				{isFetchingNextPage && hasNextPage ? "Loading..." : "No search left"}
			</div>
		</div>
	);
};

export default InfinitePage;
