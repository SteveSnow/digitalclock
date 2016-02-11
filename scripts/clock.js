var rightNow = {
    hour: '',
    minute: '',
    second: '',
    millisecond: ''
}

function setClock() {
    var now = getRightNow()
    $('#hours').text(displayCheck(now.hour))
    $('#minutes').text(displayCheck(now.minute))
    $('#seconds').text(displayCheck(now.second))
    $('#milliseconds').text(displayCheck(now.millisecond))
    checkEven(now.minute)
}

function getRightNow() {
    var time = new Date()
    rightNow.hour = time.getHours()
    rightNow.minute = time.getMinutes()
    rightNow.second = time.getSeconds()
    rightNow.millisecond = time.getMilliseconds()
    return rightNow
}

function displayCheck(val) {
    if (val < 10) {
        return '0' + val;
    } else {
        return val;
    }
}

function getLocalTime() {
    var currentTime = new Date()
    return currentTime.toLocaleTimeString()
}

