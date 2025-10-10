// Theme Toggle Functionality
const themeToggle = document.getElementById('themeToggle');
const themeIcon = themeToggle.querySelector('i');

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    
    if (document.body.classList.contains('light-mode')) {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }
});

// Image Slider Functionality
const slider = document.getElementById('slider');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const sliderNav = document.getElementById('sliderNav');

let currentSlide = 0;
const totalSlides = slides.length;

// Create slider dots
for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement('div');
    dot.classList.add('slider-dot');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToSlide(i));
    sliderNav.appendChild(dot);
}

const dots = document.querySelectorAll('.slider-dot');

function goToSlide(slideIndex) {
    currentSlide = slideIndex;
    updateSlider();
}

function updateSlider() {
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
    
    // Update active dot
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlider();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateSlider();
}

prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

// Auto slide change
setInterval(nextSlide, 5000);

// Scroll Animation
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe elements for animation
const aboutSection = document.querySelector('.about');
const serviceCards = document.querySelectorAll('.service-card');

observer.observe(aboutSection);
serviceCards.forEach(card => observer.observe(card));

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Language Details Modal Functionality
const languageModal = document.getElementById('languageModal');
const closeModal = document.querySelector('.close-modal');
const skillItems = document.querySelectorAll('.skill-item');

// Language data with details, images, features, and projects
const languageData = {
    html5: {
        title: "HTML5",
        iconClass: "fab fa-html5",
        image: "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png",
        description: "HTML5 is the latest evolution of the standard that defines HTML. It includes new elements, attributes, and behaviors, and a larger set of technologies that allows the building of more diverse and powerful Web sites and applications.",
        features: [
            "Semantic elements like &lt;header&gt;, &lt;footer&gt;, &lt;article&gt;, and &lt;section&gt;",
            "Multimedia support with &lt;audio&gt; and &lt;video&gt; elements",
            "Canvas and SVG graphics",
            "Improved form controls and validation",
            "Local storage and offline capabilities",
            "Geolocation API"
        ],
        projects: [
            { name: "Portfolio Website", icon: "fas fa-laptop-code" },
            { name: "E-commerce Site", icon: "fas fa-shopping-cart" },
            { name: "Blog Platform", icon: "fas fa-blog" },
            { name: "Business Website", icon: "fas fa-briefcase" }
        ]
    },
    css3: {
        title: "CSS3",
        iconClass: "fab fa-css3-alt",
        image: "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png",
        description: "CSS3 is the latest evolution of the Cascading Style Sheets language. It brings a lot of long-awaited novelties, like rounded corners, shadows, gradients, transitions or animations, as well as new layouts like multi-columns, flexible box or grid layouts.",
        features: [
            "Advanced selectors and pseudo-classes",
            "Flexbox and Grid layout systems",
            "Animations and transitions",
            "Media queries for responsive design",
            "Custom properties (CSS variables)",
            "Box-shadow, text-shadow, and border-radius"
        ],
        projects: [
            { name: "Responsive Layouts", icon: "fas fa-mobile-alt" },
            { name: "Animated UI Elements", icon: "fas fa-film" },
            { name: "Modern Web Design", icon: "fas fa-palette" },
            { name: "Interactive Components", icon: "fas fa-mouse-pointer" }
        ]
    },
    javascript: {
        title: "JavaScript",
        iconClass: "fab fa-js",
        image: "https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400_1280.png",
        description: "JavaScript is a programming language that enables interactive web pages. It is an essential part of web applications and has expanded beyond web browsers to server-side development with Node.js.",
        features: [
            "Client-side scripting for dynamic content",
            "Asynchronous programming with Promises and async/await",
            "DOM manipulation and event handling",
            "Object-oriented and functional programming paradigms",
            "Extensive ecosystem with npm packages",
            "Cross-platform development capabilities"
        ],
        projects: [
            { name: "Interactive Web Apps", icon: "fas fa-code" },
            { name: "Single Page Applications", icon: "fas fa-window-restore" },
            { name: "API Integrations", icon: "fas fa-plug" },
            { name: "Browser Games", icon: "fas fa-gamepad" }
        ]
    },
    react: {
        title: "React",
        iconClass: "fab fa-react",
        image: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
        description: "React is a JavaScript library for building user interfaces, particularly web applications. It allows developers to create large web applications that can change data, without reloading the page.",
        features: [
            "Component-based architecture",
            "Virtual DOM for improved performance",
            "Unidirectional data flow",
            "JSX syntax for writing components",
            "Hooks for state and lifecycle management",
            "Rich ecosystem and community support"
        ],
        projects: [
            { name: "Dynamic User Interfaces", icon: "fas fa-desktop" },
            { name: "Progressive Web Apps", icon: "fas fa-mobile" },
            { name: "Admin Dashboards", icon: "fas fa-chart-bar" },
            { name: "E-commerce Platforms", icon: "fas fa-shopping-bag" }
        ]
    },
    nodejs: {
        title: "Node.js",
        iconClass: "fab fa-node-js",
        image: "https://cdn.pixabay.com/photo/2015/04/23/17/41/node-js-736399_1280.png",
        description: "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows developers to use JavaScript for server-side scripting and running scripts server-side to produce dynamic web page content.",
        features: [
            "Non-blocking, event-driven architecture",
            "NPM package manager with vast ecosystem",
            "Built-in modules for file system, HTTP, etc.",
            "Scalable network applications",
            "Cross-platform development",
            "Real-time application support with WebSockets"
        ],
        projects: [
            { name: "RESTful APIs", icon: "fas fa-server" },
            { name: "Real-time Chat Apps", icon: "fas fa-comments" },
            { name: "Microservices Architecture", icon: "fas fa-cubes" },
            { name: "Backend Systems", icon: "fas fa-database" }
        ]
    },
    mongodb: {
        title: "MongoDB",
        iconClass: "fas fa-database",
        image: "https://webimages.mongodb.com/_com_assets/cms/kuyjf3vea2hg34taa-horizontal_white.svg",
        description: "MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas.",
        features: [
            "Document-oriented storage (BSON format)",
            "Flexible schema design",
            "Horizontal scalability with sharding",
            "Rich query language with aggregation framework",
            "Indexing for performance optimization",
            "Replication for high availability"
        ],
        projects: [
            { name: "Content Management Systems", icon: "fas fa-newspaper" },
            { name: "E-commerce Platforms", icon: "fas fa-store" },
            { name: "Social Media Apps", icon: "fas fa-users" },
            { name: "Analytics Platforms", icon: "fas fa-chart-line" }
        ]
    },
    python: {
        title: "Python",
        iconClass: "fab fa-python",
        image: "https://cdn.pixabay.com/photo/2022/01/18/07/36/coding-6946370_1280.jpg",
        description: "Python is a high-level, interpreted programming language known for its clear syntax and readability. It supports multiple programming paradigms and has a large standard library.",
        features: [
            "Simple and readable syntax",
            "Extensive standard library",
            "Support for multiple programming paradigms",
            "Dynamic typing and automatic memory management",
            "Large ecosystem of third-party packages",
            "Cross-platform compatibility"
        ],
        projects: [
            { name: "Web Applications", icon: "fas fa-globe" },
            { name: "Data Analysis", icon: "fas fa-chart-pie" },
            { name: "Machine Learning", icon: "fas fa-brain" },
            { name: "Automation Scripts", icon: "fas fa-robot" }
        ]
    },
    git: {
        title: "Git",
        iconClass: "fab fa-git-alt",
        image: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png",
        description: "Git is a distributed version control system that tracks changes in source code during software development. It is designed for coordinating work among programmers, and can handle projects of any size.",
        features: [
            "Distributed version control system",
            "Branching and merging capabilities",
            "Staging area for selective commits",
            "Multiple remote repositories",
            "Powerful history tracking and visualization",
            "Collaboration workflows (GitFlow, GitHub Flow)"
        ],
        projects: [
            { name: "Version Control", icon: "fas fa-code-branch" },
            { name: "Team Collaboration", icon: "fas fa-users" },
            { name: "Code Review", icon: "fas fa-eye" },
            { name: "Continuous Integration", icon: "fas fa-sync" }
        ]
    }
};

