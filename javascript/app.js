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
    var question8 = document.getElementsByName("Venezuela").value;
    var question9 = document.getElementsByName("Switzerland").value;
    var question10 = document.getElementsByName("Ecuador").value;
    var startTime = 31;
    var gameFinished = false;
    var timer;
    console.log(question1, question2, question3, question4, question5, question6, question7, question8, question9, question10);
    
    $("#tryAgain").on("click", function() {
        $("#totalTime").show()
        $("#answers").hide()
        $(":radio").prop("checked",false);
        correct = 0;
        incorrect = 0;
        unanswered = 0;
        startTime = 30;
        decrement();

    })


    $("#done").on("click", function() {
        hideQuiz();
        gameFinished = true;
    })


    function hideQuiz () {
        $("#totalTime").hide()
        $("#answers").show()
        collectAnswers ();
    }

    function collectAnswers () {
        var answers = $("#quiz").serializeArray()
        console.log(answers);
        check(answers)
        $("#correct").text(correct);
        $("#incorrect").text(incorrect);
        $("#unanswered").text(unanswered);
        stop();

    }

    decrement();


    function decrement() {
        startTime--;
        console.log(startTime);
        $("#seconds").text(startTime);

        if (startTime < 1 && !gameFinished) {
            hideQuiz();
            console.log("time's up")
        } else {
            timer = setTimeout(decrement, 1000)
        }
        
    }

function stop() {
    clearTimeout(timer);
}

    function check(answers) {

        var input1 = $("input[name='question1']:checked").val()
            if(input1 === "Ireland") {
                correct++
            }else if(!input1) {
                unanswered++
            }else {
                incorrect++
            }
        console.log(input1);


        var input2 = $("input[name='question2']:checked").val()
            if(input2 === "Peru") {
                correct++
            }else if(!input2) {
                unanswered++
            }else {
                incorrect++
            }
        console.log(input2);


        var input3 = $("input[name='question3']:checked").val()
        if(input3 === "Australia") {
            correct++
        }else if(!input3) {
            unanswered++
        }else {
            incorrect++
        }
        console.log(input3);


        var input4 = $("input[name='question4']:checked").val()
        if(input4 === "Cabo") {
            correct++
        }else if(!input4) {
            unanswered++
        }else {
            incorrect++
        }
        console.log(input4);



        var input5 = $("input[name='question5']:checked").val()
        if(input5 === "September") {
            correct++
        }else if(!input5) {
            unanswered++
        }else {
            incorrect++
        }
        console.log(input5);



        var input6 = $("input[name='question6']:checked").val()
        if(input6 === "330") {
            correct++
        }else if(!input6) {
            unanswered++
        }else {
            incorrect++
        }
        console.log(input6);


        var input7 = $("input[name='question7']:checked").val()
        if(input7 === "Vietnam") {
            correct++
        }else if(!input7) {
            unanswered++
        }else {
            incorrect++
        }
        console.log(input7);


        var input8 = $("input[name='question8']:checked").val()
        if(input8 === "Venezuela") {
            correct++
        }else if(!input8) {
            unanswered++
        }else {
            incorrect++
        }
        console.log(input8);


        var input9 = $("input[name='question9']:checked").val()
        if(input9 === "Switzerland") {
            correct++
        }else if(!input9) {
            unanswered++
        }else {
            incorrect++
        }
        console.log(input9);


        var input10 = $("input[name='question10']:checked").val()
        if(input10 === "Ecuador") {
            correct++
        }else if(!input10) {
            unanswered++
        }else {
            incorrect++
        }
        console.log(input10);

                console.log('Correct: ', correct)
                console.log('Incorrect: ', incorrect)
            }



})