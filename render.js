
function renderCountryData(country) {
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

  return `
    <div class="country-card">
      <div class="country-header">
        <h2>${country.name.common}</h2>
        <span class="country-flag">${country.flag}</span>
      </div>
      <div class="country-info">
        <div class="info-row">
          <span class="info-label">Official Name:</span>
          <span class="info-value">${country.name.official}</span>
        </div>
        <div class="info-row">
          <span class="info-label">Capital:</span>
          <span class="info-value">${
            country.capital ? country.capital.join(", ") : "N/A"
          }</span>
        </div>
        <div class="info-row">
          <span class="info-label">Region:</span>
          <span class="info-value">${country.region}</span>
        </div>
        <div class="info-row">
          <span class="info-label">Subregion:</span>
          <span class="info-value">${country.subregion || "N/A"}</span>
        </div>
        <div class="info-row">
          <span class="info-label">Population:</span>
          <span class="info-value">${country.population.toLocaleString()}</span>
        </div>
        <div class="info-row">
          <span class="info-label">Area:</span>
          <span class="info-value">${country.area.toLocaleString()} km²</span>
        </div>
        <div class="info-row">
          <span class="info-label">Currency:</span>
          <span class="info-value">${currencies}</span>
        </div>
        <div class="info-row">
          <span class="info-label">Languages:</span>
          <span class="info-value">${languages}</span>
        </div>
        <div class="info-row">
          <span class="info-label">Timezones:</span>
          <span class="info-value">${country.timezones.join(", ")}</span>
        </div>
        <div class="info-row">
          <span class="info-label">Independent:</span>
          <span class="info-value">${country.independent ? "Yes" : "No"}</span>
        </div>
        <div class="info-row">
          <span class="info-label">UN Member:</span>
          <span class="info-value">${country.unMember ? "Yes" : "No"}</span>
        </div>
      </div>
    </div>
  `;
}
