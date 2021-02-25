import React from "react";
import ReactDOM from "react-dom";
import { data } from "./books";
import Book from "./book";
// import CSS
import "./index.css";
// setup Vars

function BookList() {
  return (
    <section className="booklist">
      {data.map((book) => {
        return <Book key={book.id} {...book} />;
      })}
    </section>
  );
}

ReactDOM.render(<BookList />, document.getElementById("root"));
