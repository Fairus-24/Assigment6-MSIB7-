import React, { useState } from "react";

const Search = ({ onSearch }) => {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(input);
  };

  return (
    <form onSubmit={handleSubmit} style={{ textAlign: "center", margin: "20px auto" }}>
      <input
        type="text"
        placeholder="Search for Movies"
        value={input}
        onChange={handleChange}
        style={{
          padding: "10px",
          fontSize: "1rem",
          width: "60%",
          borderRadius: "8px 0 0 8px",
          border: "1px solid #ccc",
          outline: "none",
        }}
      />
      <button
        type="submit"
        style={{
          padding: "10px 20px",
          fontSize: "1rem",
          backgroundColor: "#eab308",
          border: "none",
          color: "#fff",
          cursor: "pointer",
          borderRadius: "0 8px 8px 0",
        }}
      >
        Search
      </button>
    </form>
  );
};

export default Search;
