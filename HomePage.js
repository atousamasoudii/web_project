const menuLinks = document.querySelectorAll(".menu a");

menuLinks[0].addEventListener("click", () => {
    window.location.href = "HomePage.html";
});

menuLinks[1].addEventListener("click", () => {
    window.location.href = "RecipePage.html";
});

menuLinks[2].addEventListener("click", () => {
    window.location.href = "BlogPage.html";
});

menuLinks[3].addEventListener("click", () => {
    window.location.href = "ContactPage.html";
});
document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.hero-footer button');

    if (buttons.length > 0) {
        buttons[0].addEventListener('click', function () {
            window.location.href = 'RecipePage.html';
        });
    } else {
        console.log('Error!');
    }
});