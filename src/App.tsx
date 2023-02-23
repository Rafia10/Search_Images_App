import { useState } from "react";
import { searchImages } from "./Api";
import { ImageList } from "./Components/ImageList";
import { SearchBar } from "./Components/SearchBar";

function App() {
  const [results, setResults] = useState([]);
  async function handleSearch(term: string) {
    const results = await searchImages(term);
    setResults(results);
  }
  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <ImageList list={results} />
    </div>
  );
}

export default App;
