const quiz = [
    {question: "How many planets are in the solar system?", options: ["7", "8", "9", "10"],answer: "8",hint: "An even no."},
    {question: "Which state is known as the 'Land of Spices'?",options: ["Kerala", "Punjab", "Goa", "Tamil Nadu"],answer: "Kerala",hint: "located in south"},
    {question: "What is the capital of Israel?",options: ["Haifa", "Tel Aviv", "Dhaka", "Jerusalem"],answer: "Jerusalem",hint: "starts with J"},
    {question: "Where are the Ajanta Caves located?",options: ["Maharashtra", "Gujarat", "Odisha", "Rajasthan"],answer: "Maharashtra",hint: "Mumbai is loced in this state"},
    {question: "What is 4 + 8?",options: ["10", "11", "12", "14"],answer: "12",hint: "4*3 =4+8"},  
];

function runQuiz() {
    let score = 0;

    let highScore = localStorage.getItem("quizHighScore");
    if (highScore === null) {highScore = 0;}

    for (let i = 0; i < quiz.length; i++) {
        let msg =
            `Q${i + 1}: ${quiz[i].question}\n` +
            `1. ${quiz[i].options[0]}\n` +
            `2. ${quiz[i].options[1]}\n` +
            `3. ${quiz[i].options[2]}\n` +
            `4. ${quiz[i].options[3]}\n\n` +
            `Enter option number (1-4):`;

        let userAnswer = prompt(msg);

        const selectedOption = quiz[i].options[userAnswer - 1];

        if (selectedOption === quiz[i].answer) {
            alert("Correct!");
            score++;
        } else {
            alert("Incorrect!");
            alert(`Hint: ${quiz[i].hint}`);
            alert(`Correct answer: ${quiz[i].answer}`);
        }
    }

    alert(`Quiz Finished. Your score: ${score}/${quiz.length}`);

    if (score > highScore) {
        localStorage.setItem("quizHighScore", score);
        alert(" New High Score!");
    } else {
        alert(`Your High Score: ${highScore}`);
    }
    if (score === quiz.length) {
        alert("Excellent");
    } else if (score >= quiz.length / 2) {
        alert("Good");
    } else {
        alert("Poor");
    }
    if (confirm("Do you want to restart?")) {
        runQuiz();
    }
}
runQuiz();
