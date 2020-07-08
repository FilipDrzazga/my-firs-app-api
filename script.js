class AppCovid {
    constructor() {
        this.firstAppBackground = document.querySelector('.start');
        this.frontBtn = document.querySelector('.button');
        this.hiddenFirstBackground()
    }
    hiddenFirstBackground() {
        this.frontBtn.addEventListener('click', () => {
            this.firstAppBackground.style.left = '-100%';
        })
    }
}

new AppCovid()