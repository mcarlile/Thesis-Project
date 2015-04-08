var cols = 8;
var rows = 8;
var month = 1;
var values;

function preload(){
	var table = loadTable("1988.csv", "csv");
}

function setup() {
	createCanvas(800, 800);
	color0 = color(255, 204, 0);
	color1 = color(25, 43, 51); 
	color2 = color(143, 178, 89); 
	color3 = color(255, 217, 51); 
	color4 = color(253, 127, 0); 
	background(0);
}

function draw() {


	if (mouseIsPressed) {
		if (month <= 11) {
			month++;
		} else if (month ==12) {
			month = 1;
		}
	} 
} 

function defineTable() {

}
