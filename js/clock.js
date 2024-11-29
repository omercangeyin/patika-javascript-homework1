// *** javascript odev 1 ***

let myClock = document.querySelector("#myClock")

function showTime() {
    const TODAY = new Date()
    let hour = TODAY.getHours()
    let minute = TODAY.getMinutes()
    let second = TODAY.getSeconds()
    let time = `${hour} : ${minute} : ${second}`
    myClock.innerHTML = time
    setTimeout(showTime, 1000)
}
showTime()