// Add click event listeners to skill items
skillItems.forEach(item => {
    item.addEventListener('click', () => {
        const language = item.getAttribute('data-language');
        openLanguageModal(language);
    });
});

// Function to open language modal with details
function openLanguageModal(language) {
    const data = languageData[language];
    
    if (data) {
        document.getElementById('modalIcon').className = data.iconClass;
        document.getElementById('modalTitle').textContent = data.title;
        document.getElementById('modalImage').src = data.image;
        document.getElementById('modalImage').alt = `${data.title} Logo`;
        document.getElementById('modalDescription').textContent = data.description;
        document.getElementById('languageName').textContent = data.title;
        document.getElementById('projectsLanguage').textContent = data.title;
        
        // Populate features list
        const featuresList = document.getElementById('featuresList');
        featuresList.innerHTML = '';
        data.features.forEach(feature => {
            const li = document.createElement('li');
            li.innerHTML = feature;
            featuresList.appendChild(li);
        });
        
        // Populate projects grid
        const projectsGrid = document.getElementById('projectsGrid');
        projectsGrid.innerHTML = '';
        data.projects.forEach(project => {
            const projectItem = document.createElement('div');
            projectItem.className = 'project-item';
            projectItem.innerHTML = `
                <i class="${project.icon}"></i>
                <h5>${project.name}</h5>
            `;
            projectsGrid.appendChild(projectItem);
        });
        
        // Show the modal
        languageModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

// Close modal when clicking the close button
closeModal.addEventListener('click', () => {
    languageModal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

// Close modal when clicking outside the modal content
window.addEventListener('click', (e) => {
    if (e.target === languageModal) {
        languageModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && languageModal.style.display === 'block') {
        languageModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});