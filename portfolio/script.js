// 부드러운 스크롤 이동 함수
// 네비게이션 메뉴 클릭 시 해당 섹션으로 부드럽게 이동
const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    // 기본 동작 막기
    e.preventDefault();
    // 이동할 섹션 id 추출
    const targetId = this.getAttribute('href').replace('#', '');
    const targetSection = document.getElementById(targetId);
    // 해당 섹션으로 부드럽게 스크롤
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 10,
        behavior: 'smooth'
      });
    }
  });
});

// 이력서 다운로드 함수 (Contact, Home 등에서 사용)
function downloadResume() {
  // 이력서 PDF 파일 다운로드 트리거
  window.open('resume.pdf', '_blank');
} 