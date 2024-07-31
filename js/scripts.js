document.addEventListener('DOMContentLoaded', function() {
  const offset = document.querySelector('nav').offsetHeight;
  
  document.querySelectorAll('nav a').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
          e.preventDefault();
          
          const targetId = this.getAttribute('href').substring(1);
          const targetElement = document.getElementById(targetId);
          const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - offset * 1.25;
          
          window.scrollTo({
              top: targetPosition,
              behavior: 'smooth'
          });
      });
  });
});

document.addEventListener('DOMContentLoaded', () => {
    const skillRows = document.querySelectorAll('.skill-row');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    skillRows.forEach(row => {
        observer.observe(row);
    });
});
