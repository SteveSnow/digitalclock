var colorIndex = 0

function setColor() {
    switch (colorIndex) {
        case 0:
            $('#clockBody').css('backgroundColor', 'green')
            colorIndex += 1           
            break;
        case 1:
            $('#clockBody').css('backgroundColor', 'blue')
            colorIndex += 1
            break;
        case 2:
            $('#clockBody').css('backgroundColor', 'yellow')
            colorIndex += 1
            break;
        case 3:
            $('#clockBody').css('backgroundColor', 'black')
            colorIndex = 0
            break;
    }

}
