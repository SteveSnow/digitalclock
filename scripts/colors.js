var colors = ['orange', 'green', 'blue', 'yellow']
var colorIndex = 0

function setColor() {
    switch (colorIndex) {
        case 0:
            $('.clockPart').css('backgroundColor', colors[colorIndex])
            colorIndex += 1           
            break;
        case 1:
            $('.clockPart').css('backgroundColor', colors[colorIndex])
            colorIndex += 1
            break;
        case 2:
            $('.clockPart').css('backgroundColor', colors[colorIndex])
            colorIndex += 1
            break;
        case 3:
            $('.clockPart').css('backgroundColor', colors[colorIndex])
            colorIndex = 0
            break;
    }

}
