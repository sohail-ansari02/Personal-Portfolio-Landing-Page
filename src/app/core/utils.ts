import Toastify from 'toastify-js';

export const Breakpoints = {
  small: '(max-width: 27em)',
  medium: '(max-width: 48em)',
  large: '(max-width: 90em)',
};

export const isMobile = (): boolean =>
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  ) || window.matchMedia(Breakpoints.small).matches;
export const toRem = (val: number): string => val / 16 + 'rem';

export const AnimationTransitionDelay = 0.34 * (10 ^ 3); // [seconds] * 10^3

export const toast = (msg: string) =>
  Toastify({
    text: msg,
    duration: 2500,
    newWindow: true,
    close: true,
    gravity: 'bottom', // `top` or `bottom`
    position: 'center', // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: 'white',
      color: '#0069e6',
    },
    onClick: function () {}, // Callback after click
  }).showToast();
