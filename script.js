// API ref: "https://github.com/15Dkatz/official_joke_api"
const RANDOM_JOKE_API_URL = "https://official-joke-api.appspot.com/jokes/random";

const jokeSetupText = document.getElementById("js-joke-setup");
const jokeSetupGenerateButton = document.getElementById("js-joke-setup-generate-button");
const jokePunchlineText = document.getElementById("js-joke-punchline");
const jokePunchlineOpenButton = document.getElementById("js-joke-punchline-open-button");
const resetButton = document.getElementById("js-reset-button");

/* Generate joke button */
jokeSetupGenerateButton.addEventListener("click", function () {
  jokeSetupText.textContent = "generating....";
  jokeSetupText.style.visibility = "visible";

  renderJokeSetup();

  jokePunchlineOpenButton.classList.remove("unable-button");
  jokeSetupGenerateButton.classList.add("unable-button");
});

/* Open joke punchline button */
jokePunchlineOpenButton.addEventListener("click", function () {
  jokePunchlineText.style.visibility = "visible";

  jokeSetupGenerateButton.classList.add("unable-button");
  jokePunchlineOpenButton.classList.add("unable-button");
  resetButton.classList.remove("unable-button");
})

resetButton.addEventListener("click", function () {
  jokeSetupText.textContent = "";
  jokePunchlineText.textContent = "";
  jokePunchlineText.style.visibility = "hidden";

  resetButton.classList.add("unable-button");
  jokeSetupGenerateButton.classList.remove("unable-button");
})

/* Fetch joke text */
async function fetchJokeText() {
  const response = await fetch(RANDOM_JOKE_API_URL);
  return await response.json();
}

/* Render joke setup and set punchline */
async function renderJokeSetup() {
  const joke = await fetchJokeText();
  jokeSetupText.textContent = joke.setup;

  // 事前にpunchlineにも入れておく
  setJokePunchline(joke.punchline);
}

/* Set joke punchline */
function setJokePunchline(jokePunchline) {
  jokePunchlineText.textContent = jokePunchline;
}
