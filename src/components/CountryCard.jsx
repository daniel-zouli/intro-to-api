// Component to render country data
function CountryCard({ country }) {
  // Defensive check: if no country data, return null
  if (!country || !country.name) {
    return null;
  }

  const currencies = country.currencies
    ? Object.entries(country.currencies)
        .map(
          ([code, currency]) =>
            `${currency.name} (${code}) - ${currency.symbol}`
        )
        .join(", ")
    : "N/A";

  const languages = country.languages
    ? Object.values(country.languages).join(", ")
    : "N/A";

  return (
    <div className="country-card">
      <div className="country-header">
        <h2>{country.name?.common || "Unknown"}</h2>
        <span className="country-flag">{country.flag || "🏳️"}</span>
      </div>
      <div className="country-info">
        <div className="info-row">
          <span className="info-label">Official Name:</span>
          <span className="info-value">{country.name?.official || "N/A"}</span>
        </div>
        <div className="info-row">
          <span className="info-label">Capital:</span>
          <span className="info-value">
            {country.capital ? country.capital.join(", ") : "N/A"}
          </span>
        </div>
        <div className="info-row">
          <span className="info-label">Region:</span>
          <span className="info-value">{country.region || "N/A"}</span>
        </div>
        <div className="info-row">
          <span className="info-label">Subregion:</span>
          <span className="info-value">{country.subregion || "N/A"}</span>
        </div>
        <div className="info-row">
          <span className="info-label">Population:</span>
          <span className="info-value">
            {country.population ? country.population.toLocaleString() : "N/A"}
          </span>
        </div>
        <div className="info-row">
          <span className="info-label">Area:</span>
          <span className="info-value">
            {country.area ? `${country.area.toLocaleString()} km²` : "N/A"}
          </span>
        </div>
        <div className="info-row">
          <span className="info-label">Currency:</span>
          <span className="info-value">{currencies}</span>
        </div>
        <div className="info-row">
          <span className="info-label">Languages:</span>
          <span className="info-value">{languages}</span>
        </div>
        <div className="info-row">
          <span className="info-label">Timezones:</span>
          <span className="info-value">
            {country.timezones && country.timezones.length > 0
              ? country.timezones.join(", ")
              : "N/A"}
          </span>
        </div>
        <div className="info-row">
          <span className="info-label">Independent:</span>
          <span className="info-value">
            {country.independent !== undefined
              ? country.independent
                ? "Yes"
                : "No"
              : "N/A"}
          </span>
        </div>
        <div className="info-row">
          <span className="info-label">UN Member:</span>
          <span className="info-value">
            {country.unMember !== undefined
              ? country.unMember
                ? "Yes"
                : "No"
              : "N/A"}
          </span>
        </div>
      </div>
    </div>
  );
}

export default CountryCard;
