// boolean to keep track of our timer state
var active = false;


// main function that will run if active is true
function start_timer() {
	if(active) {
		var timer = document.getElementById('my_timer').innerHTML;
		var arr = timer.split(':'); //splitting our timer into an array with ':', hours goes into arr[0], minutes goes into [1], so on...
		var hour = arr[0]; //hours
		var min = arr[1]; //minutes
		var sec = arr[2]; //seconds

		if (sec === 59) {
			if (min === 59) {
				hour++;
				min = 0;
				if (hour < 10) hour = '0' + hour;
			} else {
				min++;
			}
			if (min < 10) min = '0' + min;
			sec = 0;
		} else {
			sec++;
			if (sec < 10) sec = '0' + sec;
		}

		//update HTML
		document.getElementById('my_timer').innerHTML = hour + ':' + min + ':' + sec;
		setTimeout(start_timer, 1000); //repeats 
	}
}

//function to change states between start and pause 
function changeState() {
	if (active === false) {
		active = true;
		start_timer();
		console.log('Timer has been started');
		document.getElementById('control').innerHTML = 'PAUSE';
	} else {
		active = false;
		console.log('Timer is on pause');
		document.getElementById('control').innerHTML = 'START';
	}
}

//reset function 
function reset() {
	document.getElementById('my_timer').innerHTML = '0' + ':' + '0' + ':' + '0';
	console.log('Timer has been reset');
}