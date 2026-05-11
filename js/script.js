// Navbar shadow on scroll

window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".custom-navbar");

    navbar.classList.toggle("scrolled", window.scrollY > 50);

});

// Active nav link

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(link => {

    link.addEventListener("click", function () {

        navLinks.forEach(nav => nav.classList.remove("active"));

        this.classList.add("active");

    });

});

// Smooth scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});
// ================= REVIEW FORM =================

const reviewForm = document.getElementById("reviewForm");

if(reviewForm){

    reviewForm.addEventListener("submit", function(e){

        e.preventDefault();

        alert("Thank You! Your review has been submitted.");

        reviewForm.reset();

    });

}
// ================= BUTTON CLICK =================

const pricingButtons = document.querySelectorAll(".pricing-btn");

pricingButtons.forEach(button => {

    button.addEventListener("click", function(){

        alert("Your plan has been selected!");

    });

});
// ================= SIGNUP FORM =================

const signupForm = document.getElementById("signupForm");

if(signupForm){

    signupForm.addEventListener("submit", function(e){

        e.preventDefault();

        alert("Account Created Successfully!");

        signupForm.reset();

    });

}