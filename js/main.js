let nav=document.querySelector(".navbar");
let brand=document.querySelector(".navbar .navbar-brand");
let links=document.querySelectorAll(".navbar .nav-item .nav-link");

window.onload=()=>{
    nav.classList.remove("bg-light")
    brand.classList.add("text-white");
    for(i=0; i<links.length ;++i){
        links[i].classList.add("text-white")
    }

}

window.onscroll=function(){
    if(window.scrollY == 0){
        nav.classList.remove("bg-light")
        brand.classList.add("text-white");
        for(i=0; i<links.length ;++i){
            links[i].classList.add("text-white")
        }
    }
    else{
        nav.classList.add("bg-light");
        brand.classList.remove("text-white");
        for(i=0; i<links.length ;++i){
            links[i].classList.remove("text-white")
        } 
    }
}