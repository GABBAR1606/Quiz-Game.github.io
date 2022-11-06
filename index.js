const data = [
  {
    id: 1,
    question: "which of the following is not an Actor?",
    answers: [
      { answer: "Akshay Kumar", isCorrect: false },
      { answer: "Sanjay Dutt", isCorrect: false },
      { answer: "Rohit Sharma", isCorrect: true },
      { answer: "Ajay Devgan", isCorrect: false },
    ],
  },
  {
    id: 2,
    question: "which of the following is a Politican?",
    answers: [
      { answer: "Deepak Parmar", isCorrect: false },
      { answer: "Amit Shah", isCorrect: true },
      { answer: "Rahul Patel", isCorrect: false },
      { answer: "Yash Modi", isCorrect: false },
    ],
  },
  {
    id: 3,
    question: "which of the following is not a programming Language?",
    answers: [
      { answer: "C-", isCorrect: true },
      { answer: "C#", isCorrect: false },
      { answer: "C", isCorrect: false },
      { answer: "C++", isCorrect: false },
    ],
  },
  {
    id: 4,
    question: "which of the following is not an country?",
    answers: [
      { answer: "Ireland", isCorrect: false },
      { answer: "Russia", isCorrect: false },
      { answer: "WaterLand", isCorrect: true },
      { answer: "America", isCorrect: false },
    ],
  },
];

const gameScreen = document.querySelector(".game");
const resultScreen = document.querySelector(".result");
const question = document.querySelector(".question");
const answerContainer = document.querySelector(".answers");
const submit = document.querySelector(".submit");
const play = document.querySelector(".play");

let qIndex = 0;
let corretCount = 0;
let wrongCount = 0;
let total = 0;
let selectedAnswer;

const playAgain = () => {
   qIndex = 0;
   corretCount = 0;
   wrongCount = 0;
   total = 0;
   showQuestion(qIndex)
};

play.addEventListener("click", ()=>{
    gameScreen.style.display = "block";
    resultScreen.style.display = "none";
    playAgain()
})

const showResult = () => {
  gameScreen.style.display = "none";
  resultScreen.style.display = "block";

  resultScreen.querySelector(".corret").textContent = `
  Correct Answer : ${corretCount}`;
  resultScreen.querySelector(".wrong").textContent = `
  wrong Answer : ${wrongCount}`;
  resultScreen.querySelector(".score").textContent = `
  Score : ${(corretCount - wrongCount) * 10}`;
};

const showQuestion = (qNumber) => {
  if (qIndex === data.length) return showResult();
  selectedAnswer = null;
  question.textContent = data[qNumber].question;
  answerContainer.innerHTML = data[qNumber].answers
    .map(
      (item, index) =>
        `
    <div class="answer">
        <input type="radio" name="answer" id=${index} value=${item.isCorrect}>
        <label for='1'>${item.answer}</label>
    </div>
    `
    )
    .join("");
  selectAnswer();
};
const selectAnswer = () => {
  answerContainer.querySelectorAll("input").forEach((el) => {
    el.addEventListener("click", (e) => {
      selectedAnswer = e.target.value;
    });
  });
};
const submitAnswer = () => {
  submit.addEventListener("click", () => {
    if (selectedAnswer !== null) {
      selectedAnswer === "true" ? corretCount++ : wrongCount++;
      qIndex++;
      showQuestion(qIndex);
    } else {
      alert("Please select one Option!");
    }
  });
};
showQuestion(qIndex);
submitAnswer();
