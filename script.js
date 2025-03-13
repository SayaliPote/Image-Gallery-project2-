// Welcome Prompt
const userName = prompt("Hello! What's your name?");
const welcomeMessage = document.getElementById("welcomeMessage");
if (userName) {
    welcomeMessage.textContent = `Hello ${userName}, welcome to the Temple Image Gallery!`;
} else {
    welcomeMessage.textContent = "Welcome to the Temple Image Gallery!";
}

// Filter Images by City
const filterButtons = document.querySelectorAll(".filter-buttons button");
const imageCards = document.querySelectorAll(".image-card");

filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        const filter = button.getAttribute("data-filter");

        imageCards.forEach(card => {
            const city = card.getAttribute("data-city");
            if (filter === "all" || filter === city) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
});
function searchTemple() {
    const searchTerm = document.getElementById("searchInput").value.toLowerCase();
    const imageCards = document.querySelectorAll(".image-card");

    imageCards.forEach(card => {
        const templeName = card.querySelector("p").textContent.toLowerCase();
        if (templeName.includes(searchTerm)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}

// Lightbox Functionality
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxCaption = document.querySelector(".caption");
const closeBtn = document.querySelector(".close");

imageCards.forEach(card => {
    card.addEventListener("click", () => {
        const imgSrc = card.querySelector("img").src;
        const captionText = card.querySelector("p").textContent;
        lightboxImg.src = imgSrc;
        lightboxCaption.textContent = captionText;
        lightbox.style.display = "block";
    });
});

closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
});

lightbox.addEventListener("click", (e) => {
    if (e.target !== lightboxImg) {
        lightbox.style.display = "none";
    }
});

// Back to Top Button
const backToTopButton = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
});

backToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});