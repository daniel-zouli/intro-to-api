// Timeout duration in milliseconds (10 seconds)
const FETCH_TIMEOUT = 10000;

function createTimeoutPromise(timeoutMs) {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error("Request timeout: The server took too long to respond"));
    }, timeoutMs);
  });
}

// Function to fetch country data from API with defensive programming
export async function fetchCountryData(countryName) {

}
