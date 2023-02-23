import { useState } from "react";
import "./SearchBar.css";
//@ts-ignore
export const SearchBar = ({ onSearch }) => {
  const [term, setTerm] = useState("");
  function handleClick(e: any) {
    e.preventDefault();
    onSearch(term);
  }

  return (
    <div className="search-bar">
      <form action="" onSubmit={handleClick}>
        <label htmlFor="" style={{ fontWeight: "bold" }}>
          Enter Search Term
        </label>
        <input
          className="search-bar"
          type="text"
          onChange={(e) => setTerm(e.target.value)}
          value={term}
        />{" "}
      </form>
    </div>
  );
};
