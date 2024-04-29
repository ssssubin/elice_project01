const slides = document.querySelectorAll('.slider .slide');
const dots = document.querySelectorAll('.dotList p');
let currentIdx = 0;
const rightBtn = document.querySelector('.right');
const leftBtn = document.querySelector('.left');

// 클릭 슬라이더
rightBtn.addEventListener('click', function () {
  moveSlide((currentIdx + 1) % slides.length);
});

leftBtn.addEventListener('click', function () {
  moveSlide((currentIdx - 1 + slides.length) % slides.length);
});

// 점으로 클릭
dots.forEach((dot, idx) => {
  dot.addEventListener('click', function () {
    moveSlide(idx)
  })
})

// 자동 슬라이더
let intervalId;

function startAutoSlide() {
  intervalId = setInterval(function () {
    moveSlide((currentIdx + 1) % slides.length);
  }, 4000);
}

function stopAutoSlide() {
  clearInterval(intervalId);
}

startAutoSlide();

function moveSlide(nextIdx) {
  const currentSlide = slides[currentIdx];
  const nextSlide = slides[nextIdx];


  currentSlide.animate(
    {
      opacity: [1, 0.6],
    },
    {
      duration: 700,
      easing: 'ease-in-out',
      iterations: 1,
      fill: 'both',
    },
  );
  currentSlide.classList.remove('active');
  dots[currentIdx].classList.remove('active');

  nextSlide.animate(
    {
      opacity: [0.6, 1],
    },
    {
      duration: 700,
      easing: 'ease-in-out',
      iterations: 1,
      fill: 'both',
    },
  );
  nextSlide.classList.add('active');
  dots[nextIdx].classList.add('active');

  // 현재 인덱스 업데이트
  currentIdx = nextIdx;
}
