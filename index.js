const jokeElm = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");
const loading=document.getElementById('loading');

jokeBtn.addEventListener('click',genrateJoke)
genrateJoke();
function genrateJoke() {
  loading.style.display='block';
  jokeElm.style.display="none";
  const config = {
    headers: {
      Accept: " application/json ",
    },
  };
  fetch("https://icanhazdadjoke.com", config)
    .then((respone) => respone.json())
    .then((data) =>{
      jokeElm.innerHTML=data.joke
      console.log(data)
      loading.style.display="none";
      jokeElm.style.display="block";
      
    });
}