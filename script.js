// Translations
const translations = {
    en: {
        nav: {
            home: 'Home',
            services: 'Services',
            products: 'Products',
            skills: 'Skills',
            projects: 'Projects',
            demo: 'Demo',
            about: 'About Me',
            contact: 'Contact Me'
        },
        home: {
            title: 'Welcome to Daniel Seguin Consultant',
            subtitle: 'Senior IT Consultant - Delivering Excellence in Technology Solutions'
        },
        services: {
            title: 'Services'
        },
        products: {
            title: 'Products'
        },
        skills: {
            title: 'Skills'
        },
        projects: {
            title: 'Projects'
        },
        demo: {
            title: 'Demo Websites',
            service: 'Service Industry Website',
            restaurant: 'Restaurant Industry Website',
            manufacturing: 'Manufacturing Industry Website',
            store: 'Store Industry Website',
            church: 'Church Website',
            placeholder: 'Demo Coming Soon'
        },
        about: {
            title: 'About Me',
            imageLabel: 'Photo',
            bio: 'As a Senior IT Consultant with extensive experience in delivering innovative technology solutions, I specialize in helping businesses transform their operations through strategic technology implementation. With a proven track record across multiple industries, I bring deep expertise in software development, system architecture, and digital transformation. My passion lies in understanding client needs and delivering solutions that drive real business value.'
        },
        contact: {
            title: 'Contact Me',
            imageLabel: 'Contact',
            addressTitle: 'Address',
            formTitle: 'Send Me a Message',
            name: 'Name:',
            email: 'Email:',
            subject: 'Subject:',
            message: 'Message:',
            send: 'Send Message'
        },
        footer: {
            rights: 'All rights reserved.'
        }
    },
    fr: {
        nav: {
            home: 'Accueil',
            services: 'Services',
            products: 'Produits',
            skills: 'Compétences',
            projects: 'Projets',
            demo: 'Démo',
            about: 'À Propos',
            contact: 'Me Contacter'
        },
        home: {
            title: 'Bienvenue chez Daniel Seguin Consultant',
            subtitle: 'Consultant IT Senior - Excellence en Solutions Technologiques'
        },
        services: {
            title: 'Services'
        },
        products: {
            title: 'Produits'
        },
        skills: {
            title: 'Compétences'
        },
        projects: {
            title: 'Projets'
        },
        demo: {
            title: 'Sites Web de Démonstration',
            service: 'Site Web Industrie des Services',
            restaurant: 'Site Web Industrie de la Restauration',
            manufacturing: 'Site Web Industrie Manufacturière',
            store: 'Site Web Industrie du Commerce',
            church: 'Site Web d\'Église',
            placeholder: 'Démo Bientôt Disponible'
        },
        about: {
            title: 'À Propos de Moi',
            imageLabel: 'Photo',
            bio: 'En tant que consultant IT senior avec une vaste expérience dans la fourniture de solutions technologiques innovantes, je me spécialise dans l\'aide aux entreprises pour transformer leurs opérations grâce à une mise en œuvre technologique stratégique. Avec un historique éprouvé dans plusieurs industries, j\'apporte une expertise approfondie en développement logiciel, architecture système et transformation numérique. Ma passion réside dans la compréhension des besoins des clients et la fourniture de solutions qui génèrent une réelle valeur commerciale.'
        },
        contact: {
            title: 'Me Contacter',
            imageLabel: 'Contact',
            addressTitle: 'Adresse',
            formTitle: 'Envoyez-moi un Message',
            name: 'Nom:',
            email: 'Courriel:',
            subject: 'Sujet:',
            message: 'Message:',
            send: 'Envoyer le Message'
        },
        footer: {
            rights: 'Tous droits réservés.'
        }
    },
    es: {
        nav: {
            home: 'Inicio',
            services: 'Servicios',
            products: 'Productos',
            skills: 'Habilidades',
            projects: 'Proyectos',
            demo: 'Demo',
            about: 'Acerca de Mí',
            contact: 'Contáctame'
        },
        home: {
            title: 'Bienvenido a Daniel Seguin Consultant',
            subtitle: 'Consultor TI Senior - Ofreciendo Excelencia en Soluciones Tecnológicas'
        },
        services: {
            title: 'Servicios'
        },
        products: {
            title: 'Productos'
        },
        skills: {
            title: 'Habilidades'
        },
        projects: {
            title: 'Proyectos'
        },
        demo: {
            title: 'Sitios Web de Demostración',
            service: 'Sitio Web de Industria de Servicios',
            restaurant: 'Sitio Web de Industria de Restaurantes',
            manufacturing: 'Sitio Web de Industria Manufacturera',
            store: 'Sitio Web de Industria de Tiendas',
            church: 'Sitio Web de Iglesia',
            placeholder: 'Demo Próximamente'
        },
        about: {
            title: 'Acerca de Mí',
            imageLabel: 'Foto',
            bio: 'Como consultor TI senior con amplia experiencia en la entrega de soluciones tecnológicas innovadoras, me especializo en ayudar a las empresas a transformar sus operaciones a través de la implementación tecnológica estratégica. Con un historial comprobado en múltiples industrias, aporto una profunda experiencia en desarrollo de software, arquitectura de sistemas y transformación digital. Mi pasión radica en comprender las necesidades de los clientes y entregar soluciones que impulsen un valor comercial real.'
        },
        contact: {
            title: 'Contáctame',
            imageLabel: 'Contacto',
            addressTitle: 'Dirección',
            formTitle: 'Envíame un Mensaje',
            name: 'Nombre:',
            email: 'Correo Electrónico:',
            subject: 'Asunto:',
            message: 'Mensaje:',
            send: 'Enviar Mensaje'
        },
        footer: {
            rights: 'Todos los derechos reservados.'
        }
    }
};

