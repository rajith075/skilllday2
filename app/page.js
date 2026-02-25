function BookCard({ title, author }) {
  return (
    <div style={{
      backgroundColor: "#977550",
      padding: "10px",
      margin: "10px",
      borderRadius: "5px"
    }}>
      <h3>Title: {title}</h3>
      <p>Author: {author}</p>
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
    <div style={{ padding: "20px" }}>

      <h1 style={{fontweight:"bold"}}> Book List</h1>

      {books.map((book, index) => (
        <BookCard
          key={index}
          title={book.title}
          author={book.author}
        />
      ))}

    </div>
  );
}