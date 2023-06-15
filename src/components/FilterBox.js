import styled from "styled-components";
import { Shadow } from "styles/common";
import { useNavigate } from "react-router-dom";
const FilterBox = () => {
	const navigate = useNavigate();
	let url = new URL(window.location.href);
	const params = new URLSearchParams(url.search);

	//클릭한 옵션으로 콘텐츠 정렬
	const onChangeSortOption = e => {
		const sortValue = e.target.value;
		//해당 key값의 params을 sortValue로 바꿈
		params.set("sort", sortValue);
		url.search = params.toString();
		console.log("search", url.search);
		navigate(`main${url.search}`);
	};

	//클릭한 옵션으로 페이지 당 콘텐츠 보여줌
	const onChangePerPageOption = e => {
		const perPageValue = e.target.value;
		//해당 key값의 params을 sortValue로 바꿈
		params.set("perPage", perPageValue);
		url.search = params.toString();
		navigate(`main${url.search}`);
	};

	return (
		<S.Box>
			<S.Wrapper>
				<S.SelectBox onChange={onChangeSortOption}>
					<option value="updated_at">업데이트순</option>
					<option value="created_at">최신순</option>
					<option value="comments">댓글순</option>
				</S.SelectBox>
				<S.SelectBox onChange={onChangePerPageOption}>
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
