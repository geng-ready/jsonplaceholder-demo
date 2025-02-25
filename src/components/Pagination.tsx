import type React from "react";

interface PaginationProps {
	currentPage: number;
	totalPages: number;
	onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
	currentPage,
	totalPages,
	onPageChange,
}) => {

	return (
		<div className="pagination">
			<button
				className="prev-page"
				onClick={() => onPageChange(currentPage - 1)}
				disabled={currentPage === 1}
			>
				&larr; Previous
			</button>

			// TODO: add page numbers
			<div className="page-numbers"></div>

			<button
				className="next-page"
				onClick={() => onPageChange(currentPage + 1)}
				disabled={currentPage === totalPages}
			>
				Next &rarr;
			</button>
		</div>
	);
};

export default Pagination;
