
//visited cookie logic
if (document.cookie=='') {
    gsap.fromTo(".nav-link", {opacity: 0}, {duration: 1, opacity: 1});
    document.cookie = 'visited: true; SameSite=None; Secure; path:/'
    }
else{
    gsap.fromTo(".nav-link", {opacity: 1}, {duration: 1, opacity: 1});
}

//animation logic
gsap.fromTo(".animateUp", {opacity: 0, y:50}, {duration: 0.75, opacity: 1, y:0});
gsap.fromTo("img", {opacity: 0, y:50}, {duration: 0.75, opacity: 1, y:0});

function scaleUp(id) {
    gsap.to("#" + id, {scale: 1.1, duration: 0.5});
}

function scaleDown(id) {
    gsap.to("#" + id, {scale: 1, duration: 0.5});
}
