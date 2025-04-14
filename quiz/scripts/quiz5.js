document.getElementById("submit-btn").addEventListener("click", function () {
    let score = 0;
    let totalQuestions = 10;
    let allAnswered = true; // Track if all questions are answered

    // Correct answers and explanations for wildlife conservation questions
    const answers = {
        q1: { correct: "c", explanation: "According to recent assessments, about 25% of all species are currently threatened with extinction, highlighting the urgent need for conservation efforts worldwide." },
        q2: { correct: "b", explanation: "Habitat loss is the primary driver of extinction, as natural landscapes are converted for agriculture, urban development, and resource extraction." },
        q3: { correct: "a", explanation: "Biodiversity hotspots are regions with exceptional concentrations of endemic species (found nowhere else) that are experiencing severe habitat loss." },
        q4: { correct: "b", explanation: "Approximately 25 elephants are killed daily for their ivory, despite international bans on ivory trade. This continues to threaten elephant populations across Africa." },
        q5: { correct: "b", explanation: "Wildlife trafficking is the illegal trade in wildlife products or live animals, worth billions annually and threatening countless species with extinction." },
        q6: { correct: "c", explanation: "On the IUCN Red List, 'Critically Endangered' indicates the highest risk of extinction in the wild, followed by 'Endangered' and then 'Vulnerable'." },
        q7: { correct: "b", explanation: "Apex predators sit at the top of food chains with no natural predators. Their removal often triggers trophic cascades affecting entire ecosystems." },
        q8: { correct: "a", explanation: "Only about 8% of the world's oceans are designated as protected areas, far below the 30% target many scientists recommend for marine ecosystem health." },
        q9: { correct: "a", explanation: "Keystone species have disproportionately large effects on their ecosystems relative to their abundance. Their removal often leads to dramatic ecosystem changes." },
        q10: { correct: "b", explanation: "Rewilding focuses on restoring ecosystems by reintroducing key species and allowing natural processes to resume with minimal human intervention." }
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