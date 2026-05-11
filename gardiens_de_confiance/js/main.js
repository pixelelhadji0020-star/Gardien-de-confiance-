/**
 * Logique Front-End Avancée pour Gardiens de Confiance
 */

// 1. Initialisation des animations au scroll (AOS) au chargement
document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        duration: 800,
        easing: 'ease-out-cubic',
        once: true, // L'animation ne se joue qu'une fois au scroll descendant
        offset: 50
    });

    // Initialisation de l'effet 3D (VanillaTilt) sur les cartes de prix
    initTilt();
});

// Fonction pour appliquer l'effet d'inclinaison 3D au survol de la souris
function initTilt() {
    // Ne s'applique que sur écran d'ordinateur (désactivé sur mobile pour l'ergonomie)
    if (window.innerWidth > 768) {
        VanillaTilt.init(document.querySelectorAll(".tilt-card"), {
            max: 8,          // Inclinaison maximale en degrés
            speed: 400,      // Vitesse de transition
            glare: true,     // Effet de reflet lumineux
            "max-glare": 0.15 // Intensité du reflet
        });
    }
}

// 2. Gestion du Switcher avec réinitialisation dynamique des effets
function switchService(serviceType) {
    const btns = document.querySelectorAll('.switch-btn');
    const sectionAuto = document.getElementById('section-auto');
    const sectionChantier = document.getElementById('section-chantier');

    btns.forEach(btn => btn.classList.remove('active'));

    if (serviceType === 'auto') {
        btns[0].classList.add('active');
        sectionChantier.classList.remove('active');
        sectionAuto.classList.add('active');
    } else if (serviceType === 'chantier') {
        btns[1].classList.add('active');
        sectionAuto.classList.remove('active');
        sectionChantier.classList.add('active');
    }

    // Rafraîchir AOS pour que les animations des nouvelles sections s'exécutent proprement
    setTimeout(() => {
        AOS.refresh();
    }, 100);
}