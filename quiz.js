const correctAnswer = "4";
const feedback = document.getElementById("feedback");


function checkAnswer() {
    const userAnswer = document.querySelector('input[name="quiz"]:checked').value;

    if (!userAnswer) {
        feedback.textContent = "Please select an answer.";
        return;
    }

    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
    } else {
        feedback.textContent = "That's incorrect. Try again!";
    }
}

const submit = document.getElementById("submit-answer");
submit.addEventListener("click", checkAnswer);
