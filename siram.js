document.addEventListener("DOMContentLoaded", function() {
    const aboutSection = document.querySelector(".about");
    function revealSection() {
        if (window.scrollY + window.innerHeight > aboutSection.offsetTop + 100) {
            aboutSection.classList.add("show");
        }
    }
    window.addEventListener("scroll", revealSection);
    revealSection(); // Run on load in case it's already in view
});
