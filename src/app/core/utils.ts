const deviceWidth = {
  small: 27 * 16,
  medium: 48 * 16,
  large: 90 * 16,
};

export const isMobile = (): boolean =>
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  ) || window.innerWidth <= deviceWidth.small;
export const toRem = (val: number): string => val / 16 + 'rem';
