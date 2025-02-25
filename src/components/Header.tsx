import type React from "react";

const Header: React.FC = () => {
	return (
		<header className="app-header">
			<div className="logo">
				<h1>JSONPlaceholder Posts</h1>
			</div>
			<div className="header-description">
				<p>A demo React TypeScript app using the JSONPlaceholder API</p>
			</div>
		</header>
	);
};

export default Header;
