// Smooth scrolling for internal navigation links
document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("nav a");

    links.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();

            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50,
                    behavior: "smooth",
                });
            }
        });
    });
});

// Animation for article content
const animateArticle = () => {
    const article = document.querySelector("article");
    const rect = article.getBoundingClientRect();

    if (rect.top < window.innerHeight) {
        article.style.opacity = 1;
        article.style.transform = "translateY(0)";
    }
};

window.addEventListener("scroll", animateArticle);

// Set initial animation state
document.addEventListener("DOMContentLoaded", () => {
    const article = document.querySelector("article");
    article.style.opacity = 0;
    article.style.transform = "translateY(30px)";
});