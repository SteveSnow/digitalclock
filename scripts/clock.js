var rightNow={hour:'',minute:'',second:'',milliseconds:''}

function getRightNow(){
	var currentTime = new Date()
	rightNow.hour=currentTime.getHours()
	rightNow.minute=currentTime.getMinutes()
	rightNow.second=currentTime.getSeconds()
	rightNow.milliseconds=currentTime.getSeconds()
	return rightNow
}

function getLocalTime(){
	var currentTime = new Date()
	return currentTime.toLocaleTimeString()
}