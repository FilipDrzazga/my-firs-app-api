class AppCovid {
    constructor() {
        this.firstAppBackground = document.querySelector(".start");
        this.startAppBtn = document.querySelector(".button");
        this.h1 = document.querySelector(".search__main-text");
        this.searchBtn = document.querySelector(".search__button");
        this.input = document.querySelector(".search__input");
        this.countryConteiner = document.querySelector(".country");
        this.img = document.querySelector('.flag');
        this.countryName = document.querySelector('.country__name');

        this.allInfected = document.querySelector('.country__infected-number')
        this.allRecovered = document.querySelector('.country__recovered-number')
        this.allDeath = document.querySelector('.country__death-number')
        this.dailyInfected = document.querySelector('.country__daily-number')
        this.data = document.querySelector('.country__data-number');

        this.counters = [...document.querySelectorAll('[data-target]')];

        this.flagApiUrl = 'https://www.countryflags.io';
        this.statsCovidApiUrl = 'https://api.covid19api.com/summary';

        this.submitAllInfo();
    }


    hiddenFirstBackground() {
        this.startAppBtn.addEventListener("click", () => {
            this.firstAppBackground.style.left = "-100%";
            this.h1.classList.add("search__main-text--animation");
            this.searchBtn.classList.add("search__button--aply");
            this.input.classList.add("search__input--animation");
            this.countryConteiner.classList.add("country--animation");
        });
    }

    counterResults() {
        this.counters.forEach(counter => {
            counter.textContent = '0';

            const updateCounter = () => {
                const target = +counter.getAttribute('data-target');
                const c = +counter.textContent;
                const increment = 500;

                if (c < target) {
                    counter.textContent = c + increment;
                    setTimeout(updateCounter, 1);
                } else {
                    counter.textContent = target;
                }
            }
            updateCounter()
        })
    }

    getFlagFromApi() {
        let iso2 = this.input.value;
        this.img.setAttribute('src', `${this.flagApiUrl}/${iso2}/shiny/64.png`);
    }

    getAllStatsFromApi() {
        return fetch(`${this.statsCovidApiUrl}`)
            .then(resp => resp.json())
            .then(data => data.Countries)
    }

    showStatsInApp() {
        let iso2 = this.input.value
        this.getAllStatsFromApi()
            .then(countries => {
                let country = countries.find(countries => countries.CountryCode === iso2)
                return country
            })
            .then(country => {
                this.allInfected.setAttribute('data-target', `${country.TotalConfirmed}`);
                this.allRecovered.setAttribute('data-target', `${country.TotalRecovered}`);
                this.allDeath.setAttribute('data-target', `${country.TotalDeaths}`);
                this.dailyInfected.setAttribute('data-target', `${country.NewConfirmed}`);
                this.data.textContent = country.Date.slice(0, 10);
                this.countryName.textContent = country.Country;
            })
    }


    submitAllInfo() {
        this.hiddenFirstBackground()
        this.searchBtn.addEventListener('click', () => {
            this.getFlagFromApi()
            this.showStatsInApp()
            this.counterResults()
            console.log(this.counters)
        })
    }
}

new AppCovid();