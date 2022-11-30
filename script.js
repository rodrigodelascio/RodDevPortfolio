const scrollIcon = document.getElementById("scrollIcon")


// Scroll icon to hide

window.addEventListener('scroll', () => {
    if (window.scrollY >= 100) {
        scrollIcon.style.visibility = "hidden"
    } else {
        scrollIcon.style.visibility = "visible"
    }
})

