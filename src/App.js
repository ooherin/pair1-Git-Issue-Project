import "./App.css";
import { Provider } from "react-redux";
import { store } from "store/store";
import GlobalStyles from "styles/global";
import { RouterProvider } from "react-router-dom";
import router from "routes/routing";
import { ThemeProvider } from "styled-components";
import theme from "styles/theme";

function App() {
	return (
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<GlobalStyles />
				<RouterProvider router={router} />
			</ThemeProvider>
		</Provider>
	);
}

export default App;
