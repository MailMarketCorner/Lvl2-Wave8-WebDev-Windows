import { useState } from "react";
import { SignUp } from "./signup";
import { useNavigate } from "react-router-dom";

type loginType = {
	setLoggedin: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Login = ({ setLoggedin }: loginType) => {
	const navigate = useNavigate();

	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [sign, setSign] = useState(false);
	const userStorage = {
		username: localStorage.getItem("username"),
		password: localStorage.getItem("password"),
	};

	const handleSubmit = () => {
		if (
			username === userStorage.username &&
			password === userStorage.password
		) {
			setLoggedin(true);
			navigate("/Post");
		} else {
			alert("No account registered under that username and password");
			setUsername("");
			setPassword("");
		}
	};
	return (
		<main className="w-full">
			<div
				className="flex-col w-1/2 justify-self-center"
				style={{ display: sign ? "flex" : "none" }}>
				<SignUp setSign={setSign} />
			</div>
			<div
				className="flex-col w-1/2 justify-self-center"
				style={{ display: !sign ? "flex" : "none" }}>
				<h4>Log in!</h4>
				<form
					className="flex-col flex self-center"
					action="submit"
					onSubmit={(e) => {
						e.preventDefault();
						handleSubmit();
					}}>
					<input
						className="bg-slate-800 outline-white  text-slate-300 placeholder:text-slate-300 rounded-md pl-1"
						autoComplete="off"
						placeholder="username"
						value={username}
						name="username"
						onChange={(e) => setUsername(e.target.value)}
					/>
					<input
						className="bg-slate-800 outline-white mt-1 text-slate-300 placeholder:text-slate-300 rounded-md pl-1"
						autoComplete="off"
						placeholder="password"
						type="password"
						name="username"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<button
						className="cursor-pointer mt-2 rounded-xl bg-slate-600 text-slate-300 border-2 border-black w-1/2 self-center"
						type="submit">
						submit
					</button>
				</form>
				<h4 className="underline cursor-pointer" onClick={() => setSign(true)}>
					Dont have an account?{" "}
				</h4>
			</div>
		</main>
	);
};
