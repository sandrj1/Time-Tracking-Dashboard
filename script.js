const url = "data.json";
const images = [
    "images/icon-work.svg",
    "images/icon-play.svg",
    "images/icon-study.svg",
    "images/icon-exercise.svg",
    "images/icon-social.svg",
    "images/icon-self-care.svg"
]
const btnDaily = document.getElementById("btn-daily");
const btnWeekly = document.getElementById("btn-weekly");
const btnMonthly = document.getElementById("btn-monthly");
const buttons = [btnDaily, btnWeekly, btnMonthly];

// Weekly
window.onload = function () {
    const getData = async () => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            showData(data);
        }
        catch (err) {
            console.log(err);
        }
    }
    getData();

    function showData(data) {
        let cards = "";
        for (let i = 0; i < data.length; i++) {
            cards += `
            <div class="card card__number--${i}">
                <div class="card__img card__img--${i}">
                    <img src="${images[i]}" alt="">
                </div>
                <div class="card__box">
                    <article class="card__title">
                        <h2>${data[i].title}</h2>
                        <img class="card__img--ellipsis" src="images/icon-ellipsis.svg" alt="">
                    </article>
                    <section class= "card__info">
                        <h3>${data[i].timeframes.weekly.current}hrs
                        </h3>
                        <p>Last Week - ${data[i].timeframes.weekly.previous}hrs</p>
                    </section>
                </div>
            </div>`;
        }
        const main = document.getElementsByTagName("main")[0];
        main.innerHTML = cards;
        btnWeekly.classList.add("active");
    }
}

btnWeekly.onclick = function () {
    const getWeekly = async () => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            showWeekly(data);
        }
        catch (err) {
            console.log(err);
        }
    }
    getWeekly();

    function showWeekly(data) {
        const section = document.getElementsByTagName("section");
        for (let i = 0; i < section.length; i++){
            for (let j = 0; j < data.length; j++){
                if (i === j) {
                    let weeklyCards = "";
                    weeklyCards += `
                        <h3>${data[i].timeframes.weekly.current}hrs
                        </h3>
                        <p>Last Week - ${data[i].timeframes.weekly.previous}hrs</p>`;
                    section[i].innerHTML = weeklyCards;
                }
            }
        }
        buttons.forEach(button => {
            if (button === btnWeekly) {
                button.classList.add("active");
            } else {
                button.classList.remove("active");
            }
        })
    }
}


// Daily
btnDaily.onclick = function () {
    const getDaily = async () => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            showDaily(data);
        }
        catch (err) {
            console.log(err);
        }
    }
    getDaily();

    function showDaily(data) {
        const section = document.getElementsByTagName("section");
        for (let i = 0; i < section.length; i++){
            for (let j = 0; j < data.length; j++){
                if (i === j) {
                    let dailyCards = "";
                    dailyCards += `
                        <h3>${data[i].timeframes.daily.current}hrs
                        </h3>
                        <p>Yesterday - ${data[i].timeframes.daily.previous}hrs</p>`;
                    section[i].innerHTML = dailyCards;
                }
            }
        }
        buttons.forEach(button => {
            if (button === btnDaily) {
                button.classList.add("active");
            } else {
                button.classList.remove("active");
            }
        })
    }
}


// Monthly
btnMonthly.onclick = function () {
    const getMonthly = async () => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            showMonthly(data);
        }
        catch (err) {
            console.log(err);
        }
    }
    getMonthly();

    function showMonthly(data) {
        const section = document.getElementsByTagName("section");
        for (let i = 0; i < section.length; i++){
            for (let j = 0; j < data.length; j++){
                if (i === j) {
                    let monthlyCards = "";
                    monthlyCards += `
                        <h3>${data[i].timeframes.monthly.current}hrs
                        </h3>
                        <p>Last Month - ${data[i].timeframes.monthly.previous}hrs</p>`;
                    section[i].innerHTML = monthlyCards;
                }
            }
        }
        buttons.forEach(button => {
            if (button === btnMonthly) {
                button.classList.add("active");
            } else {
                button.classList.remove("active");
            }
        })
    }
}