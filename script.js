function feedCat() {
    var catImage = document.getElementById('cat');
    catImage.style.transform = 'scale(10)';
    setTimeout(() => {
        catImage.style.transform = 'scale(1)';
    }, 500);
}

function petCat() {
    var catImage = document.getElementById('cat');
    catImage.style.transform = 'rotate(-900deg)';
    setTimeout(() => {
        catImage.style.transform = 'rotate(0deg)';
    }, 300);
}
