document.getElementById("submit-btn").addEventListener("click", function () {
    let score = 0;
    let totalQuestions = 10;
    let allAnswered = true; // Track if all questions are answered

    // Correct answers and explanations for wildlife conservation questions
    const answers = {
        q1: { correct: "c", explanation: "According to WWF's Living Planet Report 2022, global wildlife populations have declined by an average of 69% since 1970, a shocking indicator of the biodiversity crisis." },
        q2: { correct: "b", explanation: "Habitat loss due to agriculture, urban development, and deforestation is the primary threat to wildlife, affecting 85% of all threatened species." },
        q3: { correct: "b", explanation: "The IUCN Red List is the world's most comprehensive inventory of the global conservation status of biological species, assessing their extinction risk." },
        q4: { correct: "c", explanation: "Scientists estimate we're losing 150-200 species every day due to human activity, a rate 1,000 times higher than natural extinction rates." },
        q5: { correct: "c", explanation: "Tiger populations have plummeted from about 100,000 a century ago to around 3,900 today, primarily due to habitat loss and poaching." },
        q6: { correct: "b", explanation: "While all options help, protecting natural habitats is most effective as it preserves entire ecosystems and allows species to thrive in their natural environments." },
        q7: { correct: "b", explanation: "Approximately 15% of the Earth's land surface is currently protected, though conservationists argue this needs to increase to 30% to effectively preserve biodiversity." },
        q8: { correct: "a", explanation: "Bycatch refers to the accidental capture of non-target species like dolphins, sea turtles, and seabirds in fishing gear, a major threat to marine wildlife." },
        q9: { correct: "c", explanation: "About 75% of coral reefs are currently threatened by overfishing, pollution, and climate change, with projections reaching 90% by 2030 if trends continue." },
        q10: { correct: "a", explanation: "Wildlife corridors connect fragmented habitats, allowing animals to move between areas for feeding, mating, and migration, which is crucial for genetic diversity." }
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
        
        // Add encouraging message based on score
        if (score >= 8) {
            resultElement.textContent += " 🌿 Excellent! You're a wildlife conservation expert!";
        } else if (score >= 5) {
            resultElement.textContent += " 🐾 Good job! You know quite a bit about wildlife!";
        } else {
            resultElement.textContent += " 📚 Keep learning - every bit helps wildlife conservation!";
        }
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