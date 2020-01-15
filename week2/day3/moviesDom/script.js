const movies = [];

function updateRating(movieIndex, type) {
  const $spanRating = movies[movieIndex].querySelector("p > span");
  const currentRating = parseInt($spanRating.innerText);
  if (type === "-") {
    if (currentRating <= 0) return;
    $spanRating.innerText = currentRating - 1;
  } else {
    if (currentRating >= 10) return;
    $spanRating.innerText = currentRating + 1;
  }
}

window.onload = () => {
  const $movies = document.querySelector("#movies");

  // console.log($movies.querySelector(".movie:nth-child(1)"));

  $movies.querySelectorAll(".movie").forEach($movie => movies.push($movie));

  document.querySelector("form").onsubmit = e => {
    e.preventDefault();
    const number = movies.length;
    const $titleInput = document.querySelector("#title");
    const $image = document.querySelector("#image");
    const title = $titleInput.value;
    const image = $image.value;

    const $article = document.createElement("article");
    $article.className = "movie";
    // const $img = document.createElement("img");
    // $img.setAttribute("src", image);
    // $img.setAttribute("alt", title);
    // $img.className = "cartel";
    // const $title = document.createElement("p");
    // $title.innerText = title;
    // const $rating = document.createElement("p");
    // $rating.innerHTML = "rating: <span>1</span>";
    // const $subButton = document.createElement("button");
    // $subButton.innerText = "-";
    // const $addButton = document.createElement("button");
    // $addButton.innerText = "+";
    // $subButton.onclick = () => {
    //   updateRating(number, "-");
    // };
    // $addButton.onclick = () => {
    //   updateRating(number, "+");
    // };
    const $todoElArticle = `
        <img class='cartel' src="${image}" alt="${title}"/>
        <p>${title}</p>
        <p>rating: <span>1</span></p>
        <button onclick="updateRating(${number}, '-')">-</button
        ><button onclick="updateRating(${number}, '+')">+</button>
    `;
    $article.innerHTML = $todoElArticle;
    // juntamos todos los nodos
    // $article.appendChild($img);
    // $article.appendChild($title);
    // $article.appendChild($rating);
    // $article.appendChild($subButton);
    // $article.appendChild($addButton);
    $movies.appendChild($article);

    movies.push($article);
    $titleInput.value = "";
    $image.value = "";
  };
};
