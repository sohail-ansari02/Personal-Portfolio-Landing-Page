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
