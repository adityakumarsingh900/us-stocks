import { cubicBezier, translate3d } from './utils';

// Type: Keyframe
const base = {
  animationTimingFunction: cubicBezier(0.2125, 0.61, 0.355, 1.0),
  transform: translate3d(0, 0, 0),
};

//   Type: Animation
const bounce = {
  '0%': base,
  '20%': base,
  '40%': {
    animationTimingFunction: cubicBezier(0.755, 0.05, 0.855, 0.06),
    transform: translate3d(0, '-30px', 0),
  },
  '43%': {
    animationTimingFunction: cubicBezier(0.755, 0.05, 0.855, 0.06),
    transform: translate3d(0, '-30px', 0),
  },
  '53%': base,
  '70%': {
    animationTimingFunction: cubicBezier(0.755, 0.05, 0.855, 0.06),
    transform: translate3d(0, '-50px', 0),
  },
  '80%': base,
  '90%': {
    transform: translate3d(0, '-4px', 0),
  },
  '100%': base,
};

export default bounce;
