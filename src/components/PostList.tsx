import type React from "react";
import { useEffect, useState } from "react";
import { fetchPosts } from "../services/api";
import type { Post } from "../types/Post";
import Pagination from "./Pagination";
import PostItem from "./PostItem";

interface PostListProps {
	onSelectPost: (post: Post) => void;
}

const PostList: React.FC<PostListProps> = ({ onSelectPost }) => {
	const [posts, setPosts] = useState<Post[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);
	const [currentPage, setCurrentPage] = useState<number>(1);
	const postsPerPage = 5;

	useEffect(() => {
		const loadPosts = async () => {
			try {
				setLoading(true);
				const fetchedPosts = await fetchPosts(currentPage, postsPerPage);
				setPosts(fetchedPosts);
				setError(null);
			} catch (err) {
				setError("Failed to fetch posts. Please try again later.");
				console.error(err);
			} finally {
				setLoading(false);
			}
		};

		loadPosts();
	}, [currentPage]);

	const handlePageChange = (page: number) => {
		setCurrentPage(page);
	};

	if (loading) {
		return <div className="loading">Loading posts...</div>;
	}

	if (error) {
		return <div className="error">{error}</div>;
	}

	return (
		<div className="post-list">
			<h2>Latest Posts</h2>
			{posts.length === 0 ? (
				<p>No posts found.</p>
			) : (
				<>
					<div className="posts-container">
						{posts.map((post) => (
							<PostItem key={post.id} post={post} onSelect={onSelectPost} />
						))}
					</div>
					<Pagination
						currentPage={currentPage}
						onPageChange={handlePageChange}
						totalPages={3} // Hardcoded for demo, in real app would be calculated based on total posts
					/>
				</>
			)}
		</div>
	);
};

export default PostList;
