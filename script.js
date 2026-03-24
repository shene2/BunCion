// NAVIGATION
document.querySelectorAll(".nav-links li").forEach(item => {
    item.addEventListener("click", () => {
        const section = item.getAttribute("data-section");
        document.querySelector(`.${section}`).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// HERO BUTTON
document.querySelector(".btn").addEventListener("click", () => {
    document.querySelector(".featured").scrollIntoView({
        behavior: "smooth"
    });
});

// CATEGORY FILTER SYSTEM
const categories = document.querySelectorAll(".category");
const cards = document.querySelectorAll(".card");

categories.forEach(cat => {
    cat.addEventListener("click", () => {

        const selected = cat.getAttribute("data-category");

        // Highlight selected
        categories.forEach(c => c.classList.remove("active"));
        cat.classList.add("active");

        // Filter cards
        cards.forEach(card => {
            if (card.getAttribute("data-category") === selected) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });

    });
});