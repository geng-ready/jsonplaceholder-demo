import type React from "react";
import { useState } from "react";
import Header from "./components/Header";
import PostDetail from "./components/PostDetail";
import PostList from "./components/PostList";
import type { Post } from "./types/Post";
import "./App.css";

const App: React.FC = () => {
	const [selectedPostId, setSelectedPostId] = useState<number | null>(null);

	const handleSelectPost = (post: Post) => {
		setSelectedPostId(post.id);
	};

	const handleBackToList = () => {
		setSelectedPostId(null);
	};

	return (
		<div className="app">
			<Header />
			<main className="main-content">
				{!selectedPostId ? (
					<PostList onSelectPost={handleSelectPost} />
				) : (
					<PostDetail postId={selectedPostId} onBack={handleBackToList} />
				)}
			</main>
			<footer className="app-footer">
				<p>&copy; {new Date().getFullYear()} JSONPlaceholder Demo</p>
			</footer>
		</div>
	);
};

export default App;
