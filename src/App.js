import "./App.css";
import { Provider } from "react-redux";
import { store } from "store/store";
import GlobalStyles from "styles/global";
import { RouterProvider } from "react-router-dom";
import router from "routes/routing";
import { ThemeProvider } from "styled-components";
import theme from "styles/theme";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
function App() {
	const queryClient = new QueryClient();
	return (
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<QueryClientProvider client={queryClient}>
					<GlobalStyles />
					<RouterProvider router={router} />
				</QueryClientProvider>
			</ThemeProvider>
		</Provider>
	);
}

export default App;
