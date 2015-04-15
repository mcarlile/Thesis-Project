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
var chartXpositions = [];
var barWidth;
var barWidthHasBenSet = false;

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

	var barX = (canvasWidth);
	barWidth = (canvasWidth/14);
	barWidthHasBenSet = true;
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

	if (barWidthHasBenSet == true) {
		drawChart();
		drawMap();
		var mappedMouse = round(map(mouseX, canvasWidth+barWidth, width-barWidth, 1, 12));

		if (mouseY >= 0 && mouseY <= height) {
			if (mappedMouse >= 1 && mappedMouse <=12) {
				slider.value(mappedMouse);
			}
		}
		// if (mouseX > chartXpositions[0]-barWidth) {
		// 	if (mouseX < chartXpositions[1]-barWidth) {
		// 		slider.value(1);
		// 	} else if (mouseX < chartXpositions[2]-barWidth) {
		// 		slider.value(2);
		// 	} else if (mouseX < chartXpositions[3]-barWidth) {
		// 		slider.value(3);
		// 	} else if (mouseX < chartXpositions[4]-barWidth) {
		// 		slider.value(4);
		// 	} else if (mouseX < chartXpositions[5]-barWidth) {
		// 		slider.value(5);
		// 	} else if (mouseX < chartXpositions[6]-barWidth) {
		// 		slider.value(6);
		// 	} else if (mouseX < chartXpositions[7]-barWidth) {
		// 		slider.value(7);
		// 	} else if (mouseX < chartXpositions[8]-barWidth) {
		// 		slider.value(8);
		// 	} else if (mouseX < chartXpositions[9]-barWidth) {
		// 		slider.value(9);
		// 	} else if (mouseX < chartXpositions[10]-barWidth) {
		// 		slider.value(10);
		// 	} else if (mouseX < chartXpositions[11]-barWidth) {
		// 		slider.value(11);
		// 	} else if (mouseX < chartXpositions[12]-barWidth) {
		// 		slider.value(12);
		// 	} else {
		// 		slider.value(13);
		// 	}
		// }
	// 	if (mouseX > chartXpositions[0]-barWidth) {

	// 		for (var i = 0; i < chartXpositions.length(); i++) {
	// 			if (mouseX < chartXpositions[i+1]-barWidth) {
	// 				slider.value(i+1);
	// 		}
	// 	}
	// }
}
}

function drawChart() {
	var barXPosition = canvasWidth + barWidth;
	var barYPosition = canvasHeight/2;
	var barHeightMultiplier = 20;
	var chartMargin = barWidth;

	//define appearance of individual bar chart bars
	fill(100,100,100);
	stroke(43,43,43);
	strokeWeight(3);
	var barY;

	//create a bar chart with the height representing number of locations mentioned that month
	for (var a = 0; a < monthlyValues.getRowCount(); a++) {
		if (cur_month-1 == a) {
			fill(206,206,206);
		} else {
			fill(100,100,100);
		}
		barY = map(monthlyValues.getNum(a,0),0,9,0,canvasHeight/2);
		locationsMentioned = monthlyValues.getNum(cur_month-1,0);
		rect(barXPosition, (height-barY)-chartMargin, barWidth, barY);


		barXPosition = barXPosition + canvasWidth/14;
		chartXpositions[a] = barXPosition;

	}

	//set label on slider
	$("#displayedMonth").text(monthNames[cur_month-1]);
	//set label in sketch
	fill(255);
	noStroke();

	textFont("Arial");
	textSize(12);
	fill(131,131,131);
	text("DISPLAYED MONTH: ", canvasWidth+barWidth, canvasHeight/8);
	textFont("Baskerville");
	textSize(24);
	fill(255);
	text(monthNames[cur_month-1], canvasWidth+barWidth, canvasHeight/8+25);

	textFont("Arial");
	textSize(12);
	fill(131,131,131);
	text("LOCATIONS MENTIONED: ", canvasWidth+barWidth, canvasHeight/8+75);
	textFont("Baskerville");
	textSize(24);
	fill(255);
	text(locationsMentioned, canvasWidth+barWidth, canvasHeight/8+100);
} 

function drawMap() {
	cur_month = slider.value();
	var upper_bound = cur_month*rows - 1;
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
			stroke(43,43,43);
			strokeWeight(3);
			rect(j*rect_height, temp_row_counter*rect_width, rect_width, rect_height);
		}
		temp_row_counter++;		
	}
}
