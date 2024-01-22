export abstract class Swapper {
  swapper: HTMLElement;
  constructor(swapper: HTMLElement) {
    this.swapper = swapper
  }

  initScroll(): void {
    this.swapper.style.scrollBehavior = 'auto';
    this.swapper.scrollTo(this.swapper.scrollWidth, 0);
    this.swapper.style.scrollBehavior = 'smooth';
  }

  scrollToStart(): void {
    this.swapper.style.scrollBehavior = 'smooth';
    this.swapper.scrollTo(0, 0);
  }

  onApearInView(): void {
    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        // If intersectionRatio is 0, the target is out of view
        // and we do not need to do anything.
        if (entries[0].intersectionRatio <= 0) return;

        this.scrollToStart();
        intersectionObserver.disconnect();
      },
      {
        threshold: 1, //for 100% element appears in screen
      }
    );
    intersectionObserver.observe(this.swapper);
  }
}
