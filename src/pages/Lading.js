import { useNavigate } from "react-router-dom";

const LadingPage = () => {
	const navigate = useNavigate();

	const onMovePagination = () => {
		navigate("/main");
	};

	const onMoveInfinite = () => {
		navigate("/infinite");
	};

	return (
		<>
			<button onClick={onMovePagination}>Pagination</button>
			<button onClick={onMoveInfinite}>Infinite Scroll</button>
		</>
	);
};
export default LadingPage;
