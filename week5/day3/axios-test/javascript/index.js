// // Opción 1
// async function main(){
//   const hungary = await axios.get(
//     "https://restcountries.eu/rest/v2/name/hungary"
//   );
//   console.log(hungary);
// }
// // Opción 2
// const main = async () => {
//   const hungary = await axios.get(
//     "https://restcountries.eu/rest/v2/name/hungary"
//   );
//   console.log(hungary);
// }

// main();

const $button = document.querySelector("button");
const $deleteCityForm = document.querySelector("#delete-city");
const $updateCityForm = document.querySelector("#update-city");
const $citiesDiv = document.querySelector("#cities");

async function createAlbum() {
  const response = await axios.post("http://localhost:8000/cities", {
    name: "Lisbon"
  });
  console.log(response);
}

async function deleteCity(e) {
  e.preventDefault();
  const cityID = $deleteCityForm.querySelector("input").value;
  await axios.delete(`http://localhost:8000/cities/${cityID}`);
  alert("c borro la ciudad");
  printCities();
}

async function updateCity(e) {
  e.preventDefault();
  const [$cityID, $cityName] = $updateCityForm.querySelectorAll("input");
  const cityID = $cityID.value;
  const cityName = $cityName.value;

  await axios.put(`http://localhost:8000/cities/${cityID}`, { name: cityName });
  $cityID.value = "";
  $cityName.value = "";
  alert("c actualizó");
  printCities();
}

async function getAllCities() {
  const { data } = await axios.get(`http://localhost:8000/cities`);
  console.log(data);
  return data;
}

async function printCities() {
  const cities = await getAllCities();
  $citiesDiv.innerHTML = "";
  cities.forEach(city => {
    const cityP = document.createElement("p");
    cityP.innerText = city.id + " " + city.name;
    $citiesDiv.appendChild(cityP);
  });
}

// Opción 3

(async () => {
  $button.onclick = createAlbum;
  $deleteCityForm.onsubmit = deleteCity;
  $updateCityForm.onsubmit = updateCity;
  printCities();

  const hungary = await axios.get(
    "https://restcountries.eu/rest/v2/name/hungary"
  );
  console.log(hungary);
})();
