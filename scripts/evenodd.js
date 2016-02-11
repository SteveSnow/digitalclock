function checkEven(min) {
    if (min % 2 === 0) {
        $('#minutes').css('color','red')
    } else {
        $('#minutes').css('color','black')
    }
}
