class AppCovid {
  constructor() {
    this.firstAppBackground = document.querySelector(".start");
    this.frontBtn = document.querySelector(".button");
    this.h1 = document.querySelector(".search__main-text");
    this.searchBtn = document.querySelector(".search__button");
    this.input = document.querySelector(".search__input");
    this.countryConteiner = document.querySelector(".country");
    this.hiddenFirstBackground();
  }
  hiddenFirstBackground() {
    this.frontBtn.addEventListener("click", () => {
      this.firstAppBackground.style.left = "-100%";
      this.h1.classList.add("search__main-text--animation");
      this.searchBtn.classList.add("search__button--aply");
      this.input.classList.add("search__input--animation");
      this.countryConteiner.classList.add("country--animation");
    });
  }
}

new AppCovid();
