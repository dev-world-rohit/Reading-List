import BookShow from "./BookShow";
import useBookContext from "../hooks/usebookcontext";

function BookList() {
    const { count, books } = useBookContext();

    const renderedBooks = books.map((book) => {
        return <BookShow key={book.id} book={book} />;
    });

    return (
        <div>
            <h1 style={{ fontSize: "20px" }}>Total number of books: {count}</h1>
            <div className="book-list">{renderedBooks}</div>
        </div>
    );
}

export default BookList;
