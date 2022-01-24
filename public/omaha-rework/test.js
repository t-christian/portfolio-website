var cards = document.getElementsByClassName("top-card")

for (var i = 0; i < cards.length; i++) {
    cards[i].addEventListener('mouseenter', focusOn, false);
    cards[i].addEventListener('mouseleave', focusOff, false);
}

function focusOn() {
    console.log("test2")
        gsap.fromTo($(this), {scale: 1}, {scale: 1.1, duration: 0.5})

        
}

function focusOff() {
    gsap.fromTo($(this), {scale: 1.1}, {scale: 1, duration: 0.5})
}