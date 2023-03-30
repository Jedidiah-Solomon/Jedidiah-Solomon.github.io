const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));
const circleImage = document.querySelector('.circle-image');

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuesions = [];

let questions = [
    {
        question: 'What is the unit of Energy?',
        choice1: 'Joules',
        choice2: 'Watt',
        choice3: 'Joules per second',
        choice4: 'Newton-second',
        answer: 1,
    },
    {
        question: "Calculate the area of the circle above:",
        imageSrc: "../images/circle.png",
        choice1: "4π",
        choice2: "8π",
        choice3: "16π",
        choice4: "π",
        answer: 3,
    },
    {
        question: "What is the unit of Speed?",
        choice1: "Capacitance",
        choice2: "Joules",
        choice3: "N/m",
        choice4: "m/s<sup>2</sup>",
        answer: 4,
    },
];


//CONSTANTS
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 3;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuesions = [...questions];
    getNewQuestion();
};

getNewQuestion = () => {
    if (availableQuesions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        //go to the end page
        return window.location.assign('../pages/end.html');
    }
    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuesions.length);
    currentQuestion = availableQuesions[questionIndex];
    question.innerText = currentQuestion.question;

    if (currentQuestion.imageSrc) {
        // show circle image
        const circleImageDiv = document.createElement('div');
        circleImageDiv.classList.add('circle-image');
        const circleImage = document.createElement('img');
        circleImage.setAttribute('src', currentQuestion.imageSrc);
        circleImage.setAttribute('alt', 'Circle of radius 4cm');
        circleImageDiv.appendChild(circleImage);
        game.insertBefore(circleImageDiv, question);
    } else {
        // remove any existing circle image
        const existingCircleImage = document.querySelector('.circle-image');
        if (existingCircleImage) {
            existingCircleImage.remove();
        }
    }

    choices.forEach((choice) => {
        const number = choice.dataset['number'];
        choice.innerHTML = currentQuestion['choice' + number];
    });

    availableQuesions.splice(questionIndex, 1);
    acceptingAnswers = true;
};

choices.forEach((choice) => {
    choice.addEventListener('click', (e) => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];
        getNewQuestion();
    });
});

startGame();
