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

    try {
      const countryData = await fetchCountryData(countryName);
      setCountry(countryData);
    } catch (err) {
      setError(err.message);
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
            <strong>Error:</strong> Could not load data 😢
          </div>
        )}
        {country && !loading && !error && <CountryCard country={country} />}
      </div>
    </div>
  );
}

export default App;
