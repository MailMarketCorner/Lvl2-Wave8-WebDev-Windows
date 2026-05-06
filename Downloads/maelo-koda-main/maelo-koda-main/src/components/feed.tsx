import { mockPosts } from "../posts";
import type { Post } from "./post";

type FeedProps = {
	posts: Post[];
}

export const Feed = ({posts}: FeedProps) => {
	return (
		<div className="mt-8 flex flex-col gap-4">
			{posts.map((post) => {
				return (
					<div key={post.id} className="p-4 bg-slate-800 border border-slate-600 rounded-md text-left">
						<div className="flex justify-between border-b border-slate-600 pb-2 mb-2 text-xs text-slate-400">
							<span className="font-mono">ID: #{post.id}</span>
							<span>{post.timestamp}</span>
						</div>

						<p className="text-slate-300 whitespace-pre-wrap">
							{post.content}
						</p>
					</div>
				);		
			})}
		</div>
	);
};