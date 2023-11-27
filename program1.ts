import gsap from "gsap";

export function getProgram1() {
    const fps = 30;
    const tl = gsap.timeline({ paused: true });

    const leds = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((led, index) => {
        const obj = { value: 0 }
        const t = gsap.timeline({ repeat: 2 });
        t.to(obj, {
            value: 1, duration: .2, ease: "power4.inOut"
        });

        t.to(obj, {
            value: 0, duration: 2, ease: "power4.inOut"
        });

        t.to(obj, { duration: 1 });

        const delay = index >= 5 ? .5 : 0;
        tl.add(t, delay + index * .25)
        return obj;
    });

    const trackLength = tl.getChildren()[0].duration();

    const frames: number[][] = [];
    for (let i = trackLength * fps; i < trackLength * fps * 2; i++) {
        tl.seek(i / fps, false);
        frames.push(leds.map(s => s.value));
    }

    return { fps, frames };
}