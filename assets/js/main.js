/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) =>{
    console.log("showMenu called"); // Log to check function call
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        });
    }
}

showMenu('nav-toggle','nav-menu')
/* Certification*/
document.addEventListener("DOMContentLoaded", function() {
    const allItems = document.querySelectorAll('.certification__item');
    const showMoreBtn = document.getElementById('show-more-btn');

    // Initially show only the first 6 certifications
    if (allItems.length > 8) {
        for (let i = 8; i < allItems.length; i++) {
            allItems[i].style.display = 'none';
        }
    }

    // Add event listener to "Show More" button
    showMoreBtn.addEventListener('click', function() {
        for (let i = 8; i < allItems.length; i++) {
            allItems[i].style.display = 'block'; // Change to 'flex' if using flexbox
        }
        showMoreBtn.style.display = 'none'; // Hide button after expanding
    });
});


/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))
document.addEventListener("DOMContentLoaded", function() {
    // Scroll to the top of the page immediately after it is loaded
    window.scrollTo(0, 0);

    // Your existing code
    const allItems = document.querySelectorAll('.certification__item');
    const showMoreBtn = document.getElementById('show-more-btn');

    if (allItems.length > 8) {
        for (let i = 8; i < allItems.length; i++) {
            allItems[i].style.display = 'none';
        }
    }

    showMoreBtn.addEventListener('click', function() {
        for (let i = 8; i < allItems.length; i++) {
            allItems[i].style.display = 'block';
        }
        showMoreBtn.style.display = 'none';
    });

    // Other existing scripts
});

// Your other existing DOMContentLoaded or other event scripts

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

  sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,


//     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{ interval: 20});
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{ interval: 20});
sr.reveal('.home__social-icon',{ interval: 20});
sr.reveal('.skills__box, .work__img, .contact__input',{ interval: 20});
