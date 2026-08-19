/* ==================================================
   RAHUL MANDAL | OFFICIAL - JAVASCRIPT ENGINE
   ================================================== */

// Academic Data Store
const academicData = {
    g10: {
        title: "Secondary Education Examination (Grade 10) - 2078 BS",
        subjects: [
            { name: "Compulsory English", theory: "C+", practical: "A+", grade: "B", point: "2.8" },
            { name: "Compulsory Nepali", theory: "D", practical: "A+", grade: "C", point: "2.0" },
            { name: "Compulsory Mathematics", theory: "D+", practical: "A+", grade: "D+", point: "1.6" },
            { name: "Compulsory Science", theory: "C", practical: "A+", grade: "C+", point: "2.4" },
            { name: "Computer Repair & Maintenance", theory: "C", practical: "A+", grade: "B+", point: "3.2" },
            { name: "Computer Networks", theory: "E", practical: "A+", grade: "B", point: "2.8" },
            { name: "Database Management System", theory: "D+", practical: "A+", grade: "B+", point: "3.2" },
            { name: "Electronic Devices & Circuits", theory: "E", practical: "A+", grade: "B", point: "2.8" },
            { name: "Microprocessor", theory: "E", practical: "A+", grade: "B", point: "2.8" },
            { name: "Object Oriented Programming", theory: "C", practical: "A+", grade: "B+", point: "3.2" },
            { name: "Extra Mathematics", theory: "E", practical: "-", grade: "E", point: "0.8" }
        ]
    },
    g12: {
        title: "School Leaving Certificate Examination (Grade 12) - 2081 BS",
        subjects: [
            { name: "Compulsory English", theory: "D", practical: "B+", grade: "C", point: "1.6" },
            { name: "Social Studies", theory: "C+", practical: "A+", grade: "B", point: "2.4" },
            { name: "Chemistry", theory: "C+", practical: "A", grade: "B", point: "2.4" },
            { name: "Physics", theory: "B", practical: "A", grade: "B+", point: "2.8" },
            { name: "Mathematics", theory: "B", practical: "A", grade: "B+", point: "2.8" },
            { name: "Visual Programming", theory: "B", practical: "A", grade: "B+", point: "2.8" },
            { name: "Computer Network", theory: "B+", practical: "A", grade: "A", point: "3.6" },
            { name: "Contemporary Technology", theory: "B", practical: "A", grade: "B+", point: "2.8" },
            { name: "Software Engineering and Project", theory: "C+", practical: "A", grade: "B+", point: "2.4" },
            { name: "On-the-Job Training (OJT)", theory: "-", practical: "-", grade: "A", point: "3.6" }
        ]
    }
};

// Image Sets for Lightbox
const cricketImages = [
    "https://i.postimg.cc/HLWPbmvV/file-00000000640471f58b66f0d5e4b21d57.png",
    "https://i.postimg.cc/sfJQNRTy/file-0000000053947208936839c704f7f2b3.png",
    "https://i.postimg.cc/8kbJ0VZJ/file-000000005fbc71f5aece893ec49f5cc4.png",
    "https://i.postimg.cc/QNq9yrfF/file-00000000b804720b932ec237f15c08da.png",
    "https://i.postimg.cc/05CMBqVr/file-00000000f65872099b6338ae6b3cfd85.png",
    "https://i.postimg.cc/XNgGz0sZ/file-00000000fa0471fa8e2359c178d6a36a.png"
];

const familyImages = [
    "https://i.postimg.cc/Dw6xvDvH/file-00000000ee8c7206bd5ee8f1e6ce0bab.png",
    "https://i.postimg.cc/rwMhLcT6/file-00000000f76c7207ae09cd8b1b0a684d.png"
];

