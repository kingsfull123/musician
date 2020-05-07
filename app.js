var tl = new TimelineMax();

tl.staggerFrom(
  "section",
  2,
  {
    opacity: 0,
    scale: 0.5,
    ease: Power2.easeOut,
  },
  0.2
);

// show .from() initially
tl.staggerFrom(
  "h1",
  0.5,
  {
    opacity: 0,
    y: -40,
    ease: Power2.ease,
  },
  0.2,
  "-=2"
);

tl.staggerFrom(
  "p",
  1,
  {
    opacity: 0,
    y: -40,
    ease: Power2.ease,
  },
  0.2,
  "-=1.5"
);
