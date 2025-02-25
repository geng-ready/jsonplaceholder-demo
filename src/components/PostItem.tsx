import type React from "react";
import type { Post } from "../types/Post";

interface PostItemProps {
	post: Post;
	onSelect: (post: Post) => void;
}

const PostItem: React.FC<PostItemProps> = ({ post, onSelect }) => {
	return (
		<div className="post-item" onClick={() => onSelect(post)}>
			<h3>{post.title}</h3>
			<p className="post-excerpt">{post.body.substring(0, 100)}...</p>
			<button className="read-more-btn">Read More</button>
		</div>
	);
};

export default PostItem;
