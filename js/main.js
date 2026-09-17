/* =========================
   CURSEUR CUSTOM
========================= */

const cursor = document.querySelector(".cursor");
const cursorLabel = document.querySelector(".cursor-label");


document.addEventListener("mousemove", (event) => {

    if (!cursor) return;

    cursor.style.left = event.clientX + "px";
    cursor.style.top = event.clientY + "px";

    if (cursorLabel) {
        cursorLabel.style.left = event.clientX + "px";
        cursorLabel.style.top = event.clientY + "px";
    }

});


/* Agrandissement du curseur */

document
    .querySelectorAll("a, .service, .price")
    .forEach((element) => {

        element.addEventListener("mouseenter", () => {

            cursor.classList.add("big");

        });


        element.addEventListener("mouseleave", () => {

            cursor.classList.remove("big");

        });

    });


/* Curseur spécial sur les projets */

document
    .querySelectorAll(".project")
    .forEach((project) => {

        project.addEventListener("mouseenter", () => {

            cursor.classList.add("big");

            document.body.classList.add("cursor-project");

        });


        project.addEventListener("mouseleave", () => {

            cursor.classList.remove("big");

            document.body.classList.remove("cursor-project");

        });

    });


/* =========================
   ANIMATIONS AU SCROLL
========================= */

const revealElements = document.querySelectorAll(".reveal");


const revealObserver = new IntersectionObserver(

    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

            }

        });

    },

    {
        threshold:0.12
    }

);


revealElements.forEach((element) => {

    revealObserver.observe(element);

});


/* =========================
   ANIMATION DES CARTES
========================= */

document
    .querySelectorAll(".service, .price")
    .forEach((card) => {

        card.addEventListener("mouseenter", () => {

            card.style.transition = "transform .3s ease";

        });

    });


/* =========================
   BACK TO TOP
========================= */

document
    .querySelectorAll('a[href="#"]')
    .forEach((link) => {

        link.addEventListener("click", (event) => {

            event.preventDefault();

            window.scrollTo({
                top:0,
                behavior:"smooth"
            });

        });

    });
