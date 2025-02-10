document.querySelector('.contact-btn').addEventListener('click', () => {
    console.log("contact us button clicked")
})

function openModal(img) {
    console.log("open modal ran")
    if (!img || !img.src) return; // Prevent opening modal if img is undefined or empty
    document.getElementById("imageModal").style.display = "flex";
    document.getElementById("modalImg").src = img.src;
}


function closeModal() {
    document.getElementById("imageModal").style.display = "none";
}

document.getElementById("imageModal").addEventListener("click", function(event) {
    if (event.target === this) {
        closeModal();
    }
});

// Get all card elements
const cards = document.getElementsByClassName('cards');

Array.from(cards).forEach(card => {
    const img = card.querySelector("img");
    if (img) { 
        img.onclick = () => openModal(img)
    }
});

document.querySelector('.close').addEventListener('click', () => {
    closeModal()
})