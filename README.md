# NEXSUS | StackCom Curved Section Landing Page

## Table of Contents
- Introduction
- Features
- Installation
- Usage
- Contributing
- License
- Acknowledgements

## Introduction
NEXSUS | StackCom Curved Section Landing Page is a visually appealing and interactive landing page designed to build and grow tech communities. This project leverages HTML, CSS, and JavaScript to create a seamless user experience with animated curved sections and dynamic content.

## Features
- **Responsive Design**: Ensures compatibility across various devices and screen sizes.
- **Fixed Header**: The header becomes fixed when scrolling down the page.
- **Scroll to Top Button**: A button that appears when the user scrolls down, allowing them to quickly return to the top.
- **Intersection Observer**: Animates sections as they come into view.
- **Form Validation**: Validates email input in the newsletter subscription form.

## Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/StackCom-landing-page-animated-curved-sections.git
    ```
2. Navigate to the project directory:
    ```bash
    cd StackCom-landing-page-animated-curved-sections
    ```
3. Open `index.html` in your preferred web browser.

## Usage
### HTML Structure
The HTML file includes the following main sections:
- **Header**: Contains the navigation bar and logo.
- **Main Sections**: Includes multiple sections with content and images.
- **Footer**: Contains the newsletter subscription form.

### JavaScript Functionality
1. **Fixed Header**: The header becomes fixed when the user scrolls past its initial position.
    ```javascript
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
    });
    ```

2. **Scroll to Top Button**: Displays a button when the user scrolls down, which scrolls the page back to the top when clicked.
    ```javascript
    let scrollUpBtn = document.getElementById("scrollup");

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

    scrollUpBtn.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
    ```

3. **Intersection Observer**: Animates sections as they come into view.
    ```javascript
    document.addEventListener("DOMContentLoaded", function() {
        const sections = document.querySelectorAll("section");

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1
        });

        sections.forEach(section => {
            observer.observe(section);
        });
    });
    ```

4. **Form Validation**: Validates the email input in the newsletter subscription form.
    ```javascript
    document.addEventListener("DOMContentLoaded", function() {
        const emailInput = document.getElementById("email");
        const emailError = document.getElementById("mailError");
        const form = document.querySelector(".footer__newsletter");

        emailInput.addEventListener("input", function() {
            if (emailInput.validity.typeMismatch) {
                emailError.style.display = "block";
            } else {
                emailError.style.display = "none";
            }
        });

        form.addEventListener("submit", function(event) {
            emailError.style.display = "block";
            event.preventDefault();
        });
    });
    ```

## Contributing
Contributions are welcome! Please fork this repository and submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License.

## Acknowledgements
- Icons by Material Icons
- Illustrations from [Your Illustration Source]

