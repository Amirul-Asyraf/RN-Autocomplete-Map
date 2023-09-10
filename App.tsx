import { store } from "./src/app/store";
import { Provider } from "react-redux";
import MainPage from "./src/screens/MainPage";

export default function App() {
	return (
		<Provider store={store}>
			<MainPage />
		</Provider>
	);
}
