//sets the time every second
window.setInterval(function(){setTime()},1000)
//changes the background color every hour
window.setInterval(function(){setColor()},60*60*1000)

function setTime(){
	var dateHeader=document.getElementById('date')
	dateHeader.innerHTML=getLocalTime()
}