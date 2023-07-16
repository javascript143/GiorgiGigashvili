const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".intext", { y: "0%", duration: 3, stagger: 0.25 });
tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");
tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1 });
tl.fromTo(".main-title", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");