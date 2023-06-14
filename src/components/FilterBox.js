import styled from "styled-components";
import { Shadow } from "styles/common";

const FilterBox = () => {
	// option별 onChange 함수
	return (
		<S.Box>
			<S.Wrapper>
				<S.SelectBox>
					<option value="업데이트순">업데이트순</option>
					<option value="최신순">최신순</option>
					<option value="댓글순">댓글순</option>
				</S.SelectBox>
				<S.SelectBox>
					<option value="10개씩">10개씩</option>
					<option value="20개씩">20개씩</option>
					<option value="50개씩">50개씩</option>
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
