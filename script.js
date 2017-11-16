let box1 = document.querySelector("#box1");
box1.addEventListener("click", function() {
	if(box1.classList.contains("box1-animate")) {
		box1.classList.remove("box1-animate");
	} else {
		box1.classList.add("box1-animate");
	}
})

let box3 = document.querySelector("#box3");
box3.addEventListener("click", function() {
	if(!(box3.classList.contains("box3-animate"))){
		box3.classList.add("box3-animate");
	}
})

let box4 = document.querySelector("#box4");
box4.addEventListener("click", function() {
	if(box4.classList.contains("box4-animate")) {
		box4.classList.remove("box4-animate");
	} else {
		box4.classList.add("box4-animate");
	}
})

let input = document.querySelector("input");
input.addEventListener("keydown", function(event){
	if(event.key === "Enter") {
		console.log("Your input was: " + input.value);
		input.value = "";
	}
})