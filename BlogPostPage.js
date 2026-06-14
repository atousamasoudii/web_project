document.addEventListener('DOMContentLoaded', function () {

    const cardWrap = document.querySelector('.card-wrap');
    const grid = document.querySelector('.card-wrap .card-grid');

    const prevBtn = document.createElement('button');
    const nextBtn = document.createElement('button');
    prevBtn.innerHTML = '&#8592;';
    nextBtn.innerHTML = '&#8594;';

    prevBtn.style.cssText = 'width:45px;height:45px;border-radius:50%;border:2px solid #ddd;background:#fff;font-size:18px;cursor:pointer;margin-right:10px;';
    nextBtn.style.cssText = 'width:45px;height:45px;border-radius:50%;border:2px solid #ddd;background:#fff;font-size:18px;cursor:pointer;';

    cardWrap.insertBefore(prevBtn, grid);
    cardWrap.insertBefore(nextBtn, grid);

    grid.style.display = 'flex';
    grid.style.gap = '20px';
    grid.style.transition = 'transform 0.4s ease';
    cardWrap.style.overflow = 'hidden';

    const items = grid.querySelectorAll('.items');
    items.forEach(item => {
        item.style.minWidth = '280px';
        item.style.flexShrink = '0';
    });

    const cardWidth = 300;
    let currentIndex = 0;
    const maxIndex = items.length - 3;

    nextBtn.addEventListener('click', function () {
        if (currentIndex < maxIndex) {
            currentIndex++;
            grid.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
        }
    });

    prevBtn.addEventListener('click', function () {
        if (currentIndex > 0) {
            currentIndex--;
            grid.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
        }
    });

});