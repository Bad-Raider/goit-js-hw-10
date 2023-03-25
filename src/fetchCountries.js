export
    const API = "https://restcountries.com/v3.1/name/";

export
    function fenchCountry(value) {
    fetch(`${API}${value}?fields=name,capital,population,flags,languages`)
  .then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  })
}

