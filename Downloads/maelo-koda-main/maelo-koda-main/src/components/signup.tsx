import { useState } from "react";
type signType = {
	setSign: React.Dispatch<React.SetStateAction<boolean>>;
};
export const SignUp = ({ setSign }: signType) => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	return (
		<main className="self-center">
			<h4>Sign up!</h4>
			<form
				className="flex-col flex self-center "
				action="submit"
				onSubmit={(e) => {
					e.preventDefault();
					localStorage.setItem("username", username);
					localStorage.setItem("password", password);
				}}>
				<input
					autoComplete="off"
					className="bg-slate-800 outline-white text-slate-300 placeholder:text-slate-300 rounded-md pl-1"
					placeholder="username"
					value={username}
					name="username"
					onChange={(e) => setUsername(e.target.value)}
				/>
				<input
					autoComplete="off"
					className="bg-slate-800 outline-white mt-1 text-slate-300 placeholder:text-slate-300 rounded-md pl-1"
					placeholder="password"
					type="password"
					name="username"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>

				<button
					onClick={() => setSign(false)}
					className="cursor-pointer m-2 rounded-xl bg-slate-600 text-slate-300 border-2 border-black w-1/2 self-center"
					type="submit">
					submit
				</button>
			</form>
		</main>
	);
};
