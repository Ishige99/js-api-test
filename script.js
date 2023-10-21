// api ref: "https://github.com/15Dkatz/official_joke_api"
const RANDOM_JOKE_API_URL = "https://official-joke-api.appspot.com/jokes/random";

const jokeSetupText = document.getElementById("js-joke-setup");
const jokeSetupGenerateButton = document.getElementById("js-joke-setup-generate-button");
const jokePunchlineText = document.getElementById("js-joke-punchline");
const jokePunchlineOpenButton = document.getElementById("js-joke-punchline-open-button");

jokeSetupGenerateButton.addEventListener("click", function () {
  renderJokeSetup();
  jokePunchlineOpenButton.style.display = "block";
});

jokePunchlineOpenButton.addEventListener("click", function () {
  jokePunchlineText.style.display = "block";
})

/* fetch joke text */
async function fetchJokeText() {
  const response = await fetch(RANDOM_JOKE_API_URL);
  return await response.json();
}

/* render joke setup and set punchline */
async function renderJokeSetup() {
  const joke = await fetchJokeText();
  jokeSetupText.textContent = joke.setup;

  // 事前にpunchlineにも入れておく
  setJokePunchline(joke.punchline);
}

/* set joke punchline */
function setJokePunchline(jokePunchline) {
  jokePunchlineText.textContent = jokePunchline;
}
