const regeneratorRuntime = require("regenerator-runtime");

async function getDates(dates) {

    let date = {};
    let msInDay = 24*3600*1000;

    let depart = dates.depart;
    let retur = dates.retur;
    let today = dates.today;

    date.timeLeft = Math.floor((depart - today) / msInDay);
    date.duration = Math.floor((retur - depart) / msInDay)

    if (date.timeLeft == -1) {
        date.timeLeft = "Your trip is today"
    } else {
        date.timeLeft++;
    }

    return date;
}

let dates = {
    depart: 1584662400000, retur: 1585094400000, today: 1584583719062
}

test ("It should be an object", () => {
    expect(typeof getDates(dates)).toBe("object");
});