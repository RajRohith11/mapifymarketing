
/* =================================
   MAPIFY MARKETING - JAVASCRIPT
================================= */


/* 1. INTRO LOADING SCREEN */

window.addEventListener("load", function () {
    const introLoader = document.getElementById("introLoader");

    // The services page has no intro loader.
    if (!introLoader) {
        return;
    }

    // Prevent the intro from replaying in the same tab session.
    try {
        if (sessionStorage.getItem("mapifyIntroPlayed") === "true") {
            introLoader.remove();
            return;
        }

        sessionStorage.setItem("mapifyIntroPlayed", "true");
    } catch (error) {
        // Continue normally if session storage is unavailable.
    }

    // Show the intro for 2.5 seconds.
    window.setTimeout(function () {
        introLoader.classList.add("hide-intro");

        // Remove the loader after its fade animation.
        window.setTimeout(function () {
            introLoader.remove();
        }, 650);

    }, 2500);
});


/* 2. NAVBAR SHADOW ON SCROLL */

const siteHeader = document.querySelector(".site-header");

function updateNavbarShadow() {
    if (!siteHeader) {
        return;
    }

    if (window.scrollY > 50) {
        siteHeader.style.boxShadow =
            "0 4px 15px rgba(0, 0, 0, 0.08)";
    } else {
        siteHeader.style.boxShadow = "none";
    }
}

// Update when the page scrolls.
window.addEventListener("scroll", updateNavbarShadow, {
    passive: true
});

// Set the correct shadow on initial page load.
updateNavbarShadow();


/* 3. WELCOME MESSAGE */

console.log("Welcome to Mapify Marketing!");
console.log("Strategy. Creativity. Growth!");
