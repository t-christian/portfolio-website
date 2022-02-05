
//visited cookie logic
//© <Jan 24 2022> <peterbe> <https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie>
if (!document.cookie.split('; ').find(row => row.startsWith('visited'))) {
    gsap.fromTo(".nav-link", {opacity: 0}, {duration: 1, opacity: 1});
    document.cookie = 'visited: true; path:/'
    }
else{
    var all = document.getElementsByClassName('nav-link');
    for (var i = 0; i < all.length; i++) {
    all[i].style.opacity = '1';
    //https://stackoverflow.com/questions/9436123/javascript-changing-a-class-style
    }
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
