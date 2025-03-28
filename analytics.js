document.addEventListener("DOMContentLoaded", function () {
    // Assignments Completed Per Day
    const assignmentsChart = new Chart(document.getElementById("assignmentsChart"), {
        type: "bar",
        data: {
            labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            datasets: [{
                label: "Assignments Done",
                data: [3, 4, 2, 5, 6, 7, 4],
                backgroundColor: "#4CAF50"
            }]
        }
    });

    // Answers Correct Per Quiz
    const quizChart = new Chart(document.getElementById("quizChart"), {
        type: "line",
        data: {
            labels: ["Quiz 1", "Quiz 2", "Quiz 3", "Quiz 4", "Quiz 5"],
            datasets: [{
                label: "Correct Answers",
                data: [8, 9, 7, 10, 6],
                borderColor: "#FF5722",
                borderWidth: 2,
                fill: false
            }]
        }
    });
});
