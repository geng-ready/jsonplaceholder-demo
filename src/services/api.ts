import type { Post } from "../types/Post";

const API_URL = "https://jsonplaceholder.typicode.com";

export const fetchPosts = async (page = 1, limit = 5): Promise<Post[]> => {
	try {
		const response = await fetch(
			`${API_URL}/posts?_page=${page}&_limit=${limit}`,
		);

		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}

		return await response.json();
	} catch (error) {
		console.error("Error fetching posts:", error);
		throw error;
	}
};

export const fetchPostById = async (id: number): Promise<Post> => {
	try {
		const response = await fetch(`${API_URL}/posts/${id}`);

		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}

		return await response.json();
	} catch (error) {
		console.error(`Error fetching post ${id}:`, error);
		throw error;
	}
};
