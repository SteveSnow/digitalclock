var rightNow = {
    hour: '',
    minute: '',
    second: '',
    millisecond: ''
}

function getRightNow() {
    var time = new Date()
    rightNow.hour = time.getHours()
    rightNow.minute = time.getMinutes()
    rightNow.second = time.getSeconds()
    rightNow.millisecond = time.getMilliseconds()
    return rightNow
}

function formatMinute(val) {
    if (val < 10) {
        return '0' + val;
    } else {
        return val;
    }
}