const memoryImages = [
    "https://i.postimg.cc/brvz54vq/file-000000000380820ba802226b9ca14863.png",
    "https://i.postimg.cc/cHhxXddC/file-0000000035548208b681a7a4046ba27f.png",
    "https://i.postimg.cc/5ytxrDt6/file-0000000041bc7208bc30939425df3f93.png",
    "https://i.postimg.cc/6qQ9PFQ2/file-00000000434c71f7a040e990fabd4c67.png",
    "https://i.postimg.cc/1Xz9dbz8/file-0000000071a07209956cf73b5d5f0984.png",
    "https://i.postimg.cc/SRKyPHK4/file-00000000816c8211b2bd77c6bfe19573.png",
    "https://i.postimg.cc/kG5nHL59/file-000000009c2c821199f95bdf31ff1b67.png",
    "https://i.postimg.cc/26Gk2CCR/file-000000009d74821183f885fca46569ae.png",
    "https://i.postimg.cc/pTCWqPPd/file-000000009ee882118e2c852cbdedbd44.png",
    "https://i.postimg.cc/3NwKqzwX/file-00000000a2ac7209a066e3d89da3f563.png",
    "https://i.postimg.cc/tJgXc8g4/file-00000000ac88820bbb2a6796087e9483.png",
    "https://i.postimg.cc/Rh0MY20f/file-00000000b2447206b5d7dd3c55532be4.png"
];

let currentGalleryArray = [];
let currentImageIndex = 0;

// DOM Initialization
document.addEventListener("DOMContentLoaded", () => {
    initNavigation();
    initScrollReveal();
});

// Mobile Hamburger & Scroll Effects
function initNavigation() {
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("nav-menu");
    const navbar = document.getElementById("navbar");
    const navLinks = document.querySelectorAll(".nav-link");

    hamburger.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });

    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("active");
        });
    });

    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
        highlightActiveNavLink();
    });
}

// Active Nav Indicator on Scroll
function highlightActiveNavLink() {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });
}

// Scroll Reveal Observer
function initScrollReveal() {
    const reveals = document.querySelectorAll(".reveal-up, .reveal-left, .reveal-right");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }
        });
    }, { threshold: 0.1 });

    reveals.forEach(element => observer.observe(element));
}

// Education Modal Handlers
function openEducationModal(level) {
    const modal = document.getElementById("edu-modal");
    const title = document.getElementById("modal-title");
    const body = document.getElementById("modal-body-content");
    const data = academicData[level];

    if (!data) return;

    title.innerText = data.title;
    let tableHTML = `
        <table class="modal-table">
            <thead>
                <tr>
                    <th>Subject</th>
                    <th>Theory</th>
                    <th>Practical</th>
                    <th>Final Grade</th>
                    <th>Grade Point</th>
                </tr>
            </thead>
            <tbody>
    `;

    data.subjects.forEach(sub => {
        tableHTML += `
            <tr>
                <td><strong>${sub.name}</strong></td>
                <td>${sub.theory}</td>
                <td>${sub.practical}</td>
                <td>${sub.grade}</td>
                <td>${sub.point}</td>
            </tr>
        `;
    });

    tableHTML += `</tbody></table>`;
    body.innerHTML = tableHTML;
    modal.classList.add("active");
}

function closeEducationModal() {
    document.getElementById("edu-modal").classList.remove("active");
}

// Lightbox Handlers
function openLightbox(index, imageArray) {
    currentGalleryArray = imageArray;
    currentImageIndex = index;
    const lightbox = document.getElementById("lightbox");
    const img = document.getElementById("lightbox-img");

    img.src = currentGalleryArray[currentImageIndex];
    lightbox.classList.add("active");
}

function closeLightbox() {
    document.getElementById("lightbox").classList.remove("active");
}

function changeLightboxImage(direction) {
    currentImageIndex += direction;
    if (currentImageIndex < 0) {
        currentImageIndex = currentGalleryArray.length - 1;
    } else if (currentImageIndex >= currentGalleryArray.length) {
        currentImageIndex = 0;
    }
    document.getElementById("lightbox-img").src = currentGalleryArray[currentImageIndex];
}

// Contact Form Handler
function handleFormSubmit(event) {
    event.preventDefault();
    const name = document.getElementById("form-name").value;
    const email = document.getElementById("form-email").value;
    const message = document.getElementById("form-message").value;

    const mailtoUrl = `mailto:mandalraahull18@gmail.com?subject=Contact%20From%20Website%20-%20${encodeURIComponent(name)}&body=${encodeURIComponent(message)}%0A%0AFrom:%20${encodeURIComponent(email)}`;
    window.location.href = mailtoUrl;
}
