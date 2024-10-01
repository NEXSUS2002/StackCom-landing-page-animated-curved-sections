// Getting the button
let scrollUpBtn = document.getElementById("scrollup");

// Setting to show when it scrolls pass 20px from the top
window.onscroll = function() {
    scrollFunc();
};

function scrollFunc() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollUpBtn.style.display = "block";
    } else {
        scrollUpBtn.style.display = "none";
    }
}

// Setting when clicked, scroll to top
scrollUpBtn.addEventListener("click", function() {
    // document.documentElement.scrollTop = 0;

    window.scrollTo({
        top:0,
        behaviour: "smooth"
    });
});