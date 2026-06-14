document.addEventListener('DOMContentLoaded', function () {

    const pages = {
        1: [
            { img: "assets/images/Mask%20Group%20(13).png", title: "Crochet Projects for Noodle Lovers", author: "assets/images/Ellipse%202%20(5).svg", name: "Wade Warren", date: "12 November 2021" },
            { img: "assets/images/Mask%20Group%20(9).png", title: "10 Vegetarian Recipes To Eat This Month", author: "assets/images/Ellipse%202%20(4).svg", name: "Robert Fox", date: "12 November 2021" },
            { img: "assets/images/Mask%20Group%20(2).png", title: "Full Guide to Becoming a Professional Chef", author: "assets/images/Ellipse%202%20(3).svg", name: "Dianne Russell", date: "12 November 2021" },
            { img: "assets/images/Mask%20Group%20(3).png", title: "Simple & Delicious Vegetarian Lasagna", author: "assets/images/Ellipse%202%20(2).svg", name: "leslie Alexander", date: "12 November 2021" },
            { img: "assets/images/Mask%20Group%20(4).png", title: "Plantain and Pinto Stew with Aji Verde", author: "assets/images/Ellipse%202%20(1).svg", name: "Courtney Henry", date: "12 November 2021" },
            { img: "assets/images/Mask%20Group%20(5).png", title: "We're Hiring a Communications Assistant!", author: "assets/images/Ellipse%202.svg", name: "Albert Flores", date: "12 November 2021" },
        ],
        2: [
            { img: "assets/images/Mask%20Group%20(4).png", title: "Plantain and Pinto Stew with Aji Verde", author: "assets/images/Ellipse%202%20(1).svg", name: "Courtney Henry", date: "15 January 2022" },
            { img: "assets/images/Mask%20Group%20(5).png", title: "We're Hiring a Communications Assistant!", author: "assets/images/Ellipse%202.svg", name: "Albert Flores", date: "20 February 2022" },
            { img: "assets/images/Mask%20Group%20(13).png", title: "Crochet Projects for Noodle Lovers", author: "assets/images/Ellipse%202%20(5).svg", name: "Wade Warren", date: "3 March 2022" },
            { img: "assets/images/Mask%20Group%20(2).png", title: "Full Guide to Becoming a Professional Chef", author: "assets/images/Ellipse%202%20(3).svg", name: "Dianne Russell", date: "10 April 2022" },
            { img: "assets/images/Mask%20Group%20(9).png", title: "10 Vegetarian Recipes To Eat This Month", author: "assets/images/Ellipse%202%20(4).svg", name: "Robert Fox", date: "5 May 2022" },
            { img: "assets/images/Mask%20Group%20(3).png", title: "Simple & Delicious Vegetarian Lasagna", author: "assets/images/Ellipse%202%20(2).svg", name: "leslie Alexander", date: "18 June 2022" },
        ],
        3: [
            { img: "assets/images/Mask%20Group%20(2).png", title: "Full Guide to Becoming a Professional Chef", author: "assets/images/Ellipse%202%20(3).svg", name: "Dianne Russell", date: "1 July 2022" },
            { img: "assets/images/Mask%20Group%20(3).png", title: "Simple & Delicious Vegetarian Lasagna", author: "assets/images/Ellipse%202%20(2).svg", name: "leslie Alexander", date: "8 August 2022" },
            { img: "assets/images/Mask%20Group%20(5).png", title: "We're Hiring a Communications Assistant!", author: "assets/images/Ellipse%202.svg", name: "Albert Flores", date: "22 September 2022" },
            { img: "assets/images/Mask%20Group%20(9).png", title: "10 Vegetaria n Recipes To Eat This Month", author: "assets/images/Ellipse%202%20(4).svg", name: "Robert Fox", date: "14 October 2022" },
            { img: "assets/images/Mask%20Group%20(13).png", title: "Crochet Projects for Noodle Lovers", author: "assets/images/Ellipse%202%20(5).svg", name: "Wade Warren", date: "30 November 2022" },
            { img: "assets/images/Mask%20Group%20(4).png", title: "Plantain and Pinto Stew with Aji Verde", author: "assets/images/Ellipse%202%20(1).svg", name: "Courtney Henry", date: "25 December 2022" },
        ]
    };

    function renderPage(pageNum) {
        const blogsContainer = document.querySelector('.blogs');
        const items = pages[pageNum];

        blogsContainer.innerHTML = items.map(item => `
            <div class="blog-card">
                <img src="${item.img}" alt="food">
                <div class="text">
                    <h3>${item.title}</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim</p>
                    <div class="author">
                        <img src="${item.author}" alt="person">
                        <span>${item.name}</span>
                        <div class="line"></div>
                        <span class="date">${item.date}</span>
                    </div>
                </div>
            </div>
        `).join('');
    }


    const paginationSpans = document.querySelectorAll('.pagination span');
    let currentPage = 1;

    function setActivePage(pageNum) {
        currentPage = pageNum;
        renderPage(pageNum);

        paginationSpans.forEach(span => {
            span.classList.remove('active');
            if (span.textContent == pageNum) {
                span.classList.add('active');
            }
        });

        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    paginationSpans.forEach(span => {
        const pageNum = parseInt(span.textContent);
        if (!isNaN(pageNum) && pages[pageNum]) {
            span.style.cursor = 'pointer';
            span.addEventListener('click', () => setActivePage(pageNum));
        }
    });

    const searchInput = document.getElementById('searchInput');

    searchInput.addEventListener('input', function () {
        const searchText = searchInput.value.toLowerCase().trim();
        const blogCards = document.querySelectorAll('.blog-card');

        blogCards.forEach(function (card) {
            const title = card.querySelector('h3').textContent.toLowerCase();
            card.style.display = title.includes(searchText) ? 'flex' : 'none';
        });
    });

    const menuLinks = document.querySelectorAll(".menu a");

    menuLinks[0].addEventListener("click", () => { window.location.href = "HomePage.html"; });
    menuLinks[1].addEventListener("click", () => { window.location.href = "RecipePage.html"; });
    menuLinks[2].addEventListener("click", () => { window.location.href = "BlogPage.html"; });
    menuLinks[3].addEventListener("click", () => { window.location.href = "ContactPage.html"; });

    renderPage(1);
});