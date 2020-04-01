// have a play game button to start/restart the game, hide after clicked
// timer to display max time to display each question
// if time runs out, display message "out of time" and highlight correct answer in green
// if answer is wrong or correct, display appropriate message
// after answer is clicked highlight correct answer and clicked answer
// set up wrong answers in red and correct answer in green, hide until clicked or time run out
// create array to keep track of right/wrong answers; display on final screen and unhide start button

// use this to reveal answers
// $(document).ready(function(){
//     $("button").click(function(){
//       $("#div1").fadeIn();
//       $("#div2").fadeIn("slow");
//       $("#div3").fadeIn(3000);
//     });
//   });

$(document).ready(function () {

    var questionsInGame = [{
        question: "Dr. Seuss is a...",
        answers: ["pediatrician", "pen name", "surgeon", "professor"],
        correctAnswer: "pen name",
    }, {
        question: "How many children did Dr. Seuss have?",
        answers: ["7", "2", "0", "3"],
        correctAnswer: "0",
    }, {
        question: "Which of the following is not a Dr. Seuss book?",
        answers: ["Oh, the Places You'll Go!", "Yertle the Turtle", "Ramona and Beezus", "How the Grinch Stole Christmas!"],
        correctAnswer: "Ramona and Beezus",
    }, {
        question: "What are the names of the children in the Cat in the Hat?",
        answers: ["Sally and Conrad", "Shirley and Colton", "Thing One and Thing Two", "Jane and John"],
        correctAnswer: "Sally and Conrad",
    }, {
        question: "One fish two fish ___________",
        answers: ["blue fish green fish", "red fish green fish", "red fish blue fish", "red fish yellow fish"],
        correctAnswer: "red fish blue fish",
    }, {
        question: "Which of the following is a Dr. Seuss book made into a movie?",
        answers: ["Chicken Run", "Horton Hears a Who!", "The Adventures of Ichabod and Mr. Toad", "Up"],
        correctAnswer: "Horton Hears a Who!",
    }, {
        question: "Dr. Seuss's birthday is also known as...",
        answers: ["National Literacy Day", "Seussville Day", "National Read Across America Day", "Green Eggs and Ham Day"],
        correctAnswer: "National Read Across America Day",
    }, {
        question: "Which animal does Sam-I-Am mention in the Green Eggs and Ham?",
        answers: ["dog", "fox", "pig", "fish"],
        correctAnswer: "fox",
    }, {
        question: "In the book, 'Are You My Mother?', who is looking for their mother?",
        answers: ["a dog", "an elephant", "Thing One and Thing Two", "a baby bird"],
        correctAnswer: "a baby bird",
    }, {
        question: "What is the Fix-it-Up Chappie's name in the Sneetches?",
        answers: ["Sylvester the Cat", "Mr. Brown", "Ed McMahon", "Sylvester McMonkey McBean"],
        correctAnswer: "Sylvester McMonkey McBean",
    }];

    var displayQuestion = function (currentQuestion) {   //currentQuestion is an array index
        //currentQuestion = newQuestion;
        $("#slides").html(questionsInGame[currentQuestion].question + "<br>");
        for (i = 0; i < questionsInGame[currentQuestion].answers.length; i++) {
            //display each answer in a button
            $("#slides").append("<button id='answer" + i + "'>" + questionsInGame[currentQuestion].answers[i] + "</button>" + "<br>");
        };
        for (i = 0; i < questionsInGame[currentQuestion].correctAnswer.length; i++) {
            $("#displayAnswer").html("The correct answer is: " + questionsInGame[currentQuestion].correctAnswer);
        };
    };

    // hides button after click and game starts    
    $("#start").click(function () {
        $("#start").hide(500);
        var newQuestion = -1;
        nextQuestion();

        function nextQuestion() {
            newQuestion = newQuestion + 1;
            console.log(newQuestion);
            if (newQuestion >= questionsInGame.length) {
                results();
                return;
            }
            //answerToDisplay = newQuestion;
            //console.log(answerToDisplay);
            displayQuestion(newQuestion);
            startTimer();
        };

        var wrong = 0;
        var correct = 0;
        var unanswered = 0;
        var timer;

        // starts timer and displays questions and hides answer
        function startTimer() {
            $("#displayAnswer").hide(0);
            // var answerToDisplay = []; 

            var countDown = 3; // 1 less than desired time
            document.getElementById("timer").innerHTML = "Time remaining: " + (countDown + 1);
            timer = setInterval(function () {
                if (countDown <= 0) {
                    clearInterval(timer); //makes the timer stop
                    $("button").attr("disabled", "disabled");   //disable buttons
                    document.getElementById("timer").innerHTML = "Time's Up!";
                    //display correct answer
                    $("#displayAnswer").show(0);
                    unanswered = unanswered + 1;
                    console.log("unanswered:" + unanswered);
                    setTimeout(function () {

                        nextQuestion();
                        // displayQuestion(newQuestion);
                        // startTimer();   //this is recursion
                    }, 2000);
                } else {
                    document.getElementById("timer").innerHTML = "Time remaining: " + countDown;
                };
                countDown = countDown - 1;  //countdown -= 1;
                console.log(countDown);
            }, 1000);
        };


        // var correctAnswer = questionsInGame[newQuestion].correctAnswer;
        // console.log("correct: " + correctAnswer);

        $(document).on("click", "#answer0", function () {
            optionsClicked("answer0");
        });
        $(document).on("click", "#answer1", function () {
            optionsClicked("answer1");
        });
        $(document).on("click", "#answer2", function () {
            optionsClicked("answer2");
        });
        $(document).on("click", "#answer3", function () {
            optionsClicked("answer3");
        });

        function optionsClicked(possAns) {
            clearInterval(timer);
            $("#displayAnswer").show(0);
            console.log("clicked: " + document.getElementById(possAns).textContent);
            var ansChosen = document.getElementById(possAns).textContent;
            var correctAnswer = questionsInGame[newQuestion].correctAnswer;
            console.log("correct: " + correctAnswer);
            if (ansChosen === correctAnswer) {
                document.getElementById(possAns).style.backgroundColor = 'green';
                correct = correct + 1;
                console.log("correct:" + correct);
            } else {
                document.getElementById(possAns).style.backgroundColor = 'red';
                wrong = wrong + 1;
                console.log("wrong:" + wrong);
            }
            $("button").attr("disabled", "disabled");
            setTimeout(nextQuestion, 2000);
        }

        function results(){
            $("#main").html("Results:" + "<br>" + "Correct Answers: " + correct + "<br>" 
            + "Wrong Answers: " + wrong + "<br>" + "Unanswered: " + unanswered + "<br>"
            + "<button id='start'>Click to Replay</button>");
            
        }
    });

});

