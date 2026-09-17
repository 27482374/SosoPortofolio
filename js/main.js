const cursor = document.querySelector(".cursor");


/* CURSEUR */

document.addEventListener("mousemove", (event) => {

    if (!cursor) return;

    cursor.style.left = event.clientX + "px";
    cursor.style.top = event.clientY + "px";

});


/* CURSEUR INTERACTIF */

document
    .querySelectorAll("a, .service, .project")
    .forEach((element) => {

        element.addEventListener("mouseenter", () => {

            if (cursor) {
                cursor.classList.add("big");
            }

        });


        element.addEventListener("mouseleave", () => {

            if (cursor) {
                cursor.classList.remove("big");
            }

        });

    });


/* ANIMATION DES PROJETS */

const projects = document.querySelectorAll(".project");

projects.forEach((project) => {

    project.addEventListener("mouseenter", () => {

        project.style.transform = "translateY(-7px)";

    });


    project.addEventListener("mouseleave", () => {

        project.style.transform = "translateY(0)";

    });

});


/* SCROLL */

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

            }

        });

    },

    {
        threshold:0.08
    }

);


sections.forEach((section) => {

    observer.observe(section);

});
