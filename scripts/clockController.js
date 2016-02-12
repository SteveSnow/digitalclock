function updateDigitalClock() {
    controlHours()
    controlMinutes()
}

function controlHours() {
    var now = getRightNow();
    // debugger;
    if (now.hour < 10) {
        setTenHour(0);
        setOneHour(now.hour);
    } else if (now.hour >= 10 && now.hour <= 12) {
        var h = now.hour - 10;
        setTenHour(1);
        setOneHour(h);

    } else if (now.hour > 12) {
        var h = now.hour - 12;
        setTenHour(0);
        setOneHour(h);
    }
}

function controlMinutes() {
    var now = getRightNow();
    var m = formatMinute(now.minute);
    var mm= m %10

    setTenMinute(((m-(m%10))/10));
    setOneMinute(m % 10);
}
