// api ref: "https://github.com/15Dkatz/official_joke_api"
const RANDOM_JOKE_API_URL =
  "https://official-joke-api.appspot.com/jokes/random";

const jokeSetupText = document.getElementById("js-joke-setup");
const JokeSetupGenerateButton = document.getElementById("js-joke-setup-generate-button");
const jokePunchlineText = document.getElementById("js-joke-punchline");
const jokePunchlineGenerateButton = document.getElementById("js-joke-punchline-generate-button");

JokeSetupGenerateButton.addEventListener("click", function () {});

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
