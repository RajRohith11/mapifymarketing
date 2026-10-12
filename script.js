
/* =================================
   MAPIFY MARKETING - JAVASCRIPT
================================= */


/* 1. START AT THE TOP WHEN THE PAGE LOADS */

if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
}

window.addEventListener("load", function () {
    window.scrollTo(0, 0);
});


/* 2. INTRO LOADING SCREEN */

window.addEventListener("load", function () {
    const introLoader = document.getElementById("introLoader");

    if (!introLoader) {
        return;
    }

    // Check if the intro already played in this tab session
    if (sessionStorage.getItem("mapifyIntroPlayed") === "true") {
        introLoader.remove();
        return;
    }

    // Remember that the intro has played
    sessionStorage.setItem("mapifyIntroPlayed", "true");

    // Show the intro for 2.5 seconds
    setTimeout(function () {
        introLoader.classList.add("hide-intro");

        // Remove the intro after the fade animation
        setTimeout(function () {
            introLoader.remove();
        }, 650);

    }, 2500);
});


/* 3. SMOOTH SCROLL TO THE SERVICES SECTION */

const exploreBtn = document.querySelector(
    '.hero-buttons .primary-btn[href="#services"]'
);

if (exploreBtn) {
    exploreBtn.addEventListener("click", function (event) {
        const servicesSection = document.querySelector("#services");

        if (servicesSection) {
            event.preventDefault();

            servicesSection.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
}


/* 4. ADD A SHADOW TO THE NAVBAR WHEN SCROLLING */

const navbar = document.querySelector("header");

window.addEventListener("scroll", function () {
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.style.boxShadow =
                "0 4px 15px rgba(0, 0, 0, 0.08)";
        } else {
            navbar.style.boxShadow = "none";
        }
    }
});


/* 5. WELCOME MESSAGE */

console.log("Welcome to Mapify Marketing!");
console.log("Strategy. Creativity. Growth!");
