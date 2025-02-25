import type React from "react";
import { useEffect, useState } from "react";
import { fetchPostById } from "../services/api";
import type { Post } from "../types/Post";

interface PostDetailProps {
	postId: number | null;
	onBack: () => void;
}

const PostDetail: React.FC<PostDetailProps> = ({ postId, onBack }) => {
	const [post, setPost] = useState<Post | null>(null);
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		if (!postId) return;

		const loadPost = async () => {
			try {
				setLoading(true);
				const fetchedPost = await fetchPostById(postId);
				setPost(fetchedPost);
				setError(null);
			} catch (err) {
				setError("Failed to fetch post details. Please try again later.");
				console.error(err);
			} finally {
				setLoading(false);
			}
		};

		loadPost();
	}, [postId]);

	if (!postId) {
		return null;
	}

	if (loading) {
		return <div className="loading">Loading post details...</div>;
	}

	if (error) {
		return (
			<div className="error-container">
				<p className="error">{error}</p>
				<button onClick={onBack}>Back to Posts</button>
			</div>
		);
	}

	if (!post) {
		return (
			<div className="not-found">
				<p>Post not found</p>
				<button onClick={onBack}>Back to Posts</button>
			</div>
		);
	}

	return (
		<div className="post-detail">
			<button className="back-button" onClick={onBack}>
				&larr; Back to Posts
			</button>
			<h2>{post.title}</h2>
			<div className="post-metadata">
				<span>Post ID: {post.id}</span>
				<span>User ID: {post.userId}</span>
			</div>
			<div className="post-content">
				<p>{post.body}</p>
			</div>
		</div>
	);
};

export default PostDetail;
