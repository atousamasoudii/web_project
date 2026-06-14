document.addEventListener('DOMContentLoaded', function () {

    const menuLinks = document.querySelectorAll(".menu a");

    menuLinks[0].addEventListener("click", () => { window.location.href = "HomePage.html"; });
    menuLinks[1].addEventListener("click", () => { window.location.href = "RecipePage.html"; });
    menuLinks[2].addEventListener("click", () => { window.location.href = "BlogPage.html"; });
    menuLinks[3].addEventListener("click", () => { window.location.href = "ContactPage.html"; });

    const cards = document.querySelectorAll('.recipe-card, .items, .blog-card');

    cards.forEach(function (card) {
        card.style.cursor = 'pointer';
        card.addEventListener('click', function () {
            window.location.href = 'RecipePage.html';
        });
    });

});