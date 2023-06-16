import styled from "styled-components";
import { Shadow } from "styles/common";
import { useSearchParams } from "react-router-dom";
const FilterBox = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const perPage = searchParams.get("perPage") || 10;
	const sort = searchParams.get("sort") || "updated_at";

	//sort(정렬) 필터
	const onChangeSortOption = e => {
		const sortValue = e.target.value;
		searchParams.set("sort", sortValue);
		setSearchParams(searchParams);
	};

	//perPage 필터
	const onChangePerPageOption = e => {
		const perPageValue = e.target.value;
		searchParams.set("perPage", perPageValue);
		setSearchParams(searchParams);
	};

	return (
		<S.Box>
			<S.Wrapper>
				<S.SelectBox onChange={onChangeSortOption} value={sort}>
					<option value="updated_at">업데이트순</option>
					<option value="created_at">최신순</option>
					<option value="comments">댓글순</option>
				</S.SelectBox>
				<S.SelectBox onChange={onChangePerPageOption} value={perPage}>
					<option value="10">10개씩</option>
					<option value="20">20개씩</option>
					<option value="50">50개씩</option>
				</S.SelectBox>
			</S.Wrapper>
		</S.Box>
	);
};

export default FilterBox;

const Box = styled.div`
	margin: 0 10px;
`;

const Wrapper = styled.div`
	max-width: 1024px;
	margin: 0 auto;
	margin-bottom: 30px;

	@media ${({ theme }) => theme.DEVICE.pc} {
		max-width: 1024px;
	}
`;

const SelectBox = styled.select`
	padding: 10px;
	margin-right: 20px;
	border: none;
	${Shadow}
`;

const S = {
	Box,
	Wrapper,
	SelectBox,
};
