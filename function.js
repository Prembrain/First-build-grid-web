function toggleNav(){
    const outerGrid = document.querySelector(".outer-grid");
    // console.log(outerGrid.classList);
    outerGrid.classList.toggle("outer-grid-expanded");

    const nav = document.querySelector("nav");
    // console.log(outerGrid.classList);
    nav.classList.toggle("hide-nav");
} 

