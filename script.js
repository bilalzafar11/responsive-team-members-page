// 📌 Show/hide the scroll-to-top button on scroll
const scrollTopBtn = document.getElementById('scrollTopBtn');

window.onscroll = function () {
  const scrollY = window.scrollY || document.documentElement.scrollTop;
  scrollTopBtn.style.display = scrollY > 300 ? "block" : "none";
};

// 🔝 Scroll to top smoothly on button click
scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// 🔄 Toggle team members based on role (All, Interns, Mentors)
const toggleButtons = document.querySelectorAll('.toggle-btn');
const memberCards = document.querySelectorAll('.team-member');

toggleButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const selectedRole = btn.dataset.role;

    memberCards.forEach(card => {
      const isMatch = selectedRole === 'all' || card.dataset.role === selectedRole;
      card.style.display = isMatch ? "block" : "none";
    });

    // Update active button styling
    toggleButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});

// 🎯 Optional: Hover zoom effect for social media icons
const socialIcons = document.querySelectorAll('.social-icons a');

socialIcons.forEach(icon => {
  icon.addEventListener('mouseenter', () => {
    icon.style.transform = "scale(1.2)";
  });
  icon.addEventListener('mouseleave', () => {
    icon.style.transform = "scale(1)";
  });
});
