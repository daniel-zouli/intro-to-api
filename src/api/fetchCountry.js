// Function to fetch country data from API
async function fetchCountryData(countryName) {
 const apiUrl = `https://restcountries.com/v3/name/${countryName}`;

 const response = await fetch(apiUrl);
    if (!response.ok) {
        throw new Error("HTTP ERROR");
}

const data = await response.json();

if(data.status == 404) {
    throw new Error("404 Country not found");
}
return data[0];
}

  
  export default fetchCountryData;