var x = document.cookie

if (x=null) {
    gsap.fromTo(".nav-link", {opacity: 0}, {duration: 1, opacity: 1});
    document.cookie = 'visited: true; path:/'
    }

else{
    gsap.fromTo(".nav-link", {opacity: 1}, {duration: 1, opacity: 1});
}

gsap.fromTo(".animateUp", {opacity: 0, y:50}, {duration: 0.75, opacity: 1, y:0});
gsap.fromTo("img", {opacity: 0, y:50}, {duration: 0.75, opacity: 1, y:0});

function scaleUp(id) {
    gsap.to("#" + id, {scale: 1.1, duration: 0.5});
}

function scaleDown(id) {
    gsap.to("#" + id, {scale: 1, duration: 0.5});
}
