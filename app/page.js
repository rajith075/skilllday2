function BookCard({ title, author }) {
  return (
    <div style={{
      backgroundColor: "#977750",
      padding: "10px",
      margin: "10px",
      borderRadius: "20px"
    }}>
      <h3>Title: {title}</h3>
      <p>Author: {author}</p>
    </div>
  );
}

export default function Page() {

  const books = [
    { title: "The vanisher", author: "F. rajith shetty" },
    { title: "the seaa", author: "sundar" },
    { title: "The firewall", author: "Harmanpreet" }
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