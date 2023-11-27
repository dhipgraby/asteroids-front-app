interface PagesType {
    setCurrentPage: (current: number) => void,
    currentPage: number,
    totalPages: number
}

export default function PaginationButtons({
    setCurrentPage,
    currentPage,
    totalPages,
}: PagesType) {

    return (
        <div className="flex justify-between items-center my-4">
            <button
                className="btn-primary"
                onClick={() => setCurrentPage(currentPage - 1)}
                disabled={currentPage === 1}
            >
                Previous
            </button>
            <span>Page {currentPage} of {totalPages}</span>
            <button
                className="btn-primary"
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled={currentPage === totalPages}
            >
                Next
            </button>
        </div>
    );
}