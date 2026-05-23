// DOM 요소 선택
const navbar = document.getElementById('navbar');
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const scrollTopBtn = document.getElementById('scroll-top');
const contactForm = document.getElementById('contact-form');

// 네비게이션 스크롤 효과
window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    navbar.classList.add('bg-white', 'shadow-lg');
    navbar.classList.remove('bg-transparent');

    // 텍스트 색상 변경
    const logo = navbar.querySelector('.text-2xl');
    const navLinks = navbar.querySelectorAll('a');
    const menuIcon = navbar.querySelector('#menu-btn');

    logo.classList.remove('text-white');
    logo.classList.add('text-gray-900');

    navLinks.forEach(link => {
      link.classList.remove('text-white');
      link.classList.add('text-gray-900');
    });

    if (menuIcon) {
      menuIcon.classList.remove('text-white');
      menuIcon.classList.add('text-gray-900');
    }
  } else {
    navbar.classList.remove('bg-white', 'shadow-lg');
    navbar.classList.add('bg-transparent');

    // 텍스트 색상 되돌리기
    const logo = navbar.querySelector('.text-2xl');
    const navLinks = navbar.querySelectorAll('a');
    const menuIcon = navbar.querySelector('#menu-btn');

    logo.classList.add('text-white');
    logo.classList.remove('text-gray-900');

    navLinks.forEach(link => {
      link.classList.add('text-white');
      link.classList.remove('text-gray-900');
    });

    if (menuIcon) {
      menuIcon.classList.add('text-white');
      menuIcon.classList.remove('text-gray-900');
    }
  }
});

// 모바일 메뉴 토글
menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

// 스무스 스크롤 및 모바일 메뉴 닫기
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href');
    const target = document.querySelector(targetId);

    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });

      // 모바일 메뉴 닫기
      if (!mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.add('hidden');
      }
    }
  });
});

// 맨 위로 버튼
scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// 폼 제출 처리
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  // 유효성 검사
  if (!name || !email || !message) {
    alert('모든 필드를 입력해주세요.');
    return;
  }

  if (!isValidEmail(email)) {
    alert('올바른 이메일 주소를 입력해주세요.');
    return;
  }

  // mailto 링크로 이메일 클라이언트 열기
  const subject = encodeURIComponent(`${name}님의 문의`);
  const body = encodeURIComponent(`이름: ${name}\n이메일: ${email}\n\n메시지:\n${message}`);
  const mailtoLink = `mailto:goodboy@gmail.com?subject=${subject}&body=${body}`;

  window.location.href = mailtoLink;

  // 폼 초기화
  contactForm.reset();
  alert('메시지가 준비되었습니다. 이메일 클라이언트에서 전송해주세요.');
});

// 이메일 유효성 검사 함수
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// 현재 섹션 하이라이트
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a[href^="#"]');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (scrollY >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('border-b-2', 'border-blue-400');

    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('border-b-2', 'border-blue-400');
    }
  });
});

// 페이지 로드 완료 시 초기화
window.addEventListener('load', () => {
  // 애니메이션 클래스 제거 (CSS에서 처리하도록)
  const animatedElements = document.querySelectorAll('.animate-fadeInUp, .animate-fadeIn');
  animatedElements.forEach(el => {
    el.classList.add('animate-fadeInUp');
  });
});
