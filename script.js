// NAVIGATION SCROLL
document.querySelectorAll(".nav-links li").forEach((item, index) => {
    item.addEventListener("click", () => {
        const sections = ["hero", "featured", "tips", "footer"];
        document.querySelector(`.${sections[index]}`).scrollIntoView({
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

// CATEGORY CLICK (basic interaction)
document.querySelectorAll(".category").forEach(category => {
    category.addEventListener("click", () => {
        alert(`Showing ${category.textContent} items 🐰`);
    });
});
