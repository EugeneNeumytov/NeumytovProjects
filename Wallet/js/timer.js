function timeDiff(date1, date2) {
    return Date.parse(date2) - Date.parse(date1);
}

//запуск таймера
let timer = setInterval(function () {
    let currentDate = new Date();
    let endDate = new Date(2021, 0, 31, 23, 59, 59);
    let diffTime = timeDiff(currentDate, endDate);

    if(diffTime <= 0){
        clearInterval(timer);
        //alert('Time out');
    }else{
        let res = new Date(diffTime);
        document.getElementById('days').innerHTML = res.getDate() - 1;
        document.getElementById('hours').innerHTML = res.getUTCHours();
        document.getElementById('minutes').innerHTML = res.getUTCMinutes();
        document.getElementById('seconds').innerHTML = res.getUTCSeconds();
        document.getElementById('days1').innerHTML = res.getUTCDate() - 1;
        document.getElementById('hours1').innerHTML = res.getUTCHours();
        document.getElementById('minutes1').innerHTML = res.getUTCMinutes();
        document.getElementById('seconds1').innerHTML = res.getUTCSeconds();
    }
}, 1000)