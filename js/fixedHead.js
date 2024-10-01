document.addEventListener("DOMContentLoaded", function() {
    const header = document.querySelector(".header");
    const headerOffsetTop = header.offsetTop;

    window.addEventListener("scroll", function() {
        if (this.window.scrollY > headerOffsetTop) {
            header.classList.add("fixed");
        } else {
            header.classList.remove("fixed");
        }
    });
})