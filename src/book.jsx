import React from "react";

const Book = ({ img, title, author }) => {
  const clickHandler = () => {
    alert("Hello World!");
  };

  const complexExample = (author) => {
    alert(author);
  };

  return (
    <article className="book">
      <img src={img} alt="#" />
      <h1 onClick={() => alert(title)}>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        Click Me
      </button>
      <button type="button" onClick={() => complexExample(author)}>
        Click me more
      </button>
    </article>
  );
};

export default Book;
