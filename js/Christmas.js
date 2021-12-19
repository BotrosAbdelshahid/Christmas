// Start header
let searchBtn = document.querySelector("#search-btn");
let searchForm = document.querySelector("header .search-form");
searchBtn.onclick = () => {
  searchBtn.classList.toggle("fa-times");
  searchForm.classList.toggle("active");
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
};
let menu = document.querySelector("#menu-btn");
let navbar = document.querySelector("header nav");
menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
  searchBtn.classList.remove("fa-times");
  searchForm.classList.remove("active");
};
window.onscroll = () => {
  searchBtn.classList.remove("fa-times");
  searchForm.classList.remove("active");
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
};
// End header
// Start home section
let slides = document.querySelectorAll('.home .slide');
let index = 0;
function next(){
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}
function prev(){
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}
// End home section
let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
window.onscroll = () =>{
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
  section.forEach(sec =>{
    let top = window.scrollY;
    let height = sec.offsetHeight;
    let offset = sec.offsetTop - 150;
    let id = sec.getAttribute('id');
    if(top >= offset && top < offset + height){
      navLinks.forEach(links =>{
        links.classList.remove('active');
        document.querySelector('header nav a[href*='+id+']').classList.add('active');
      });
    };
  });
}