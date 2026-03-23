let selectedAnswers = {};

let questionBlocks = document.querySelectorAll(".question-block");

questionBlocks.forEach((block, index) => {
    let buttons = block.querySelectorAll(".answer-btn");

buttons.forEach((button) => {
    button.addEventListener("click", function () {
        buttons.forEach((btn) => btn.classList.remove("selected"));
        this.classList.add("selected");

        selectedAnswers[index] = this.dataset.answer;

        console.log(selectedAnswers);
        });
    });
});

function displayResult() {
    console.log("displayResult is running");

    let scores = {
        A: 0,
        B: 0,
        C: 0,
        D: 0
    };

    for (let key in selectedAnswers) {
        let answer = selectedAnswers[key];
        scores[answer]++;
    }

    let resultText = "";

    if (scores.A >= scores.B && scores.A >= scores.C && scores.A >= scores.D) {
        resultText = "You are Captain America!\nYou are selfless and a natural leader.";
    } else if (scores.B >= scores.A && scores.B >= scores.C && scores.B >= scores.D) {
        resultText = "You are Iron Man!\nYou rely on intelligence and innovation.";
    } else if (scores.C >= scores.A && scores.C >= scores.B && scores.C >= scores.D) {
        resultText = "You are Black Panther!\nYou are disciplined and protective.";
    } else {
        resultText = "You are Spider-Man!\nYou are quick and funny, but also responsible and caring.";
    }

    document.getElementById("result-container").style.display = "block";
    document.getElementById("result-text").textContent = resultText;
    document.getElementById("result-container").scrollIntoView({ behavior: "smooth" });
}

document.getElementById("show-result").addEventListener("click", displayResult);
