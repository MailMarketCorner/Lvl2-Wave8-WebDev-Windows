import React, { useState } from "react";
import { mockPosts } from "../posts";
import { Feed } from "./feed";


/**Defining shape of data */
export interface Post {
	id: number;
	content: string;
	upvotes: number;
	timestamp: string;
}

const idGenerator = (existingId: number[] = []): number => {
	const newId = Math.floor((Math.random() + 1) * 1000000);
	if (existingId.includes(newId)) {
		return idGenerator(existingId);
	}
	return newId;
};

export default function CreatePost() {
	const [confession, setConfession] = useState("");
	const [submit, setSubmit] = useState(false);

	const [posts, setPosts] = useState<Post[]>(mockPosts);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log(!confession.trim());
		if (!confession.trim()) return;

		const currentIds = posts.map(post => post.id);

		const newPost: Post = {
			id: idGenerator(currentIds),
			content: confession,
			upvotes: 0,
			timestamp: new Date().toLocaleDateString(),
		};

		setPosts([newPost, ...posts]);
		
		setConfession("");
	};

	return (
		<div className="create-post-container">
			<h2>Share a Confession</h2>
			<p>
				Your identity will be completely <strong>hidden</strong>.
			</p>
			<form onSubmit={handleSubmit}>
				<textarea
					value={confession}
					onChange={(e) => setConfession(e.target.value)}
					placeholder="Confess what is on your mind..."
					rows={6}
					required
				/>

				<button
					onClick={() => setSubmit((prev) => !prev)}
					className="cursor-pointer"
					type="submit">
					submit
				</button>
			</form>
			<Feed posts={posts}/>
		</div>
	);
}
