window.addEventListener('load', () => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('showLeft');
        } else {
            entry.target.classList.remove('showLeft');
        }
      });
    });

    const hiddenElements = document.querySelectorAll('.hiddenLeft');
    hiddenElements.forEach(el => observer.observe(el));
  });

window.addEventListener('load', () => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        console.log(entry);
        if (entry.isIntersecting) {
          entry.target.classList.add('showRight');
        } else {
            entry.target.classList.remove('showRight');
        }
      });
    });

    const hiddenElements = document.querySelectorAll('.hiddenRight');
    hiddenElements.forEach(el => observer.observe(el));
  });