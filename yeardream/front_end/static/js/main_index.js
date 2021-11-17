import { animate, spring, stagger } from "https://cdn.skypack.dev/motion";

animate(
  ".box",
  { y: [200, 0], opacity: 1 },
  { duration: 5, easing: spring(), delay: stagger(0.5) }
);
