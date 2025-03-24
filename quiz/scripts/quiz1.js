document.getElementById("submit-btn").addEventListener("click", function () {
    let score = 0;
    let totalQuestions = 10;

    // Correct answers
    const answers = {
        q1: "b",
        q2: "c",
        q3: "a",
        q4: "b",
        q5: "b",
        q6: "a",
        q7: "b",
        q8: "a",
        q9: "a",
        q10: "c"
    };

    // Explanations for wrong answers
    const explanations = {
        q1: "The primary cause of climate change is greenhouse gas emissions, primarily from burning fossil fuels.",
        q2: "Carbon dioxide (CO₂) is the most significant greenhouse gas responsible for global warming.",
        q3: "Rising global temperatures lead to more frequent natural disasters like hurricanes and heatwaves.",
        q4: "Wind energy is a renewable source, while coal and natural gas are fossil fuels.",
        q5: "The greenhouse effect is the trapping of heat by gases like CO₂ in Earth's atmosphere.",
        q6: "Deforestation increases CO₂ levels because trees absorb carbon dioxide.",
        q7: "Livestock farming releases methane (CH₄), a potent greenhouse gas.",
        q8: "Adaptation strategies like building sea walls help mitigate climate change effects.",
        q9: "The Kyoto Protocol is an international agreement to combat climate change.",
        q10: "Using renewable energy helps reduce carbon footprints by cutting fossil fuel reliance."
    };

    let allAnswered = true; // Track if all questions are answered

    // Check answers
    Object.keys(answers).forEach((question) => {
        let selectedOption = document.querySelector(`input[name="${question}"]:checked`);
        let explanationElement = document.getElementById(`explain-${question}`);

        if (selectedOption) {
            let parentLabel = selectedOption.parentElement; // Get the label that wraps the radio button

            if (selectedOption.value === answers[question]) {
                score++;
                explanationElement.style.display = "none"; // Hide explanation if correct

                // Add ✅ tick mark if correct
                if (!parentLabel.querySelector(".tick")) {
                    let tickMark = document.createElement("span");
                    tickMark.textContent = " ✅";
                    tickMark.classList.add("tick");
                    tickMark.style.color = "green";
                    parentLabel.appendChild(tickMark);
                }
            } else {
                explanationElement.textContent = `❌ Incorrect. ${explanations[question]}`;
                explanationElement.style.color = "red";
                explanationElement.style.display = "block"; // Show explanation if wrong
            }
        } else {
            explanationElement.textContent = "⚠ Please select an answer!";
            explanationElement.style.color = "orange";
            explanationElement.style.display = "block";
            allAnswered = false;
        }
    });

    // Display final result only if all questions are answered
    let resultElement = document.getElementById("quiz-result");
    if (allAnswered) {
        resultElement.textContent = `✅ You scored ${score} out of ${totalQuestions}!`;
        resultElement.style.color = "green";
    } else {
        resultElement.textContent = "⚠ Please answer all questions before submitting.";
        resultElement.style.color = "red";
    }
});


document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".sidebar a").forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default anchor jump
            
            const targetId = this.getAttribute("href").substring(1); // Remove #
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Adjust for fixed navbar
                    behavior: "smooth"
                });
            }
        });
    });
});
