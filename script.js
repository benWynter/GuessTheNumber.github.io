/*document.querySelector(`.message`).textContent = `Correct Number!`;

document.querySelector(`.number`).textContent = 13;

document.querySelector(`.score`).textContent = 10;

document.querySelector(`.guess`).value = 23;
console.log(document.querySelector(`.guess`).value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

let highScore = 0;

//What happens when you click on the button. Logs the number as a value.
document.querySelector(`.check`).addEventListener(`click`, function () {
  const guess = Number(document.querySelector(`.guess`).value);

  console.log(typeof guess);

  //When there is no number entered
  if (!guess) {
    document.querySelector(`.message`).textContent = `⛔ No Number!`;
  }
  //When the correct number is entered
  else if (guess === secretNumber) {
    document.querySelector(`.message`).textContent = `🎉 Correct Number!`;
    document.querySelector(`body`).style.backgroundColor = `#60b347`;
    document.querySelector(`.number`).style.width = `30rem`;
    document.querySelector(`.number`).textContent = secretNumber;
    if (score > highScore) {
      highScore = score;
      document.querySelector(`.highscore`).textContent = highScore;
    }
  }
  //When the number is greater than the answer
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(`.message`).textContent = `📈 Too High!`;
      score--;
      document.querySelector(`.score`).textContent = score;
    } else {
      document.querySelector(`.message`).textContent = ` ☠️ Game Over!`;
      document.querySelector(`.score`).textContent = 0;
    }

    //When the number is less than the answer
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(`.message`).textContent = `📈 Too Low!`;
      score--;
      document.querySelector(`.score`).textContent = score;
    } else {
      document.querySelector(`.message`).textContent = ` ☠️ Game Over!`;
      document.querySelector(`.score`).textContent = 0;
    }
  }
});

document.querySelector(`.again`).addEventListener(`click`, function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector(`.number`).textContent = '?';
  document.querySelector(`.message`).textContent = `Start guessing...`;
  document.querySelector(`.score`).textContent = score;

  document.querySelector(`body`).style.backgroundColor = `#222`;
  document.querySelector(`.number`).style.width = `15rem`;
});
