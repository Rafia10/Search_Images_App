import { useState } from "react";
import { searchImages } from "./Api";
import { ImageList } from "./Components/ImageList";
import { SearchBar } from "./Components/SearchBar";
import ClipLoader from "react-spinners/ClipLoader";

function App() {
  const [loading, setLoading] = useState(false); // Set loading to false initially

  const [results, setResults] = useState([]);

  async function handleSearch(term: string) {
    try {
      setLoading(true); // Start the loading spinner
      const results = await searchImages(term);
      setResults(results);
    } catch (error) {
      console.error("Error occurred during the API call:", error);
    }
    setLoading(false); // Stop the loading spinner after the API call is done
  }

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <ClipLoader
        color="black"
        loading={loading}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      <ImageList list={results} />
    </div>
  );
}

export default App;
