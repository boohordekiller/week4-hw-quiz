function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

var questions = [
    new Question("The condition in an if / else statement is enclosed within ____.", ["Quotes", "curly brackets","parenthesis", "square brackets"], "parenthesis"),
    new Question("The condition in an if / else statement is enclosed within1 ____.", ["Quotes", "curly brackets","parenthesis", "square brackets"], "parenthesis"),
    new Question("The condition in an if / else statement is enclosed within2 ____.", ["Quotes", "curly brackets","parenthesis", "square brackets"], "parenthesis"),
    new Question("The condition in an if / else statement is enclosed within3 ____.", ["Quotes", "curly brackets","parenthesis", "square brackets"], "parenthesis"),
    new Question("The condition in an if / else statement is enclosed within4 ____.", ["Quotes", "curly brackets","parenthesis", "square brackets"], "parenthesis"),
];

var quiz = new Quiz(questions);

populate();





