class Inputs {
  constructor() {
    this.inputs = document.querySelectorAll('.field_wrapper input[type="text"], .field_wrapper input[type="email"]');
  }

  isInputEmptyClass(input) {
    const label = input
      .parentElement
      .parentElement
      .getElementsByTagName("label")[0];

    if (input.value) {
      label
        .classList
        .remove("is_empty");
    } else {
      label
        .classList
        .add("is_empty");
    }
  }

  focusInput(event) {
    const input = event.target;
    const inputWrapper = event.target.parentElement;
    const fieldWrapper = input.parentElement.parentElement;
    const label = fieldWrapper.getElementsByTagName("label")[0];

    label.classList.add("is_active");
    inputWrapper.classList.add("is_active");
  }

  blurInput(event) {
    const input = event.target;
    const inputWrapper = event.target.parentElement;
    const fieldWrapper = input.parentElement.parentElement;
    const label = fieldWrapper.getElementsByTagName("label")[0];

    label.classList.remove("is_active");
    inputWrapper.classList.remove("is_active");
    this.isInputEmptyClass(input);
  }

  initInputs() {
    Array.from(this.inputs).forEach((input) => {
      input.addEventListener("focus", (event) => {
        this.focusInput(event);
      });

      input.addEventListener("blur", (event) => {
        this.blurInput(event);
      });

      this.isInputEmptyClass(input);
    });
  }
}

export default new Inputs();
