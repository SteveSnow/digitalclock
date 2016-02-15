function checkEven() {
    var now= getRightNow()
    var min= now.minute
    if (min % 2 === 0) {
        changeMinute("oneMinute", "blue")
        changeMinute("tenMinute", "blue")
    } else {
                changeMinute("oneMinute", "red")
        changeMinute("tenMinute", "red")
    }
}



function changeMinute(part, color) {
	var partString='#' + part
    $(partString).find('.lt').css('background-color',color)
    $(partString).find('.lb').css('background-color',color)
    $(partString).find('.rt').css('background-color',color)
    $(partString).find('.rb').css('background-color',color)
    $(partString).find('.t').css('background-color',color)
    $(partString).find('.m').css('background-color',color)
    $(partString).find('.b').css('background-color',color)
}