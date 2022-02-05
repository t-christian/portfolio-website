var x = document.cookie

if (x=null) {
    console.log("fade in")
    gsap.fromTo(".nav-link", {opacity: 0}, {duration: 1, opacity: 1});
    }
else{
    console.log("no fade in")
}

gsap.fromTo(".animateUp", {opacity: 0, y:50}, {duration: 0.75, opacity: 1, y:0});
gsap.fromTo("img", {opacity: 0, y:50}, {duration: 0.75, opacity: 1, y:0});

function scaleUp(id) {
    gsap.to("#" + id, {scale: 1.1, duration: 0.5});
}

function scaleDown(id) {
    gsap.to("#" + id, {scale: 1, duration: 0.5});
}


//set cookie for nav bar fade in
console.log('setting cookie')
document.cookie = 'visited: true; path:/'