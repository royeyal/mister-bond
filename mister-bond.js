gsap.registerPlugin(ScrollTrigger, SplitText);

function setupSplits() {
  const targets = gsap.utils.toArray("p.align-center");
  targets.forEach((target) => {
    let splitHeading = new SplitText(target, { type: "words,chars" });
    let chars = splitHeading.chars; //an array of all the divs that wrap each character
    gsap.fromTo(
        chars,
        { 
	y: 100,
	opacity: 0,
	rotationX: 180,
	transformOrigin: "0% 50% -50",
	scale: 0,
        },
        {
	y: 0,
	opacity: 1,
	rotationX: 0,
	stagger: 0.02,
	scale: 1,
	duration: 0.2,
	ease: 'power4.out',
	scrollTrigger: {
			trigger: target,
			//markers: true,
			start: "top 85%",
			end: "bottom center",
			//scrub: true
		},
	}
      );
  });
}
setupSplits();
