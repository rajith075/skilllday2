"use client";

function BookCard({ title, author }) {
  return (
    <div className="book-card">
      <h3 className="book-title">{title}</h3>
      <p className="book-author">{author}</p>
    </div>
  );
}

export default function Page() {
  const books = [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { title: "1984", author: "George Orwell" },
    { title: "To Kill a Mockingbird", author: "Harper Lee" }
  ];

  return (
    <main className="app-container">
      <h1 className="header">Book List</h1>

      <div className="book-row">
        {books.map((book, index) => (
          <BookCard
            key={index}
            title={book.title}
            author={book.author}
          />
        ))}
      </div>
    </main>
  );
}