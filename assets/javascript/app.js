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

    var questionsToDisplay = [{
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

    // hides button after click and game starts    
    $("#start").click(function () {
        $("#start").hide(500);
        // startGame();
        
        // this is the timer
        var countDown = 20
        var timer = setInterval(function () {
            if (countDown <= 0) {
                clearInterval(timer);
                document.getElementById("timer").innerHTML = "Out of time";
            } else {
                document.getElementById("timer").innerHTML = "Time remaining: " + countDown;
            }
            countDown -= 1;
        }, 1000);
    });

    function startGame() {
        $("#slides").html(questionsToDisplay);
        for (i = 0; i < questionsToDisplay.length; i++);
        console.log(questionsToDisplay);
    };




    // $("#slides").html(questionsToDisplay.question [i]+ '<br>' + questionsToDisplay.answers[i]);
    // };

    setTimeout

    // function answerCorrect ()

    // function answerWrong ()

    // function notAnswered ()
});

