// *** javascript odev 1 ***

let myClock = document.querySelector("#myClock")

function showTime() {
    const TODAY = new Date()
    let hour = TODAY.getHours()
    let minute = TODAY.getMinutes()
    let second = TODAY.getSeconds()
    let day = TODAY.getDay()
    
    if(day == 0){
        day = "Pazar"
    }else if(day == 1){
        day = "Pazartesi"
    }else if(day == 2){
        day = "Sali"
    }else if(day == 3){
        day = "Carsamba"
    }else if(day == 4){
        day = "Persembe"
    }else if(day == 5){
        day = "Cuma"
    }else if(day == 6){
        day = "Cumartesi"
    }

    let time = `Bugun ${day} ve saat:${hour}.${minute}.${second}`
    myClock.innerHTML = time
    setTimeout(showTime, 1000)
}
showTime()