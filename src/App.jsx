import { useState, useEffect } from "react";
import { fetchCountryData } from "./api/fetchCountry";
import CountryCard from "./components/CountryCard";
import "../styles.css";

function App() {
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadCountryData("Qatar");
  }, []);

  async function loadCountryData(countryName) {
    setLoading(true);
    setError(null);
    setCountry(null);

    try {
      const countryData = await fetchCountryData(countryName);

      // If no data returned (empty array or undefined)
      if (!countryData) {
        setError("No country detected 😢");
        return;
      }

      setCountry(countryData);
    } catch (err) {
      // Generic user‑friendly error
      setError("Error loading data ❌");
      console.error("Fetch failed:", err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="container">
      <h1>Country Information</h1>

      <div className="result-container">
        {loading && <p className="loading">Loading country data...</p>}

        {error && (
          <div className="error">
            <strong>{error}</strong>
          </div>
        )}

        {!loading && !error && !country && (
          <p className="no-data">No country data available 🗺️</p>
        )}

        {!loading && country && !error && <CountryCard country={country} />}
      </div>
    </div>
  );
}

export default App;