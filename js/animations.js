// 타이핑 애니메이션
const typingText = document.getElementById('typing-text');
const fullText = '멋지고 스마트한 항공대학교 최고의 인재';
let charIndex = 0;

function typeWriter() {
  if (charIndex < fullText.length) {
    typingText.textContent += fullText.charAt(charIndex);
    charIndex++;
    setTimeout(typeWriter, 100);
  }
}

// 페이지 로드 시 타이핑 시작
window.addEventListener('load', () => {
  setTimeout(typeWriter, 800);
});

// Intersection Observer를 사용한 스크롤 애니메이션
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-fadeIn');

      // Skills 섹션인 경우 프로그레스 바 애니메이션
      if (entry.target.id === 'skills') {
        animateSkills();
      }

      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// 모든 섹션 관찰
document.querySelectorAll('section').forEach(section => {
  // home 섹션은 이미 화면에 보이므로 관찰하지 않음
  if (section.id !== 'home') {
    observer.observe(section);
  }
});

// 스킬 프로그레스 바 애니메이션
function animateSkills() {
  const skillBars = document.querySelectorAll('.skill-progress');

  skillBars.forEach((bar, index) => {
    const width = bar.getAttribute('data-width');

    setTimeout(() => {
      bar.style.width = width + '%';
    }, 100 * (index + 1));
  });
}

// 프로젝트 카드 인터랙션
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
  card.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-10px) scale(1.02)';
  });

  card.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0) scale(1)';
  });

  // 모바일에서도 반응하도록 터치 이벤트 추가
  card.addEventListener('touchstart', function() {
    this.style.transform = 'translateY(-10px) scale(1.02)';
  });

  card.addEventListener('touchend', function() {
    this.style.transform = 'translateY(0) scale(1)';
  });
});

// 스크롤 시 부드러운 페이드인 효과
const scrollElements = document.querySelectorAll('[data-scroll]');

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement = () => {
  scrollElements.forEach((element) => {
    if (elementInView(element, 1.25)) {
      element.classList.add('animate-fadeIn');
    }
  });
};

// 초기 실행
displayScrollElement();

// 스크롤 이벤트
window.addEventListener('scroll', displayScrollElement);

// 리사이즈 이벤트 처리
window.addEventListener('resize', displayScrollElement);

// Hero 섹션 배경 애니메이션 (고급 효과)
const heroSection = document.getElementById('home');

if (heroSection) {
  window.addEventListener('mousemove', (e) => {
    // 마우스 이동에 따른 미묘한 배경 효과
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    // 주석: 마우스 이동에 따른 배경 효과는 성능을 고려하여 선택적으로 사용
    // heroSection.style.backgroundPosition = `${x * 10}% ${y * 10}%`;
  });
}

// 네비게이션 메뉴 활성 링크 표시 (추가)
function updateActiveNavLink() {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('nav a[href^="#"]');

  let currentSectionId = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.offsetHeight;

    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      currentSectionId = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('border-b-2', 'border-blue-400');

    if (currentSectionId && link.getAttribute('href') === `#${currentSectionId}`) {
      link.classList.add('border-b-2', 'border-blue-400');
    }
  });
}

window.addEventListener('scroll', updateActiveNavLink);

// 페이지 언로드 시 스크롤 위치 저장 (선택사항)
window.addEventListener('unload', () => {
  sessionStorage.setItem('scrollPosition', window.scrollY);
});

// 페이지 로드 시 스크롤 위치 복원 (선택사항)
window.addEventListener('load', () => {
  const savedScrollPosition = sessionStorage.getItem('scrollPosition');
  if (savedScrollPosition !== null) {
    // 복원하지 않고 맨 위에서 시작하도록 설정
    window.scrollTo(0, 0);
  }
});

// 문서 준비 완료
document.addEventListener('DOMContentLoaded', () => {
  // 모든 이미지에 로딩 효과 추가 (선택사항)
  const images = document.querySelectorAll('img');

  images.forEach(img => {
    img.addEventListener('load', () => {
      img.classList.add('loaded');
    });
  });

  // 성능 모니터링 (개발용)
  if (process?.env?.NODE_ENV === 'development') {
    console.log('프로필 웹사이트 로드 완료');
  }
});

// 부드러운 스크롤 엑셀러레이션 (선택사항)
let scrollSpeed = 0;
let targetScroll = 0;

window.addEventListener('wheel', (e) => {
  // 브라우저 기본 동작 사용 (부드러운 스크롤)
});
