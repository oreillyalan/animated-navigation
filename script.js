const menuBars = document.getElementById('menu-bars');
const overlay = document.getElementById('overlay');
const nav1 = document.getElementById('nav-1');
const nav2 = document.getElementById('nav-2');
const nav3 = document.getElementById('nav-3');
const nav4 = document.getElementById('nav-4');
const nav5 = document.getElementById('nav-5');
const navItems = [nav1,nav2,nav3,nav4,nav5];

// Control navigation animation

function navAnimation(direction1, direction2){
    navItems.forEach((nav, index)=>{
       nav.classList.replace(`slide-${direction1}-${index+1}`, `slide-${direction2}-${index+1}`);
    })
}


function toggleNav(){
    // Toggle: Menu Bars Open/Closed
    menuBars.classList.toggle('change');

    // Toggle: Menu Active
    overlay.classList.toggle('overlay-active');
    // Animate overlay and nav items in if it is active, and vice versa
    overlay.classList.contains('overlay-active') ? (overlay.classList.replace('overlay-slide-left', 'overlay-slide-right') , navAnimation('out', 'in')): (overlay.classList.replace('overlay-slide-right', 'overlay-slide-left'), navAnimation('in', 'out') );



}


// Event Listeners

menuBars.addEventListener('click', toggleNav);
navItems.forEach((nav) =>{
    nav.addEventListener('click', toggleNav);
})
