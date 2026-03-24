// SMOOTH NAVIGATION USING DATA ATTRIBUTE
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

// CATEGORY INTERACTION (highlight effect)
document.querySelectorAll(".category").forEach(category => {
    category.addEventListener("click", () => {
        category.style.background = "#cdb4db";
        category.style.color = "white";

        setTimeout(() => {
            category.style.background = "#f7c8e0";
            category.style.color = "#4a4a4a";
        }, 300);
    });
});