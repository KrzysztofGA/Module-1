function showDayAndTime() {
    var div = document.getElementById('dayAndTime');
    var div2 = document.getElementById('dayType');
    var day = document.getElementById('day').value;
    var hour = document.getElementById('hour').value;
    var minute = document.getElementById('minute').value;
    var dayNo = parseInt(day);
    var dayOutText;

    if (dayNo == 1) {day = 'Mandag';}
    if (dayNo == 2) {day = 'Tirsdag';}
    if (dayNo == 3) {day = 'Onsdag';}
    if (dayNo == 4) {day = 'Torsdag';}
    if (dayNo == 5) {day = 'Fredag';}
    if (dayNo == 6) {day = 'Lørdag';}
    if (dayNo == 7) {day = 'Søndag';}

    if (dayNo < 5) {dayOutText = 'Mandag - Torsdag';}
    else if (dayNo == 5) {dayOutText = 'Fredag';}
    else if (dayNo == 6) {dayOutText = 'Lørdag';}
    else {
        dayOutText = 'Søndag';
    }

    if (dayNo < 5 && hour) {
        if (hour > 10 && hour < 17) {div2.innerHTML = 'Åpent';}
        else {div2.innerHTML = 'Stengt';}
    }
    if (dayNo == 5) {
        if (hour > 10 && hour < 18) {div2.innerHTML = 'Åpent';}
        else {div2.innerHTML = 'Stengt';}
    }
    if (dayNo == 6) {
        if (hour > 10 && hour < 14) {div2.innerHTML = 'Åpent';}
        else {div2.innerHTML = 'Stengt';}
    }
    if (dayNo == 7) {div2.innerHTML = 'Stengt';}

    div.innerHTML = '<li>' + 'Dag: ' + day +
        '<li>' + 'Time: ' + hour +
        '<li>' + 'Minutter: ' + minute +
        '<li>' + 'Du har valgt: ' + dayOutText;
}
