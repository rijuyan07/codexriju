// 1. Initial Load Animation
window.addEventListener('load', () => {
    const progressBar = document.getElementById('progress-bar');
    const loaderContainer = document.getElementById('loader-container');
    const mainContent = document.querySelector('main');
    
    document.getElementById('year').innerText = new Date().getFullYear();

    // Fast loading bar
    setTimeout(() => {
        progressBar.style.width = '100%';
    }, 100);

    // Shorter delay
    setTimeout(() => {
        loaderContainer.classList.add('doors-open');
        mainContent.classList.remove('opacity-0');
    }, 1200);
});

// 2. TECH DETAIL DATA
const techData = {
    'html': {
        title: 'HTML5 & CSS3 Architecture',
        icon: 'fab fa-html5 text-orange-500',
        desc: `
            <p class="mb-4"><strong class="text-brand">The Foundation of the Web.</strong> HTML & CSS are the core of my design philosophy. I focus on semantic structure and modern styling techniques.</p>
            <h3 class="text-xl text-white font-bold mt-6 mb-2">My Expertise Includes:</h3>
            <ul class="list-disc ml-5 space-y-2 text-gray-400">
                <li><strong>Semantic HTML5:</strong> For better SEO and accessibility.</li>
                <li><strong>Advanced CSS3:</strong> Flexbox, Grid, and Animations.</li>
                <li><strong>Tailwind CSS:</strong> For rapid, utility-first styling.</li>
            </ul>
        `
    },
    'js': {
        title: 'Advanced JavaScript (ES6+)',
        icon: 'fab fa-js text-yellow-400',
        desc: `
            <p class="mb-4"><strong class="text-brand">Interactive Logic.</strong> I write clean, efficient JavaScript to bring static interfaces to life.</p>
            <h3 class="text-xl text-white font-bold mt-6 mb-2">Key Skills:</h3>
            <ul class="list-disc ml-5 space-y-2 text-gray-400">
                <li><strong>ES6+ Features:</strong> Arrow functions, Destructuring.</li>
                <li><strong>Async/Await:</strong> Handling API calls seamlessly.</li>
                <li><strong>DOM Manipulation:</strong> Dynamic content updates.</li>
            </ul>
        `
    },
    'react': {
        title: 'React.js Ecosystem',
        icon: 'fab fa-react text-blue-400',
        desc: `
            <p class="mb-4"><strong class="text-brand">Component-Based UI.</strong> Building single-page applications that are fast and scalable.</p>
            <h3 class="text-xl text-white font-bold mt-6 mb-2">Core Competencies:</h3>
            <ul class="list-disc ml-5 space-y-2 text-gray-400">
                <li><strong>Hooks:</strong> useState, useEffect, Custom Hooks.</li>
                <li><strong>State Management:</strong> Context API & Redux.</li>
                <li><strong>Performance:</strong> Memoization and Lazy Loading.</li>
            </ul>
        `
    },
    'node': {
        title: 'Node.js & Express',
        icon: 'fab fa-node text-green-500',
        desc: `
            <p class="mb-4"><strong class="text-brand">Robust Backend.</strong> Creating secure and scalable server-side applications.</p>
            <h3 class="text-xl text-white font-bold mt-6 mb-2">Backend Skills:</h3>
            <ul class="list-disc ml-5 space-y-2 text-gray-400">
                <li><strong>RESTful APIs:</strong> Designing clean endpoints.</li>
                <li><strong>Authentication:</strong> JWT & OAuth integration.</li>
                <li><strong>Database:</strong> Connecting with MongoDB/SQL.</li>
            </ul>
        `
    },
    'python': {
        title: 'Python Programming',
        icon: 'fab fa-python text-blue-300',
        desc: `
            <p class="mb-4"><strong class="text-brand">AI & Automation.</strong> Using Python for data science, scripting, and backend logic.</p>
            <h3 class="text-xl text-white font-bold mt-6 mb-2">Usage:</h3>
            <ul class="list-disc ml-5 space-y-2 text-gray-400">
                <li><strong>AI/ML:</strong> TensorFlow, PyTorch basics.</li>
                <li><strong>Automation:</strong> Scripting repetitive tasks.</li>
                <li><strong>Web:</strong> Flask/Django frameworks.</li>
            </ul>
        `
    },
    'mongo': {
        title: 'MongoDB NoSQL',
        icon: 'fas fa-database text-green-400',
        desc: `
            <p class="mb-4"><strong class="text-brand">Flexible Data.</strong> Storing data in JSON-like documents for modern apps.</p>
            <h3 class="text-xl text-white font-bold mt-6 mb-2">Database Skills:</h3>
            <ul class="list-disc ml-5 space-y-2 text-gray-400">
                <li><strong>Mongoose:</strong> Schema validation & modeling.</li>
                <li><strong>CRUD:</strong> Efficient data operations.</li>
                <li><strong>Aggregation:</strong> Complex data processing.</li>
            </ul>
        `
    }
};

const modal = document.getElementById('tech-modal');
const modalTitle = document.getElementById('modal-title');
const modalIcon = document.getElementById('modal-icon');
const modalBody = document.getElementById('modal-body');

// 3. Modal Functions
window.openModal = function(techKey) {
    const data = techData[techKey];
    modalTitle.innerText = data.title;
    modalIcon.className = data.icon;
    modalBody.innerHTML = data.desc;
    modal.classList.remove('opacity-0', 'pointer-events-none');
    modal.classList.add('modal-open');
}

window.closeModal = function() {
    modal.classList.remove('modal-open');
    modal.classList.add('opacity-0', 'pointer-events-none');
}

modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
});