import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/main/Main";
import Auth from "./components/auth/Auth";
import Header from "./components/header/Header";
import "./index.css";

function App() {
	return (
		<>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={<Main />} />
					<Route path="/auth" element={<Auth />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
