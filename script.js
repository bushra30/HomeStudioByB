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
  // Page transition handling
const transitionKey = 'doPageTransition';

// Only run animation if navigation was triggered
window.addEventListener('DOMContentLoaded', () => {
  // Add page-enter class to trigger animations
  document.body.classList.add('page-enter');
  
  // If this is a direct page load (not a transition), show content immediately
  if (sessionStorage.getItem(transitionKey) !== 'true') {
    document.body.style.opacity = '1';
    document.body.style.transform = 'none';
  } else {
    // Clear the transition flag
    sessionStorage.removeItem(transitionKey);
  }
});

// Attach click handler to all internal links
document.querySelectorAll('a').forEach(link => {
  const href = link.getAttribute('href');
  
  // Skip external, anchors, javascript, or blank links
  const isInternal = href && 
    !href.startsWith('http') && 
    !href.startsWith('#') && 
    !href.startsWith('javascript') &&
    !href.startsWith('mailto:') &&
    !href.startsWith('tel:');
    
  if (!isInternal) return;

  link.addEventListener('click', e => {
    e.preventDefault();
    
    // Prevent double-triggering
    if (sessionStorage.getItem(transitionKey) === 'true') return;
    
    const url = link.href;
    
    // Set transition flag
    sessionStorage.setItem(transitionKey, 'true');
    
    // Start exit animation
    document.body.classList.remove('page-enter');
    document.body.style.opacity = '0';
    document.body.style.transform = 'translateY(30px)';
    
    // Navigate after animation
    setTimeout(() => {
      window.location.href = url;
    }, 800); // Match the transition duration
  });
});
  
// Page Transitions
document.addEventListener('DOMContentLoaded', () => {
    // Activate page transitions
    const pageElements = document.querySelectorAll('.page-transition');
    const overlay = document.querySelector('.transition-overlay');
    
    // Show content with animation
    setTimeout(() => {
        pageElements.forEach(element => {
            element.classList.add('active');
        });
    }, 100);

    // Handle page transitions
    const links = document.querySelectorAll('a[href^="./"]:not([href^="./#"]):not([href$=".png"])');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            if (link.hostname === window.location.hostname) {
                e.preventDefault();
                const targetUrl = link.getAttribute('href');
                
                // Activate overlay
                overlay.classList.add('active');
                
                // Fade out current page
                pageElements.forEach(element => {
                    element.classList.remove('active');
                });
                
                // Navigate to new page after animation
                setTimeout(() => {
                    window.location.href = targetUrl;
                }, 300);
            }
        });
    });
});
  
// Page Transition Handler
class PageTransition {
  constructor() {
    this.init();
  }

  init() {
    // Create transition overlay if it doesn't exist
    if (!document.querySelector('.transition-overlay')) {
      const overlay = document.createElement('div');
      overlay.className = 'transition-overlay';
      document.body.appendChild(overlay);
    }

    // Initialize page transition
    const pageTransition = document.querySelector('.page-transition');
    const transitionOverlay = document.querySelector('.transition-overlay');
    
    // Show page content with transition
    setTimeout(() => {
      if (pageTransition) {
        pageTransition.classList.add('active');
      }
    }, 100);

    // Handle all internal navigation links
    document.querySelectorAll('a[href^="./"]').forEach(link => {
      link.addEventListener('click', (e) => this.handleNavigation(e, link));
    });

    // Handle browser back/forward buttons
    window.addEventListener('popstate', () => {
      this.handlePageLoad();
    });
  }

  handleNavigation(e, link) {
    // Don't handle clicks on dropdown menu items or external links
    if (link.closest('.dropdown-menu') || link.getAttribute('target') === '_blank') {
      return;
    }

    e.preventDefault();
    const href = link.getAttribute('href');
    
    // Activate transition overlay
    const transitionOverlay = document.querySelector('.transition-overlay');
    const pageTransition = document.querySelector('.page-transition');
    
    if (transitionOverlay && pageTransition) {
      transitionOverlay.classList.add('active');
      pageTransition.classList.remove('active');
      
      // Navigate to new page after transition
      setTimeout(() => {
        window.location.href = href;
      }, 400);
    } else {
      window.location.href = href;
    }
  }

  handlePageLoad() {
    const pageTransition = document.querySelector('.page-transition');
    const transitionOverlay = document.querySelector('.transition-overlay');
    
    if (pageTransition && transitionOverlay) {
      // Reset overlay
      transitionOverlay.classList.remove('active');
      
      // Show new page content
      setTimeout(() => {
        pageTransition.classList.add('active');
      }, 100);
    }
  }
}

// Initialize page transitions when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new PageTransition();
});

// Handle page load events
window.addEventListener('load', () => {
  const pageTransition = document.querySelector('.page-transition');
  if (pageTransition) {
    pageTransition.classList.add('active');
  }
});
  
