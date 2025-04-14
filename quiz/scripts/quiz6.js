document.getElementById("submit-btn").addEventListener("click", function () {
    let score = 0;
    let totalQuestions = 10;
    let allAnswered = true; // Track if all questions are answered

    // Correct answers and explanations for ocean conservation questions
    const answers = {
        q1: { correct: "b", explanation: "Oceans cover approximately 71% of the Earth's surface, making them the dominant feature of our planet and critical for global climate regulation." },
        q2: { correct: "b", explanation: "Ocean acidification is primarily caused by the ocean absorbing increasing amounts of carbon dioxide from the atmosphere, which changes seawater chemistry." },
        q3: { correct: "a", explanation: "Marine protected areas are zones where human activity is legally restricted to conserve the marine environment, biodiversity, and historical resources." },
        q4: { correct: "b", explanation: "Approximately 8 million tons of plastic waste enters our oceans annually, threatening marine life through entanglement, ingestion, and habitat destruction." },
        q5: { correct: "b", explanation: "Bycatch refers to non-target marine species accidentally caught during commercial fishing operations, affecting dolphins, turtles, sharks, and many other species." },
        q6: { correct: "b", explanation: "Increased marine mammal populations are not a threat to coral reefs. Major threats include rising sea temperatures, ocean acidification, pollution, and destructive fishing practices." },
        q7: { correct: "b", explanation: "Ghost fishing occurs when abandoned, lost, or discarded fishing gear continues to trap and kill marine animals for years or even decades." },
        q8: { correct: "c", explanation: "Marine plants, particularly phytoplankton, produce about 70% of the Earth's oxygen, making ocean health critical for our atmosphere." },
        q9: { correct: "a", explanation: "Ocean dead zones are areas with extremely low oxygen levels (hypoxic) where marine life cannot survive, often caused by pollution and agricultural runoff." },
        q10: { correct: "b", explanation: "Scientifically determined catch limits are a sustainable fishing practice that helps ensure fish populations can maintain healthy reproduction rates." }
    };

    // Check each question
    Object.keys(answers).forEach((question) => {
        let selectedOption = document.querySelector(`input[name="${question}"]:checked`);
        let explanationElement = document.getElementById(`explain-${question}`);

        if (selectedOption) {
            let parentLabel = selectedOption.parentElement;

            if (selectedOption.value === answers[question].correct) {
                score++;
                explanationElement.style.display = "none"; // Hide explanation if correct

                // Add ✅ tick mark if not already added
                if (!parentLabel.querySelector(".tick")) {
                    let tickMark = document.createElement("span");
                    tickMark.textContent = " ✅";
                    tickMark.classList.add("tick");
                    tickMark.style.color = "green";
                    parentLabel.appendChild(tickMark);
                }
            } else {
                explanationElement.textContent = `❌ Incorrect. ${answers[question].explanation}`;
                explanationElement.style.color = "red";
                explanationElement.style.display = "block";
            }
        } else {
            explanationElement.textContent = "⚠ Please select an answer!";
            explanationElement.style.color = "orange";
            explanationElement.style.display = "block";
            allAnswered = false;
        }
    });

    // Display final score result
    let resultElement = document.getElementById("quiz-result");
    if (allAnswered) {
        resultElement.textContent = `✅ You scored ${score} out of ${totalQuestions}!`;
        resultElement.style.color = "green";
    } else {
        resultElement.textContent = "⚠ Please answer all questions before submitting.";
        resultElement.style.color = "red";
    }
});

// Smooth scrolling for sidebar links
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