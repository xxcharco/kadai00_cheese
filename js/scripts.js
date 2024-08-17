// スライドショーの機能
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function nextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}

setInterval(nextSlide, 3000); // 3秒ごとに次のスライドに切り替え

// フォームの検証
document.getElementById('contactForm').addEventListener('submit', function(event) {
    const email = document.getElementById('email').value;
    const source = document.getElementById('source').value;

    if (!email || !source) {
        alert('全てのフィールドを入力してください');
        event.preventDefault(); // フォーム送信を停止
    }
});
