class ScrollEvent {
  constructor() {
    this.window = window;
    this.delay = 100;
    this.triggerDocking = 10;
    this.header = document.querySelector("body > .header");
    this.scrollAlreadyTriggered = false;
  }

  throttle(fn, wait) {

    if (!this.scrollAlreadyTriggered) {
      this.scrollAlreadyTriggered = true;
      this.dockHeader();

      setTimeout(() => {
        this.scrollAlreadyTriggered = false;
      }, wait);
    }
  }

  dockHeader() {
    if (window.scrollY > this.triggerDocking) {
      this.header.classList.add("is_docked");
    } else {
      this.header.classList.remove("is_docked");
    }
    console.log("ping", this.window.scrollY);
  }

  initScrollEvent() {
    window.addEventListener(
        "scroll", () => {
          this.throttle(this.dockHeader, this.delay);
        }
    );


  }

}

export default new ScrollEvent();
