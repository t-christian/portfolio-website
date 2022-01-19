tl = gsap.timeline();
tl.add('start')
tl.fromTo(".card", {scale: 0}, {duration: 1, scale:1}, 'start')
tl.fromTo(".card-body", {opacity:0}, {duration: 2, opacity:1}, 'start')

