async function getDates(dates) {

    try {
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
    } catch {
        console.log("Error - Dates");
    }

}

module.exports = getDates;