const isActive = ()=>{
    window.scrollY > 0 ? document.getElementById("menu").classList.add("bg-color") 
    : 
    document.getElementById("menu").classList.remove("bg-color")
}

window.addEventListener("scroll",isActive)