/*-----navbar toggle------*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}

/*-----Scroll section active link------*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    /*------Sticky Navbar-------*/
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /*------ Remove toggle bar and navbar ------*/
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};

/*------- scroll reveal ------*/
if (typeof ScrollReveal !== 'undefined') {
    ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
    ScrollReveal().reveal('.home-img, .projects-container, .experience-content, .contact form', { origin: 'bottom' });
    ScrollReveal().reveal('.home h1, .about-img', { origin: 'left' });
    ScrollReveal().reveal('.home p, .about-content', { origin: 'right' });
}

/*--------typed JS------*/
if (typeof Typed !== 'undefined') {
    new Typed('.multiple-text', {
        strings: ['Data Engineer','Software Developer', 'Web Developer', 'Frontend Developer'],
        typeSpeed: 70,
        backSpeed: 70,
        backDelay: 1000,
        loop: true,
    });
}

/*------ Toggle Read More/Less Content ------*/
function toggleContent(id, btn) {
    const content = document.getElementById(id);
    if (content.style.display === "block" || content.style.display === "") {
        content.style.display = "none";
        btn.textContent = "Read more";
    } else {
        content.style.display = "block";
        btn.textContent = "Read less";
    }
}

// Add event listeners to each "Read more" button to prevent default behavior
document.querySelectorAll('.read-more-btn').forEach(btn => {
    btn.addEventListener('click', function (event) {
        event.preventDefault();
        const contentId = this.getAttribute('href').replace('#', '');
        toggleContent(contentId, this);
    });
});

/*------ EmailJS Form Submission ------*/
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // These IDs from the previous steps
    emailjs.sendForm('service_wl2rwez', 'template_jvej2qj', this)
        .then(function() {
            console.log('SUCCESS!');
            alert('Email sent successfully!');
        }, function(error) {
            console.log('FAILED...', error);
            alert('Failed to send email. Please try again later.');
        });
});

/*------ Toggle Light/Dark Mode ------*/
document.getElementById('toggle-mode').addEventListener('click', function() {
    document.body.classList.toggle('light-mode');
});
