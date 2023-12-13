function calculateTime(deliveries) {
    const limit = 7 * 60 * 60; // 7 horas en segundos
    let totalDuration = 0;

    for (let delivery of deliveries) {
        let [hours, minutes, seconds] = delivery.split(':').map(Number);
        totalDuration += hours * 3600 + minutes * 60 + seconds;
    }

    let remainingTime =  totalDuration- limit ;
    let sign = remainingTime >= 0 ? '' : '-';
    remainingTime = Math.abs(remainingTime);

    let hours = Math.floor(remainingTime / 3600);
    let minutes = Math.floor((remainingTime % 3600) / 60);
    let seconds = remainingTime % 60;
    let hh = sign + String(hours).padStart(2, '0')
    let mm = String(minutes).padStart(2, '0')
    let ss = String(seconds).padStart(2, '0')

    return `${hh}:${mm}:${ss}`;
}

console.log(calculateTime(['00:10:00', '01:00:00', '03:30:00'])); // '-02:20:00'
console.log(calculateTime(['02:00:00', '05:00:00', '00:30:00'])); // '00:30:00'
console.log(calculateTime(['00:45:00', '00:45:00', '00:00:30', '00:00:30'])); // '-05:29:00'
