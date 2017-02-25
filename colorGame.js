var numberOfSquares = 6;
var colors = [];
var pickedColor; 
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
colorDisplay.textContent = pickedColor;
var h1 = document.querySelector("h1");
var messageDisplay = document.querySelector("#message");
var rst = document.querySelector("#rst");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
	//mode button event Listeners
	for(var i=0; i<modeButtons.length;i++){
	modeButtons[i].addEventListener("click",function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");
		//figure out how many squares to show
		this.textContent === "Easy" ? numberOfSquares = 3 : numberOfSquares = 6;
		reset();
		});
	}
	
	for(var i=0; i<squares.length;i++){
	// add initial colors to squares
		squares[i].style.background = colors[i];

		// add click listeners
		squares[i].addEventListener("click",function(){
			var clickedColor = this.style.background;
			console.log(clickedColor);   
			if(clickedColor === pickedColor){
				messageDisplay.textContent = "Correct!";
				h1.style.background = clickedColor;
				rst.textContent = "Play Again"
				changeColors(clickedColor);
			}else{
				this.style.background = "#232323";
				messageDisplay.textContent = "Try Again";
			}
	});

	reset();
}

}


function reset(){
	//generage all new colors
	colors = generateRandomColors(numberOfSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match picked Color;
	colorDisplay.textContent = pickedColor;
	//change colors of squares
	messageDisplay.textContent = "";
	for(var i=0;i<squares.length;i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		}else {
			squares[i].style.display = "none";
		}
	}
	h1.style.background = "steelblue";
	rst.textContent = "New Colors";

}

rst.addEventListener("click",function(){
	reset();
})



function changeColors(color){
	for(var i=0; i < colors.length; i++){
		squares[i].style.background = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);  //[1 , 6)
	return colors[random];
}

function generateRandomColors(num){
	var arr = [];
	// get random color and push into arr
	for(var i=0; i < num; i++){
		arr.push(randomColor());
	}
	return arr;
}

function randomColor(){
	//pikc a "red" from 0 - 255
	var r = Math.floor(Math.random() * 256)
	//pick a "green" from 0 - 255
	var g = Math.floor(Math.random() * 256)
	//pick a "blue" from 0 - 255
	var b = Math.floor(Math.random() * 256)

	return "rgb(" + r + ", " + g +", " + b + ")";
}