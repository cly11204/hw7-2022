

let video = document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video.load();
	video.loop = false;
	video.autoplay = false;

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play()
	console.log(video.volume)
	let output = document.querySelector("#volume"); 
	output.innerHTML = slider.value + "%";

});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause()
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate = 0.9 * video.playbackRate;
	console.log(video.playbackRate);
	console.log("Slow Down Video")
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate = 1.1 * video.playbackRate;
	console.log(video.playbackRate);
	console.log("Speed Up Video")
});

document.querySelector("#skip").addEventListener("click", function() {
	if (video.currentTime < video.duration){
		video.currentTime = video.currentTime + 10;
		console.log(video.currentTime);
		console.log("Skip 10 Seconds")
	}

	else { 
		video.currentTime = 0;
		console.log(currentTime)
	}
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted == false) { 
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute";
		console.log("Muted")

	}
	else { 
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute"
		console.log("Unmuted")
	}
});

//Adjusting the slider
const slider = document.querySelector("#slider");

slider.addEventListener("input", function(){; 
	let output = document.querySelector("#volume");
	output.innerHTML = slider.value + "%";
	video.volume = slider.value/100;
})

slider.addEventListener("mouseup", function(){; 
	let output = document.querySelector("#volume"); 
	output.innerHTML = slider.value + "%";
})

slider.addEventListener("touchend", function(){; 
	let output = document.querySelector("#volume"); 
	output.innerHTML = slider.value + "%";
	video.volume = slider.value/100;
	console.log(slider.value/100)
})


// slider.oninput = function (){
// 	output.innerHTML = this.value +"%";
// }
// })

document.querySelector("#vintage").addEventListener("click", function(){
	video.classList.add("oldSchool")
})

document.querySelector("#orig").addEventListener("click", function(){
	video.classList.remove("oldSchool")
})
