// Grab the toggle button
const toggleButton = document.getElementById('toggle-button');
// grab the navbarlink element
const navbarLinks = document.getElementsByClassName('navbar-links')[0];
// when toggleButton is pressed toggle active class
toggleButton.addEventListener('click', () =>{
    navbarLinks.classList.toggle('active');
})