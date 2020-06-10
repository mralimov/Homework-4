function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
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

// create questions
var questions = [
    new Question("Which of the following is not a valid JavaScript variable name?", ["_first_names", "2names","FirstAndLast", "None of above"],"2names" ),
    new Question(" ______ tag is an extension to HTML that can enclose any number of JavaScript statements.", ["SCRIPT", "BODY", "HEAD", "TITLE"],"SCRIPT"),
    new Question(" Which of the following attribute can hold the JavaScript version?", ["LANGUAGE", "SCRIPT","VERSION", "None of above"], "LANGUAGE"),
    new Question(" Choose the client-side JavaScript object:", ["Database", "Cursor", "Client", "FileUpload"], "FileUpload"),
    new Question("JavaScript is interpreted by _________.", ["Client", "Server", "Object", "None of above"], "Client")
];

// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();





