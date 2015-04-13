var cols = 8;
var rows = 8;
var months = 12;
var values = [];
var table;
var cur_month = 1;
var rect_width;
var rect_height;
var slider;
var visualizationCanvas;
var secondaryVisualizationCanvas;
var widthOfDiv;
var displayedMonth;
var monthNames = [];
var canvasWidth = 400;
var canvasHeight = 400;
var barchartData = [];
var locationsMentioned = 0; 

function preload(){
	table = loadTable("data/1988.csv", "csv");
	monthlyValues = loadTable("data/monthlyValues.csv", "csv");
}

function setup() {
	monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
	displayedMonth = document.getElementById('displayedMonth');
	widthOfDiv = $("#visualizationContainer").width();
	canvasWidth = widthOfDiv/2;
	canvasHeight = canvasWidth;
	visualizationCanvas = createCanvas(widthOfDiv, canvasHeight);
	visualizationCanvas.parent('visualizationContainer');

	slider = createSlider(1, 12, 0);
	slider.value(0);
	slider.parent('controlContainer');
	slider.width = 200;
	rect_width = canvasWidth/cols;
	rect_height = canvasHeight/rows;
	color0 = color(255, 204, 0);
	color1 = color(25, 43, 51); 
	color2 = color(143, 178, 89); 
	color3 = color(255, 217, 51); 
	color4 = color(253, 127, 0); 
	var totalRows = table.getRowCount();
	var cur_month_table_index = 0;

	//initialize the 2D array
	for (var i = 0; i < totalRows/rows; i++) {
		var temp_row = [];
		for (var c = 0; c < cols; c++) {
			temp_row.push(table.getNum(cur_month_table_index, 0));
			cur_month_table_index++;
		}
		values.push(temp_row);
	}



}

function draw() {
	background(43,43,43);

	cur_month = slider.value();
	 var upper_bound = cur_month*rows - 1;
		// var upper_bound = cur_month*rows;

	var lower_bound = (cur_month*rows) - rows;


	var temp_row_counter = 0;
	for (var i = lower_bound; i <= upper_bound; i++) {
		for (var j = 0; j < rows; j++) {
			if (values[i][j] == 0) {
				fill(0);
			} else if (values[i][j] == 1) {
				fill(color2);
			} else if (values[i][j] < 5) {
				fill(color3);
			} else {
				fill(color4);
			}
			rect(j*rect_height, temp_row_counter*rect_width, rect_width, rect_height);
		}

		temp_row_counter++;		
	}

	var barX = (canvasWidth);
	var barY = 50;
	var barWidth = (canvasWidth/20);
	var barXPosition = canvasWidth + (canvasWidth/10);
	var barYPosition = canvasHeight/2;
	var barHeightMultiplier = 5;
	//define appearance of individual bar chart bars
	fill(100,100,100);
	noStroke();

	//create a bar chart with the height representing number of locations mentioned that month
	for (var a=0; a < monthlyValues.getRowCount(); a++) {
		rect(barXPosition, barYPosition, barWidth, barY);
		barXPosition = barXPosition + canvasWidth/15;
		barY = ((canvasHeight) * .01*barHeightMultiplier* (monthlyValues.getNum(a,0)));
		locationsMentioned = monthlyValues.getNum(cur_month-1,0);
	}

	//set label on slider
	$("#displayedMonth").text(monthNames[cur_month-1]);
	//set label in sketch
	fill(255);

	text("Displayed Month: " + monthNames[cur_month-1], canvasWidth, canvasHeight/4);
	text("Number of locations mentioned: " + locationsMentioned, canvasWidth, (canvasHeight/4)+20);

	$( "input" ).change(function() {
	});
} 
