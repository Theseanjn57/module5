// Toggle navigation menu visibility
function toggleMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('visible');
}

document.querySelector('.hamburger').addEventListener('click', toggleMenu);

// Smooth scrolling behavior
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        event.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Filter projects
function filterProjects(category) {
    const projects = document.querySelectorAll('#projects article');
    projects.forEach(project => {
        if (category === 'all' || project.classList.contains(category)) {
            project.style.display = 'block';
        } else {
            project.style.display = 'none';
        }
    });
}

document.querySelectorAll('.filter-button').forEach(button => {
    button.addEventListener('click', function() {
        const category = this.getAttribute('data-category');
        filterProjects(category);
    });
});

// Lightbox effect for project images
function openLightbox(imageSrc) {
    const lightbox = document.createElement('div');
    lightbox.classList.add('lightbox');
    lightbox.innerHTML = `
        <div class="lightbox-content">
            <img src="${imageSrc}" alt="Project Image">
            <span class="close-lightbox">&times;</span>
        </div>
    `;
    document.body.appendChild(lightbox);

    document.querySelector('.close-lightbox').addEventListener('click', function() {
        document.body.removeChild(lightbox);
    });
}

document.querySelectorAll('#projects img').forEach(img => {
    img.addEventListener('click', function() {
        openLightbox(this.src);
    });
});

// Form validation
document.querySelector('#contact form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.querySelector('#name').value.trim();
    const email = document.querySelector('#email').value.trim();
    const message = document.querySelector('#message').value.trim();

    if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return;
    }

    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    alert('Form submitted successfully!');
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}