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

function preload(){
	table = loadTable("data/1988.csv", "csv");
}

function setup() {
	monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "December"]
	console.log(monthNames);
	displayedMonth = document.getElementById('displayedMonth');
	console.log(displayedMonth)
	visualizationCanvas = createCanvas(400, 400);
	visualizationCanvas.parent('visualizationContainer');

	slider = createSlider(0, 11, 0);
	slider.parent('controlContainer')
	rect_width = width/cols;
	rect_height = height/rows;
	color0 = color(255, 204, 0);
	color1 = color(25, 43, 51); 
	color2 = color(143, 178, 89); 
	color3 = color(255, 217, 51); 
	color4 = color(253, 127, 0); 
	background(0);
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
			rect(j*rect_height, temp_row_counter*rect_width, rect_width, rect_height);
		}

		temp_row_counter++;		
	}
$("#displayedMonth").text(monthNames[cur_month-1]);

} 
