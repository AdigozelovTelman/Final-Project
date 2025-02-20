import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const SearchResults = () => {
  const query = new URLSearchParams(useLocation().search).get("query");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (query) {
      axios
        .get(`http://localhost:5000/product/${query}`)
        .then((response) => {
          setResults(response.data);
          setLoading(false);
        })
        .catch((err) => {
          setError("Xəta baş verdi!");
          setLoading(false);
        });
    }
  }, [query]);

  return (
    <div>
      <h2>Axtarış nəticələri: "{query}"</h2>
      {loading && <p>Yüklənir...</p>}
      {error && <p>{error}</p>}
      <ul>
        {results.map((book) => (
          <li key={book._id}>
            <h3>{book.title}</h3>
            <p>{book.author}</p>
            <p>{book.price} AZN</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResults;
