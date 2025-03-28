document.getElementById("submit-btn").addEventListener("click", function () {
    let score = 0;
    let totalQuestions = 10;
    let allAnswered = true; // Track if all questions are answered

    // Correct answers and explanations for updated questions
    const answers = {
        q1: { correct: "b", explanation: "The largest contributor to global warming is the burning of fossil fuels, which releases greenhouse gases into the atmosphere." },
        q2: { correct: "c", explanation: "Melting ice caps raise sea levels, threatening coastal cities and habitats with flooding and erosion." },
        q3: { correct: "a", explanation: "Deforestation leads to increased carbon dioxide levels since trees absorb CO₂ during photosynthesis." },
        q4: { correct: "b", explanation: "Ocean acidification occurs when excess CO₂ is absorbed by seawater, making it more acidic and harming marine life." },
        q5: { correct: "c", explanation: "A carbon footprint measures the total greenhouse gas emissions caused directly and indirectly by an individual or organization." },
        q6: { correct: "a", explanation: "Switching to renewable energy sources like solar and wind helps reduce greenhouse gas emissions significantly." },
        q7: { correct: "b", explanation: "Climate refugees are people forced to leave their homes due to environmental changes such as rising sea levels and extreme weather." },
        q8: { correct: "c", explanation: "Coral bleaching happens when corals expel the algae living in their tissues due to higher water temperatures, causing them to turn white and weaken." },
        q9: { correct: "a", explanation: "Carbon capture and storage (CCS) is a technology that traps CO₂ emissions from industries and stores them underground to prevent them from entering the atmosphere." },
        q10: { correct: "b", explanation: "Afforestation is the process of planting trees in areas that were previously barren, helping to absorb CO₂ and combat climate change." }
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
