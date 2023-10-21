const jokeGenerateButton = document.getElementById("js-joke-generate-button");
const jokeText = document.getElementById("js-joke-text");

jokeGenerateButton.addEventListener("click", function () {
  // ボタンが押されたときにevil ensult textを取得
  // 取得した内容をテキストに描画
});

/* fetch joke text */
// api ref: "https://github.com/15Dkatz/official_joke_api"
async function fetchJokeText() {
  const apiUrl = "https://official-joke-api.appspot.com/jokes/random";
  const response = await fetch(apiUrl);
}
