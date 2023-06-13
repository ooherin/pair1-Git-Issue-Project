import Issue from "components/Issue";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "store/store";

function App() {
	return (
		<Provider store={store}>
			<Issue />
		</Provider>
	);
}

export default App;
