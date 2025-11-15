// Get DOM elements
const resultDiv = document.getElementById("result");

// Main function to load and display country data
async function loadCountryData(countryName) {
  // Show loading message
  resultDiv.innerHTML = "<p class='loading'>Loading country data...</p>";

  try {
    // Fetch country data from API
    const country = await fetchCountryData(countryName);

    // Render and display the country data
    resultDiv.innerHTML = renderCountryData(country);
  } catch (error) {
    // Show error message
    resultDiv.innerHTML = `
      <div class="error">
        <strong>Error:</strong> Could not load data 😢
      </div>
    `;
    console.error(error);
  }
}

// Load Japan data on page load
window.addEventListener("DOMContentLoaded", () => {
  loadCountryData("China");
});
