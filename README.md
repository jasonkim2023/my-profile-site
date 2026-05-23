# 김찬희 프로필 웹사이트

항공대학교 학생 김찬희를 위한 개인 포트폴리오 웹사이트입니다.

## 📋 프로젝트 소개

모던하고 깔끔한 디자인의 단일 페이지 애플리케이션(SPA)으로, HTML, CSS, JavaScript를 사용하여 제작되었습니다.

**특징:**
- 반응형 디자인 (모바일, 태블릿, 데스크탑)
- 스무스 스크롤 네비게이션
- 인터랙티브 애니메이션
- 접근성 고려
- 빠른 로딩 속도

## 🛠 기술 스택

- **HTML5**: 시맨틱 마크업
- **CSS3 / Tailwind CSS CDN**: 반응형 스타일링
- **JavaScript (Vanilla)**: 인터랙션 및 애니메이션
- **Font Awesome CDN**: 아이콘
- **Google Fonts**: Poppins 폰트

## 📁 프로젝트 구조

```
my-profile-site/
├── index.html              # 메인 HTML 파일
├── css/
│   └── styles.css         # 커스텀 CSS 및 애니메이션
├── js/
│   ├── main.js            # 핵심 기능 (네비게이션, 폼)
│   └── animations.js      # 스크롤 애니메이션
└── README.md              # 이 파일
```

## 🚀 시작하기

### 설치 (선택사항)
프로젝트는 CDN을 사용하므로 별도의 설치가 필요 없습니다.

### 로컬에서 실행

1. **직접 열기:**
   - `index.html` 파일을 웹 브라우저로 직접 열기

2. **로컬 서버 사용 (권장):**
   ```bash
   # Python 3
   python -m http.server 8000

   # Python 2
   python -m SimpleHTTPServer 8000

   # Node.js (http-server 설치 필요)
   npx http-server
   ```

   그 후 `http://localhost:8000`에서 접속

## 📄 주요 섹션

### 1. Navigation (네비게이션)
- 고정 네비게이션 바
- 스크롤 시 배경색 변경
- 모바일 햄버거 메뉴

### 2. Hero (히어로 섹션)
- 그라디언트 배경
- 이름 표시
- 타이핑 애니메이션
- CTA 버튼

### 3. About (소개)
- 프로필 정보
- 자기소개 텍스트
- 2열 반응형 레이아웃

### 4. Skills (기술 스택)
- HTML, CSS, JavaScript 스킬 카드
- 프로그레스 바 애니메이션
- 호버 효과

### 5. Projects (프로젝트)
- 프로젝트 카드 갤러리
- 기술 스택 태그
- 반응형 그리드 레이아웃

### 6. Contact (연락처)
- 이메일 표시
- 컨택트 폼
- 폼 유효성 검사
- 소셜 미디어 링크

### 7. Footer (푸터)
- 저작권 정보
- 맨 위로 버튼

## ✨ 주요 기능

### JavaScript 기능
- ✅ 스무스 스크롤 네비게이션
- ✅ 네비게이션 스크롤 효과
- ✅ 타이핑 애니메이션
- ✅ Intersection Observer 기반 페이드인 효과
- ✅ 프로그레스 바 애니메이션
- ✅ 폼 검증
- ✅ 모바일 메뉴 토글
- ✅ 맨 위로 버튼

### CSS 애니메이션
- ✅ fadeInUp - 페이드인 업 애니메이션
- ✅ fadeIn - 페이드인 애니메이션
- ✅ 호버 효과 - 카드 확대, 그림자
- ✅ 전환 효과 - 부드러운 전환

## 🎨 디자인

### 컬러 팔레트
- **Primary**: Blue-600 (#2563eb)
- **Secondary**: Purple-600 (#9333ea)
- **Background**: Gray-50 (#f9fafb)
- **Dark**: Gray-900 (#111827)
- **Light**: White (#ffffff)

### 타이포그래피
- **폰트**: Poppins (Google Fonts)
- **제목**: 큰 크기 (text-4xl ~ text-7xl)
- **본문**: 일반 크기 (text-base ~ text-lg)

## 📱 반응형 디자인

### 브레이크포인트
- **Mobile**: < 640px (1열 레이아웃, 햄버거 메뉴)
- **Tablet**: 640px ~ 1024px (2열 그리드)
- **Desktop**: > 1024px (3열 그리드, 수평 네비게이션)

## 🔍 브라우저 호환성

- ✅ Chrome (최신 버전)
- ✅ Firefox (최신 버전)
- ✅ Safari (최신 버전)
- ✅ Edge (최신 버전)
- ✅ Mobile 브라우저

## 📦 배포

### GitHub Pages
```bash
# 저장소 생성 및 커밋
git init
git add .
git commit -m "초기 커밋"
git branch -M main
git remote add origin https://github.com/username/my-profile-site.git
git push -u origin main

# Settings → Pages → Main branch 선택
```

### Netlify
1. Netlify.com에 가입
2. "New site from Git" 선택
3. GitHub 저장소 연결
4. 자동 배포 설정

### Vercel
1. Vercel.com에 가입
2. GitHub 저장소 임포트
3. 자동 배포 설정

## 🛡️ 접근성

- ✅ 시맨틱 HTML 마크업
- ✅ Alt 속성 제공
- ✅ 적절한 색상 대비
- ✅ 키보드 네비게이션 지원
- ✅ ARIA 레이블 (선택사항)

## 🚦 성능 최적화

- ✅ CDN을 통한 빠른 로딩
- ✅ 부드러운 애니메이션
- ✅ 효율적인 이벤트 리스너
- ✅ Intersection Observer 사용

## 🎯 향후 개선 계획

- [ ] 다크 모드 토글
- [ ] 프로젝트 모달/상세 페이지
- [ ] 블로그 섹션 추가
- [ ] 다국어 지원
- [ ] 백엔드 폼 제출
- [ ] 방문자 분석 (Google Analytics)
- [ ] PWA 지원

## 📝 커스터마이징

### 개인 정보 변경
`index.html`에서 다음 내용을 수정하세요:
- 이름: "김찬희" → 본인 이름
- 직업: "항공대학교 학생" → 본인 직업
- 이메일: "goodboy@gmail.com" → 본인 이메일
- 프로젝트 정보: 본인 프로젝트로 변경

### 컬러 변경
`css/styles.css` 또는 Tailwind 클래스를 수정하여 색상 변경

### 폰트 변경
Google Fonts에서 다른 폰트를 선택하여 변경

## 🤝 기여

이 프로젝트는 개인 포트폴리오 용도로 제작되었습니다.

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다.

## 👨‍💻 작성자

**김찬희**
- 이메일: goodboy@gmail.com
- 학교: 항공대학교

## 🙏 감사

- [Tailwind CSS](https://tailwindcss.com/) - CSS 프레임워크
- [Font Awesome](https://fontawesome.com/) - 아이콘 라이브러리
- [Google Fonts](https://fonts.google.com/) - 웹 폰트

## 📞 연락처

이 프로젝트에 대한 질문이나 피드백이 있으시면 언제든 연락주세요:
- 이메일: goodboy@gmail.com
- 웹사이트: [여기를 클릭하세요](#)

---

**마지막 업데이트:** 2024년 5월 22일
