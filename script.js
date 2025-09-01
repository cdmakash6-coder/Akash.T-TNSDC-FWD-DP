// Smooth scrolling for nav links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});

// Create a Back-to-Top button dynamically
const topButton = document.createElement('button');
topButton.textContent = "↑ Top";
topButton.style.position = 'fixed';
topButton.style.bottom = '20px';
topButton.style.right = '20px';
topButton.style.padding = '10px 15px';
topButton.style.fontSize = '16px';
topButton.style.background = '#333';
topButton.style.color = '#fff';
topButton.style.border = 'none';
topButton.style.borderRadius = '5px';
topButton.style.cursor = 'pointer';
topButton.style.display = 'none'; // hidden by default
document.body.appendChild(topButton);

// Show button only when scrolled down
window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    topButton.style.display = 'block';
  } else {
    topButton.style.display = 'none';
  }
});

// Scroll to top when button is clicked
topButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});