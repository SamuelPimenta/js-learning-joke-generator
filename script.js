const xhr = new XMLHttpRequest();
const jokeContainer = document.getElementById("joke");
const jokeButton = document.getElementById("joke-btn");

const getJoke = () => {
  xhr.open("GET", "https://api.chucknorris.io/jokes/random");

  xhr.onload = () => {
    let response;
    if (xhr.status == 200) {
      response = JSON.parse(xhr.responseText);
      console.log(response);
      jokeContainer.innerHTML = response.value;
    } else {
      alert(`Request failed with code ${xhr.status}`);
    }
  };
  xhr.send();
};
document.addEventListener("click", getJoke);
