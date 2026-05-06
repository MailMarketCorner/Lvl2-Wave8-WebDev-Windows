import { useState } from "react";

import "./App.css";
import { Login } from "./components/login";

import { Navigate, Route, Routes } from "react-router-dom";
import CreatePost from "./components/post";

export const App = () => {
	const [loggedin, setLoggedin] = useState(false);
	console.log("loggedinState: " + loggedin);
	return (
		<>
			<Routes>
				<Route path="/" element={<Login setLoggedin={setLoggedin} />} />
				<Route
					path="/Post"
					element={loggedin ? <CreatePost /> : <Navigate to="/" />}
				/>
			</Routes>
		</>
	);
};

export default App;
