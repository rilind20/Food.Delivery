// showing nav bar when click menu on mobile
const mobile = document.querySelector('.menu-toggle');
const mobileLink =document.querySelector('.sidebar');

mobile.addEventListener("click", function(){
    mobile.classList.toggle("is-active");
    mobileLink.classList.toggle("active");
})

//close menu click
mobileLink.addEventListener("click", function(){
    const menuBars = document.querySelector(".is-active");
    if(window.innerWidth<=768 && menuBars){
       mobile.classList.toggle("is-active");
       mobileLink.classList.toggle("active");
    }
})

//move the menu to right and left when click back and next
var step = 100;
var stepFilter = 60;
var scrolling = true;

$(".back").bind("click", function(e){
    e.preventDefault();
    $(".highlight-wrapper").animate({
        scrollLeft: "-=" + step +"px"
    })
});

$(".next").bind("click", function(e){
    e.preventDefault();
    $(".highlight-wrapper").animate({
        scrollLeft: "+=" + step +"px"
    })
});


//when click back and next on menu filters
$(".back-menus").bind("click", function(e){
    e.preventDefault();
    $(".filter-wrapper").animate({
        scrollLeft: "-=" + stepFilter +"px"
    })
});

$(".next-menus").bind("click", function(e){
    e.preventDefault();
    $(".filter-wrapper").animate({
        scrollLeft: "+=" + stepFilter +"px"
    });
});

// app.js

$(document).ready(function () {
    // Existing code...

    // Login form submission
    $("#loginForm").submit(function (event) {
        event.preventDefault();
        let username = $("#loginUsername").val();
        let password = $("#loginPassword").val();

        // Add your login logic here
        console.log("Login form submitted. Username: " + username + ", Password: " + password);
    });

    // Register form submission
    $("#registerForm").submit(function (event) {
        event.preventDefault();
        let username = $("#registerUsername").val();
        let password = $("#registerPassword").val();
        let confirmPassword = $("#confirmPassword").val();

        // Add your register logic here
        console.log("Register form submitted. Username: " + username + ", Password: " + password + ", Confirm Password: " + confirmPassword);
    });
});