// Current language
let currentLanguage = 'en';

// Load data from JSON files
async function loadData(filename) {
    try {
        const response = await fetch(`data/${filename}`);
        if (!response.ok) {
            throw new Error(`Failed to load ${filename}`);
        }
        return await response.json();
    } catch (error) {
        console.error(`Error loading ${filename}:`, error);
        return null;
    }
}

// Display services
async function displayServices() {
    const data = await loadData('services.json');
    if (!data) return;

    const container = document.getElementById('servicesContainer');
    const services = data[currentLanguage] || data.en;

    container.innerHTML = services.map(service => `
        <div class="card">
            <h3>${service.name}</h3>
            <p>${service.description}</p>
        </div>
    `).join('');
}

// Display products
async function displayProducts() {
    const data = await loadData('products.json');
    if (!data) return;

    const container = document.getElementById('productsContainer');
    const products = data[currentLanguage] || data.en;

    container.innerHTML = products.map(product => `
        <div class="card ${product.comingSoon ? 'coming-soon' : ''}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
        </div>
    `).join('');
}

// Display skills
async function displaySkills() {
    const data = await loadData('skills.json');
    if (!data) return;

    const container = document.getElementById('skillsContainer');
    const skills = data[currentLanguage] || data.en;

    container.innerHTML = skills.map(skill => `
        <div class="card">
            <h3>${skill.name}</h3>
            <p>${skill.description}</p>
            <span class="experience">${skill.experience}</span>
        </div>
    `).join('');
}

// Display projects
async function displayProjects() {
    const data = await loadData('projects.json');
    if (!data) return;

    const container = document.getElementById('projectsContainer');
    const projects = data[currentLanguage] || data.en;

    container.innerHTML = projects.map(project => `
        <div class="card">
            <h3>${project.name}</h3>
            <p>${project.description}</p>
            <div>
                ${project.technology.split(',').map(tech => 
                    `<span class="technology">${tech.trim()}</span>`
                ).join('')}
            </div>
        </div>
    `).join('');
}

// Update page translations
function updateTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const keys = key.split('.');
        let value = translations[currentLanguage];
        
        for (const k of keys) {
            value = value[k];
        }
        
        if (value) {
            element.textContent = value;
        }
    });

    // Update HTML lang attribute
    document.documentElement.lang = currentLanguage;
}

// Change language
function changeLanguage() {
    const select = document.getElementById('languageSelect');
    currentLanguage = select.value;
    
    updateTranslations();
    displayServices();
    displayProducts();
    displaySkills();
    displayProjects();
}

// Handle contact form submission
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');
    
    if (form) {
        form.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const formData = new FormData(form);
            const data = {
                name: formData.get('name'),
                email: formData.get('email'),
                subject: formData.get('subject'),
                message: formData.get('message'),
                to: 'daniel@seguin.dev'
            };
            
            // For demonstration, we'll show a success message
            // In production, this would send to a backend service
            try {
                // Simulate form submission
                formStatus.textContent = currentLanguage === 'en' 
                    ? 'Thank you for your message! I will get back to you soon.'
                    : currentLanguage === 'fr'
                    ? 'Merci pour votre message! Je vous répondrai bientôt.'
                    : '¡Gracias por tu mensaje! Me pondré en contacto contigo pronto.';
                formStatus.className = 'success';
                form.reset();
                
                // For production use, uncomment and configure email service:
                /*
                const response = await fetch('YOUR_EMAIL_SERVICE_ENDPOINT', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data)
                });
                
                if (response.ok) {
                    formStatus.textContent = 'Message sent successfully!';
                    formStatus.className = 'success';
                    form.reset();
                } else {
                    throw new Error('Failed to send message');
                }
                */
            } catch (error) {
                formStatus.textContent = currentLanguage === 'en'
                    ? 'Failed to send message. Please try again or email directly to daniel@seguin.dev'
                    : currentLanguage === 'fr'
                    ? 'Échec de l\'envoi du message. Veuillez réessayer ou envoyer un courriel directement à daniel@seguin.dev'
                    : 'Error al enviar el mensaje. Inténtalo de nuevo o envía un correo electrónico directamente a daniel@seguin.dev';
                formStatus.className = 'error';
            }
        });
    }
});

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
            });
        });
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    displayServices();
    displayProducts();
    displaySkills();
    displayProjects();
});
