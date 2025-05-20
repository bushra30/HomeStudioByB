// menu resposive
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});

// menu highlight
   // Highlight active nav link based on current URL
   const navLinks = document.querySelectorAll('.nav-links a');
   const currentPage = window.location.pathname.split("/").pop();
 
   navLinks.forEach(link => {
     const hrefPage = link.getAttribute('href').split("/").pop();
     if (hrefPage === currentPage) {
       link.classList.add('active');
     }
   });


// projects 1

    const container = document.querySelector('.comparison-container');
    const afterImg = document.querySelector('.after-img');
    const slider = document.querySelector('.slider');
  
    container.addEventListener('mousemove', (e) => {
      const rect = container.getBoundingClientRect();
      const offsetX = e.clientX - rect.left;
      const percentage = (offsetX / rect.width) * 100;
      afterImg.style.width = `${percentage}%`;
      slider.style.left = `${percentage}%`;
    });
  
    container.addEventListener('touchmove', (e) => {
      const rect = container.getBoundingClientRect();
      const offsetX = e.touches[0].clientX - rect.left;
      const percentage = (offsetX / rect.width) * 100;
      afterImg.style.width = `${percentage}%`;
      slider.style.left = `${percentage}%`;
    });

    const galleryImages = document.querySelectorAll('.gallery-grid img');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, { threshold: 0.1 });
  
    galleryImages.forEach(img => observer.observe(img));


    // index.html
   
  // page animation
  