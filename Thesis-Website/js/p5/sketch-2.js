var cols = 8;
var rows = 8;
var month = 1;
var months = 12;
var values = [];
var table;

function preload(){
	table = loadTable("1988.csv", "csv");
	console.log(table);
}

function setup() {
	createCanvas(800, 800);
	color0 = color(255, 204, 0);
	color1 = color(25, 43, 51); 
	color2 = color(143, 178, 89); 
	color3 = color(255, 217, 51); 
	color4 = color(253, 127, 0); 
	background(111);
	var totalRows = table.getRowCount();

	for (var i = 0; i < months; i++) {

		var temp_matrix = [];
		for (var x = 0; x < cols; x++) {
		    temp_matrix[x] = []; // create nested array
		    for (var y = 0; y < rows; y++) {
		      temp_matrix[x][y] = "";
		    }
		}

		values.push(temp_matrix);

	}

	for (var i = 0; i < table.rows.length; i++) {
		var matrix_index = Math.floor(i / 64);
		var cur_column = i % rows;
		var cur_row = Math.floor((i / cols) / (Math.floor(i / 64)+1));

		values[matrix_index][cur_column][cur_row] = table.getNum(i, 0);
		// console.log(values[matrix_index][cur_column][cur_row]);

		// console.log("Matrix: " + Math.floor(i / 64));
		// console.log("Column: " + i % rows);
		// console.log("Row: " + Math.floor((i / cols) / (Math.floor(i / 64) + 1)));
		//console.log(table.getNum(i, 0));
	}

	console.log(values);

	// for (var m = 0; m < months; m++) {
	// 	for (var c = 0; c < cols; c++) {
	// 		values[c]=[];
	// 		for (var r = 0; r < rows; r++) {
	// 			console.log(values[c]);
	// 			values[r+m*rows][c] = table.getNum(m*rows*cols + c*rows + r, 0);
	// 		}
	// 	}
	// }
}


// function draw() {

//  for (var i = ( (month*cols)-cols); i < cols*month; i++) {
//     for (var j = 0; j < rows; j++) {
//       if (values[i][j] == 0) {
//         fill(0);
//       } else if (values[i][j] == 1) {
//         fill(color2);
//       } else if (values[i][j] < 5) {
//         fill(color3);
//       } else {
//         fill(color4);
//       }
//       rect(((i*width/cols))-width*(month-1), ((j*height/rows)), width/cols, width/cols);
//     }
//   }

// 	if (mouseIsPressed) {
// 		if (month <= 11) {
// 			month++;
// 		} else if (month ==12) {
// 			month = 1;
// 		}
// 	} 
// } 

var draw_counter = 0;
var active_month_index = 0;
var rect_width = 100;
var rect_height = 100;
function draw() {

	var matrix_to_render = values[active_month_index];
	
	if (draw_counter == 0) {
		console.log(matrix_to_render);
	}
	draw_counter++;

	for (var r = 0; r < rows; r++) {
		for (var c = 0; c < cols; c++) {
			//console.log(matrix_to_render[r][c]);
		    if (matrix_to_render[r][c] == 0) {
		        fill(0);
		    } else if (matrix_to_render[r][c] == 1) {
		        fill(color2);
		    } else if (matrix_to_render[r][c] < 5) {
		        fill(color3);
		    } else {
		        fill(color4);
		    }
		    //console.log(r*width);
		    rect(r*rect_width,c*rect_height, rect_width, rect_height);
		     // rect((((r*width/cols))-width*(active_month_index-1)), ((c*height/rows)), width/cols, width/cols);
		     // console.log("Now drawing rectangle at: " + (((r*width/cols))-width*(active_month_index-1)));
		}
	}

	// if (mouseIsPressed) {
	// 	if (active_month_index <= 10) {
	// 		active_month_index++;
	// 	} else {
	// 		active_month_index = 0;
	// 	}
	// } 
}

function mouseClicked() {
		if (active_month_index <= 10) {
			active_month_index++;
		} else {
			active_month_index = 0;
		}	
		console.log(active_month_index);
} 

