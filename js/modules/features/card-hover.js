export function setupProjectCardHover(root) {
    const gsap = window.gsap;
    const cards = root.querySelectorAll(".project-card");

    if (!gsap) return;

    cards.forEach(card => {
        const image = card.querySelector("img");

        if (!image) return;

        const fullHeight = card.offsetHeight;

        const startAnimation = () => {
            gsap.to(card, {
                scale: 1.06,
                boxShadow: "0 20px 36px rgba(30, 42, 34, 0.3)",
                
                zIndex: 2,
                duration: 0.35,
                ease: "power2.out",
            });
            gsap.to(image, { height: fullHeight, duration: 0.35, ease: "power2.out" });
        };

        const endAnimation = () => {
            gsap.to(card, {
                    scale: 1,
                    boxShadow: "0 0 0 rgba(0, 0, 0, 0)",
                    zIndex: 0,
                    duration: 0.35,
                    ease: "power2.out",
                });
                gsap.to(image, { height: 190, duration: 0.35, ease: "power2.out" });
        };

        image.addEventListener("mouseenter", startAnimation);
        image.addEventListener("mouseleave", endAnimation);
    });
}
