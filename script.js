function feedCat() {
    var catImage = document.getElementById('cat');
    catImage.style.transform = 'scale(10)'; // 放大猫咪图像
    setTimeout(() => {
        catImage.style.transform = 'scale(1)'; // 恢复正常大小
    }, 500);
    // 在此可以添加更多喂食的交互逻辑
}

function petCat() {
    var catImage = document.getElementById('cat');
    catImage.style.transform = 'rotate(-900deg)'; // 小幅度旋转猫咪图像
    setTimeout(() => {
        catImage.style.transform = 'rotate(0deg)'; // 恢复不旋转
    }, 300);
    // 在此可以添加更多抚摸的交互逻辑
}