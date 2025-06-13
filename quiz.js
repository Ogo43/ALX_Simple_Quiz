function checkAnswer () {
    let correctAnswer = "4";

    let userAnswer = document.querySelector('input[name="quiz"]:checked').value;
    
    let feedback = document.querySelector("#feedback");

    // if (!userAnswer){
    //     feedback.textContent = "Please select an answer";
    //     feedback.style.color = "#dc3545";
    //     return;
    // }

    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
        feedback.style.color = "#28a745";
    }else{
        feedback.textContent = "That's incorrect. Try again!";
        feedback.style.color = "#dc3545"
    }
}

let submitButton = document.getElementById("submit-answer");
submitButton.addEventListener("click", checkAnswer);