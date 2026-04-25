// 1. Custom Cursor Follow
const cursor = document.getElementById('cursor');
document.addEventListener('mousemove', (e) => {
    gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5,
        ease: "power3.out"
    });
});

// 2. Loading Sequence
let count = 0;
const counter = document.querySelector('.count');
const loadingInterval = setInterval(() => {
    count += Math.floor(Math.random() * 10) + 1;
    if (count >= 100) {
        count = 100;
        clearInterval(loadingInterval);
        startEntrance();
    }
    counter.innerText = count;
}, 50);

function startEntrance() {
    const tl = gsap.timeline();

    tl.to("#loader", { opacity: 0, duration: 1, delay: 0.5 });
    tl.from(".big-title", { y: 200, skewY: 10, duration: 1.5, ease: "power4.out" }, "-=0.5");
    tl.from(".hero-image-wrapper", { width: 0, duration: 2, ease: "expo.inOut" }, "-=1");
}

// 3. Scroll Interactions
gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".tilt").forEach(item => {
    gsap.from(item, {
        scrollTrigger: {
            trigger: item,
            start: "top bottom",
            end: "top center",
            scrub: true
        },
        y: 100,
        opacity: 0,
        rotate: 5
    });
});

// Subtle Parallax on Hero Image
gsap.to(".hero-img", {
    scrollTrigger: {
        trigger: ".hero",
        scrub: true
    },
    y: -100
});