import { store } from "./store";
import { Provider } from "react-redux";
import MainPage from "../screens/MainPage";

export default function App() {
	return (
		<Provider store={store}>
			<MainPage />
		</Provider>
	);
}
