document.getElementById("submit-btn").addEventListener("click", function () {
    let score = 0;
    let totalQuestions = 10;
    let allAnswered = true; // Track if all questions are answered

    // Correct answers and explanations for updated questions
    const answers = {
        q1: { correct: "a", explanation: "Only 9% of global waste is recycled, highlighting the critical need for improved waste management and recycling infrastructure worldwide." },
        q2: { correct: "b", explanation: "Agriculture consumes approximately 70% of global freshwater resources, making it the most water-intensive industry on the planet." },
        q3: { correct: "a", explanation: "A circular economy aims to minimize waste and maximize resource use by designing out waste and keeping materials in continuous use." },
        q4: { correct: "b", explanation: "Globally, about 33% of food produced is wasted, representing a massive inefficiency in our food systems and significant environmental impact." },
        q5: { correct: "b", explanation: "Greenwashing is a marketing strategy where companies falsely claim to be environmentally friendly to capitalize on growing consumer environmental consciousness." },
        q6: { correct: "c", explanation: "Insects are considered the most sustainable protein source due to their extremely low environmental footprint and high nutritional value." },
        q7: { correct: "b", explanation: "Carbon neutral means balancing carbon emissions with carbon removal, typically through offsetting or renewable energy investments." },
        q8: { correct: "a", explanation: "Only about 5% of global plastic is actually recycled, with the majority ending up in landfills or natural environments." },
        q9: { correct: "b", explanation: "Reducing overall consumption is the most effective individual sustainability action, directly minimizing resource use and waste generation." },
        q10: { correct: "b", explanation: "Ecosystem services are the direct and indirect benefits humans receive from natural ecosystems, such as clean air, water purification, and climate regulation." }
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