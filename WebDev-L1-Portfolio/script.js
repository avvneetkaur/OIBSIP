
document.addEventListener("DOMContentLoaded", () => {

    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");
    const navItems = document.querySelectorAll(".nav-link");
    const scrollTopButton = document.getElementById("scrollTop");


    /* =========================
       MOBILE MENU
    ========================= */

    menuToggle.addEventListener("click", () => {

        navLinks.classList.toggle("open");

        const isOpen = navLinks.classList.contains("open");

        menuToggle.setAttribute("aria-expanded", isOpen);

        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close navigation menu" : "Open navigation menu"
        );

        menuToggle.textContent = isOpen ? "✕" : "☰";
    });


    /* =========================
       CLOSE MOBILE MENU
    ========================= */

    navItems.forEach((item) => {

        item.addEventListener("click", () => {

            navItems.forEach((link) => {
                link.classList.remove("active");
            });

            item.classList.add("active");

            navLinks.classList.remove("open");

            menuToggle.setAttribute("aria-expanded", "false");

            menuToggle.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

            menuToggle.textContent = "☰";
        });

    });


    /* =========================
       ACTIVE NAVIGATION
    ========================= */

    const sections = document.querySelectorAll("section[id]");

    window.addEventListener("scroll", () => {

        let currentSection = "";

        sections.forEach((section) => {

            const sectionTop = section.offsetTop - 120;
            const sectionHeight = section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight
            ) {
                currentSection = section.getAttribute("id");
            }

        });

        navItems.forEach((item) => {

            item.classList.remove("active");

            if (
                item.getAttribute("href") ===
                `#${currentSection}`
            ) {
                item.classList.add("active");
            }

        });


        /* =========================
           SCROLL TO TOP
        ========================= */

        if (window.scrollY > 400) {
            scrollTopButton.classList.add("show");
        } else {
            scrollTopButton.classList.remove("show");
        }

    });


    /* =========================
       SCROLL TO TOP BUTTON
    ========================= */

    scrollTopButton.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

});

