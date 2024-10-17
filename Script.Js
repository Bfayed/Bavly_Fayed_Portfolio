
 document.querySelectorAll('#navbar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('#navbar ul');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});


const sections = document.querySelectorAll('.hidden');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, {
    threshold: 0.1 
});

//sections.forEach(section => {
  //  observer.observe(section);
//});



// let currentSlide = 0;
//const slides = document.querySelectorAll('.slide');
//const totalSlides = slides.length;

// function showSlide() {
    // slides.forEach((slide, index) => {
        // slide.classList.remove('active-slide', 'fade-out');
        // if (index === currentSlide) {
            // slide.classList.add('active-slide');

        // } else if (index === (currentSlide + 1) % totalSlides) {
            // slide.classList.add('fade-out');
        // }
    // });
    // currentSlide = (currentSlide + 1) % totalSlides;


//setInterval(showSlide, 3000); 
// Dark/Light Mode Toggle
const modeToggle = document.querySelector('.mode-toggle');

modeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    

    if (document.body.classList.contains('dark-mode')) {
        modeToggle.textContent = 'Light Mode';
    } else {
        modeToggle.textContent = 'Dark Mode';
    }
});

document.querySelectorAll('#navbar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const offsetTop = document.querySelector(targetId).offsetTop - 50; 
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    });
});