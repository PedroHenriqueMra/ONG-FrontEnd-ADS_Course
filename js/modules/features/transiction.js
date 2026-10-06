export function setupPageTransiction(root) {
    const gsap = window.gsap;

    if (!gsap) return;

    gsap.fromTo(
        root,
        { opacity: 0, x: -14 },
        { opacity: 1, x: 0, duration: 0.3, ease: "power2.out" }
    );
}