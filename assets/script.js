// Intersection Observer to detect when the about section comes into view
const zoomElements = document.querySelectorAll('.zoom-in');
const counters = document.querySelectorAll('.count'); // Select all counters

const observerOptions = {
  root: null, // Use the viewport as the root
  rootMargin: '0px',
  threshold: 0.1 // Trigger when 10% of the element is in view
};

const zoomInObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Trigger the zoom-in animation
      entry.target.classList.remove('hidden');
      entry.target.classList.add('zoom-in');

      // Start the counting animation
      animateCountUp();

      observer.unobserve(entry.target); // Stop observing once the element has come into view
    }
  });
}, observerOptions);

// Start observing each element with the 'zoom-in' class
zoomElements.forEach(element => {
  zoomInObserver.observe(element);
});

// Function to animate counting numbers
function animateCountUp() {
  counters.forEach(counter => {
    const target = +counter.getAttribute('data-target'); // Get the target number
    const increment = target / 100; // Calculate increment value for smooth animation

    const updateCount = () => {
      const current = +counter.innerText.replace('+', ''); // Remove "+" for calculation
      if (current < target) {
        counter.innerText = `${Math.ceil(current + increment)}+`; // Increment the number and add "+"
        setTimeout(updateCount, 20); // Call again after 20ms
      } else {
        counter.innerText = `${target}+`; // Ensure the final number matches the target
      }
    };

    updateCount();
  });
}

const hamburgerMenu = document.getElementById('hamburger-menu');
  const nav = document.getElementById('nav');
  const navLinks = nav.querySelectorAll('a');

  // Toggle menu open/close
  hamburgerMenu.addEventListener('click', () => {
    nav.classList.toggle('open');
  });

  // Close menu when a link is clicked
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
    });
  });

const images = document.querySelectorAll('.hero img');
let currentIndex = 0;

function showNextImage() {
  images[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + 1) % images.length;
  images[currentIndex].classList.add('active');
}

setInterval(showNextImage, 2000); // Change image every 5 seconds

