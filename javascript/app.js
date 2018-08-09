$(document).ready(function () {

    $("#answers").hide()


    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;
    var question1 = document.getElementsByName("Ireland");
    var question2 = document.getElementsByName("Peru").value;
    var question3 = document.getElementsByName("Australia").value;
    var question4 = document.getElementsByName("Cabo").value;
    var question5 = document.getElementsByName("September").value;
    var question6 = document.getElementsByName("330").value;
    var question7 = document.getElementsByName("Vietnam").value;
    var startTime = 30;
    console.log(question1, question2, question3, question4);
    
    $("#tryAgain").on("click", function() {
        $("#totalTime").show()
        $("#answers").hide()
        $(":radio").prop("checked",false);
        correct = 0;
        incorrect = 0;
        unanswered = 0;
        startTime = 30;

    })


    $("#done").on("click", function() {
        hideQuiz();
        stop();
    })


    function hideQuiz () {
        $("#totalTime").hide()
        $("#answers").show()
        collectAnswers ();
        decrement.stop();
    }

    function collectAnswers () {
        var answers = $("#quiz").serializeArray()
        console.log(answers);
        check(answers)
        $("#correct").text(correct);
        $("#incorrect").text(incorrect);
        $("#unanswered").text(unanswered);
        // var keys = answers.map(function(answer) { return answer.value })
        // console.log(keys)
        // var answerData = {
        //     // question1: answers.
        // }
    }

    decrement();


    function decrement() {
        startTime--;
        console.log(startTime);
        $("#seconds").text(startTime);

        if (startTime < 1) {
            hideQuiz();
            console.log("time's up")
        } else {
            setTimeout(decrement, 1000)
        }
        
    }

function stop() {
    clearInterval(startTime);
}

    function check(answers) {

        if (answers[0].name === "question1" && answers[0].value === "Ireland") {
            correct++
        } else {
            incorrect++
        }

        if (answers[1].name === "question2" && answers[1].value === "Peru") {
            correct++
        } else {
            incorrect++
        }

        if (answers[2].name === "question3" && answers[2].value === "Australia") {
            correct++
        } else {
            incorrect++
        }

        if (answers[3].name === "question4" && answers[3].value === "Cabo") {
            correct++
        } else {
            incorrect++
        }

        if (answers[4].name === "question4" && answers[4].value === "September") {
            correct++
        } else {
            incorrect++
        }

        if (answers[5].name === "question4" && answers[5].value === "330") {
            correct++
        } else {
            incorrect++
        }

        if (answers[6].name === "question4" && answers[6].value === "Vietnam") {
            correct++
        } else {
            incorrect++
        }
        console.log('Correct: ', correct)
        console.log('Incorrect: ', incorrect)
    }



})