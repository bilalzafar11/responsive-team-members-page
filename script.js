// Scroll-to-top button
const scrollTopBtn = document.getElementById('scrollTopBtn');

window.onscroll = function () {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
};

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// Toggle between Interns and Mentors
const toggleButtons = document.querySelectorAll('.toggle-btn');
const memberCards = document.querySelectorAll('.team-member');

toggleButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const role = btn.dataset.role;

    memberCards.forEach(card => {
      if (role === 'all' || card.dataset.role === role) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });

    // Update active class
    toggleButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});

// Hover animation for social icons (Optional enhancement using JS)
const socialIcons = document.querySelectorAll('.social-icons a');

socialIcons.forEach(icon => {
  icon.addEventListener('mouseover', () => {
    icon.style.transform = "scale(1.2)";
  });
  icon.addEventListener('mouseout', () => {
    icon.style.transform = "scale(1)";
  });
});
