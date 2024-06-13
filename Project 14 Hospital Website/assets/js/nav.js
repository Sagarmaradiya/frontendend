const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener('click', ()=>{
   //Animate Links
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });

    //Hamburger Animation
    hamburger.classList.toggle("toggle");
});



//-------------------------------- Counting Number 


// const counters = document.querySelectorAll(".counter");

// counters.forEach((counter) => {
//   counter.innerText = "0";
//   const updateCounter = () => {
//     const target = +counter.getAttribute("data-target");
//     const count = +counter.innerText;
//     const increment = target / 200;
//     if (count < target) {
//       counter.innerText = `${Math.ceil(count + increment)}`;
//       setTimeout(updateCounter, 1);
//     } else counter.innerText = target;
//   };
//   updateCounter();
// });