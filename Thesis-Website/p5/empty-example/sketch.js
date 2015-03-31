var cols = 8;
var rows = 8;
var month = 1;
var color0 = color (0, 0, 0);
var color1 = color(25, 43, 51); 
var color2 = color(143, 178, 89); 
var color3 = color(255, 217, 51); 
var color4 = color(253, 127, 0); 

var[] January = {  

	{
		0, 0, 0, 0, 0, 0, 0, 0
	}
	, 
	{
		0, 0, 0, 0, 0, 0, 0, 0
	}
	, 
	{
		0, 0, 0, 0, 0, 0, 0, 0
	}
	, 
	{
		0, 0, 0, 0, 0, 0, 0, 0
	}
	, 
	{
		0, 1, 0, 0, 0, 0, 0, 0
	}
	, 
	{
		0, 3, 3, 2, 0, 0, 0, 0
	}
	, 
	{
		0, 9, 5, 0, 0, 0, 0, 0
	}
	, 
	{
		0, 0, 0, 0, 0, 0, 0, 0
	}
};

var [] February = {
	{
		0, 0, 0, 0, 0, 0, 0, 0
	}
	, 
	{
		0, 0, 0, 0, 0, 0, 0, 0
	}
	, 
	{
		0, 0, 0, 0, 0, 0, 0, 0
	}
	, 
	{
		0, 0, 0, 0, 0, 0, 0, 0
	}
	, 
	{
		0, 0, 0, 1, 0, 0, 0, 0
	}
	, 
	{
		0, 1, 5, 0, 0, 0, 0, 0
	}
	, 
	{
		0, 0, 3, 0, 0, 0, 0, 0
	}
	, 
	{
		0, 1, 0, 0, 0, 0, 0, 0
	}
};

var[] March = {  
	{
		0, 0, 0, 0, 0, 0, 0, 0
	}
	, 
	{
		0, 0, 0, 0, 0, 0, 0, 0
	}
	, 
	{
		0, 0, 0, 0, 0, 0, 0, 0
	}
	, 
	{
		0, 0, 0, 0, 0, 0, 0, 0
	}
	, 
	{
		0, 0, 0, 0, 0, 0, 0, 0
	}
	, 
	{
		0, 1, 6, 0, 0, 0, 0, 0
	}
	, 
	{
		0, 3, 4, 0, 0, 0, 0, 0
	}
	, 
	{
		0, 0, 0, 0, 0, 0, 0, 0
	}
};

var[] April = {  
	{
		0, 0, 0, 0, 0, 0, 0, 0
	}
	, 
	{
		0, 0, 0, 0, 0, 0, 0, 0
	}
	, 
	{
		0, 0, 0, 0, 0, 0, 0, 0
	}
	, 
	{
		1, 0, 0, 0, 0, 0, 0, 0
	}
	, 
	{
		0, 0, 1, 0, 0, 0, 0, 0
	}
	, 
	{
		0, 0, 5, 0, 0, 0, 0, 0
	}
	, 
	{
		0, 3, 3, 2, 0, 0, 0, 0
	}
	, 
	{
		0, 0, 0, 0, 0, 0, 0, 0
	}
};

var[] May = {  
	{
		0, 0, 0, 0, 0, 0, 0, 0
	}
	, 
	{
		0, 0, 0, 0, 0, 0, 0, 0
	}
	, 
	{
		0, 0, 0, 0, 0, 0, 0, 0
	}
	, 
	{
		0, 0, 0, 0, 0, 0, 0, 0
	}
	, 
	{
		0, 0, 0, 0, 0, 0, 0, 0
	}
	, 
	{
		0, 1, 2, 0, 0, 0, 0, 0
	}
	, 
	{
		1, 3, 8, 0, 0, 0, 0, 0
	}
	, 
	{
		0, 0, 0, 0, 0, 0, 0, 0
	}
};

var[] June = {  
	{
		0, 0, 0, 0, 0, 0, 0, 0
	}
	, 
	{
		0, 0, 0, 0, 0, 0, 0, 0
	}
	, 
	{
		0, 0, 0, 0, 0, 0, 0, 0
	}
	, 
	{
		0, 0, 0, 0, 0, 0, 0, 0
	}
	, 
	{
		0, 1, 0, 0, 0, 0, 0, 0
	}
	, 
	{
		0, 1, 1, 0, 0, 0, 0, 0
	}
	, 
	{
		0, 3, 5, 0, 0, 0, 0, 0
	}
	, 
	{
		0, 0, 0, 0, 0, 0, 0, 0
	}
};

var[] July = {  
	{
		0, 0, 0, 0, 0, 0, 0, 0
	}
	, 
	{
		0, 0, 0, 0, 0, 0, 0, 0
	}
	, 
	{
		0, 0, 0, 0, 0, 0, 0, 0
	}
	, 
	{
		0, 0, 0, 0, 0, 0, 0, 0
	}
	, 
	{
		0, 1, 0, 0, 0, 0, 0, 0
	}
	, 
	{
		0, 1, 3, 3, 0, 0, 0, 0
	}
	, 
	{
		0, 3, 6, 0, 0, 0, 0, 0
	}
	, 
	{
		1, 1, 0, 0, 0, 0, 0, 0
	}
};

var[] August = {  
	{
		0, 0, 0, 0, 0, 0, 0, 0
	}
	, 
	{
		0, 0, 0, 0, 0, 0, 0, 0
	}
	, 
	{
		0, 0, 0, 0, 0, 0, 0, 0
	}
	, 
	{
		0, 0, 0, 0, 0, 0, 0, 0
	}
	, 
	{
		0, 0, 0, 1, 0, 0, 0, 1
	}
	, 
	{
		0, 0, 1, 0, 0, 0, 0, 0
	}
	, 
	{
		0, 1, 0, 0, 0, 0, 0, 0
	}
	, 
	{
		0, 0, 0, 0, 0, 0, 0, 0
	}
};

var[] September = {  
	{
		0, 0, 0, 0, 0, 0, 0, 0
	}
	, 
	{
		0, 0, 0, 0, 0, 0, 0, 0
	}
	, 
	{
		0, 0, 0, 0, 0, 0, 0, 0
	}
	, 
	{
		0, 0, 0, 0, 0, 0, 0, 0
	}
	, 
	{
		0, 1, 0, 0, 0, 0, 0, 0
	}
	, 
	{
		0, 0, 1, 0, 0, 0, 0, 0
	}
	, 
	{
		1, 3, 4, 0, 0, 0, 0, 0
	}
	, 
	{
		0, 0, 0, 0, 0, 0, 0, 0
	}
};

var[] October = {  
	{
		0, 0, 0, 0, 0, 0, 0, 0
	}
	, 
	{
		0, 0, 0, 0, 0, 0, 0, 0
	}
	, 
	{
		0, 0, 0, 0, 0, 0, 0, 0
	}
	, 
	{
		0, 0, 0, 0, 0, 0, 0, 0
	}
	, 
	{
		0, 1, 0, 0, 1, 1, 0, 0
	}
	, 
	{
		0, 1, 1, 0, 1, 0, 0, 0
	}
	, 
	{
		0, 3, 4, 1, 0, 0, 0, 0
	}
	, 
	{
		0, 0, 0, 0, 0, 0, 0, 0
	}
};

var[] November = {  
	{
		0, 0, 0, 0, 0, 0, 0, 0
	}
	, 
	{
		0, 0, 0, 0, 0, 0, 0, 0
	}
	, 
	{
		0, 0, 0, 0, 0, 0, 0, 0
	}
	, 
	{
		0, 0, 0, 0, 0, 0, 0, 0
	}
	, 
	{
		0, 0, 0, 0, 0, 0, 0, 0
	}
	, 
	{
		0, 0, 2, 0, 0, 0, 0, 0
	}
	, 
	{
		0, 0, 2, 1, 0, 0, 0, 0
	}
	, 
	{
		0, 0, 0, 0, 0, 0, 0, 0
	}
};

var[] December = {  
	{
		0, 0, 0, 0, 0, 0, 0, 0
	}
	, 
	{
		0, 0, 0, 0, 1, 0, 0, 0
	}
	, 
	{
		0, 0, 0, 0, 0, 0, 0, 0
	}
	, 
	{
		0, 0, 4, 0, 0, 0, 0, 0
	}
	, 
	{
		0, 0, 0, 1, 0, 0, 0, 0
	}
	, 
	{
		0, 0, 0, 0, 0, 0, 0, 0
	}
	, 
	{
		0, 0, 0, 0, 0, 0, 0, 0
	}
	, 
	{
		0, 0, 0, 0, 0, 0, 0, 0
	}
};

function setup() {
	createCanvas(800, 800);
}

function draw() {
	if (month ==1) {
		for (var i = 0; i < January[0].length; i++) {
			for (var j = 0; j < January[1].length; j++) {
				if (January[i][j] == 0) {
					fill(0);
				} else if (January[i][j] == 1) {
					fill(color2);
				} else if (January[i][j] < 5) {
					fill(color3);
				} else {
					fill(color4);
				}
				rect(i*width/cols, j*height/rows, width/cols, width/cols);
			}
		}
	} else if (month == 2) {

		for (var i = 0; i < February[0].length; i++) {
			for (var j = 0; j < February[1].length; j++) {
				if (February[i][j] == 0) {
					fill(0);
				} else if (February[i][j] == 1) {
					fill(color2);
				} else if (February[i][j] < 5) {
					fill(color3);
				} else {
					fill(color4);
				}
				rect(i*width/cols, j*height/rows, width/cols, width/cols);
			}
		}
	} else if (month == 3) {
		for (var i = 0; i < March[0].length; i++) {
			for (var j = 0; j < March[1].length; j++) {
				if (March[i][j] == 0) {
					fill(0);
				} else if (March[i][j] == 1) {
					fill(color2);
				} else if (March[i][j] < 5) {
					fill(color3);
				} else {
					fill(color4);
				}
				rect(i*width/cols, j*height/rows, width/cols, width/cols);
			}
		}
	} else if (month == 4) {
		for (var i = 0; i < April[0].length; i++) {
			for (var j = 0; j < April[1].length; j++) {
				if (April[i][j] == 0) {
					fill(0);
				} else if (April[i][j] == 1) {
					fill(color2);
				} else if (April[i][j] < 5) {
					fill(color3);
				} else {
					fill(color4);
				}
				rect(i*width/cols, j*height/rows, width/cols, width/cols);
			}
		}
	} else if (month == 5) {
		for (var i = 0; i < May[0].length; i++) {
			for (var j = 0; j < May[1].length; j++) {
				if (May[i][j] == 0) {
					fill(0);
				} else if (May[i][j] == 1) {
					fill(color2);
				} else if (May[i][j] < 5) {
					fill(color3);
				} else {
					fill(color4);
				}
				rect(i*width/cols, j*height/rows, width/cols, width/cols);
			}
		}
	} else if (month == 6) {
		for (var i = 0; i < June[0].length; i++) {
			for (var j = 0; j < June[1].length; j++) {
				if (June[i][j] == 0) {
					fill(0);
				} else if (June[i][j] == 1) {
					fill(color2);
				} else if (June[i][j] < 5) {
					fill(color3);
				} else {
					fill(color4);
				}
				rect(i*width/cols, j*height/rows, width/cols, width/cols);
			}
		}
	} else if (month == 7) {
		for (var i = 0; i < July[0].length; i++) {
			for (var j = 0; j < July[1].length; j++) {
				if (July[i][j] == 0) {
					fill(0);
				} else if (July[i][j] == 1) {
					fill(color2);
				} else if (July[i][j] < 5) {
					fill(color3);
				} else {
					fill(color4);
				}
				rect(i*width/cols, j*height/rows, width/cols, width/cols);
			}
		}
	} else if (month == 8) {
		for (var i = 0; i < August[0].length; i++) {
			for (var j = 0; j < August[1].length; j++) {
				if (August[i][j] == 0) {
					fill(0);
				} else if (August[i][j] == 1) {
					fill(color2);
				} else if (August[i][j] < 5) {
					fill(color3);
				} else {
					fill(color4);
				}
				rect(i*width/cols, j*height/rows, width/cols, width/cols);
			}
		}
	} else if (month == 9) {
		for (var i = 0; i < September[0].length; i++) {
			for (var j = 0; j < September[1].length; j++) {
				if (September[i][j] == 0) {
					fill(0);
				} else if (September[i][j] == 1) {
					fill(color2);
				} else if (September[i][j] < 5) {
					fill(color3);
				} else {
					fill(color4);
				}
				rect(i*width/cols, j*height/rows, width/cols, width/cols);
			}
		}
	} else if (month == 10) {
		for (var i = 0; i < October[0].length; i++) {
			for (var j = 0; j < October[1].length; j++) {
				if (October[i][j] == 0) {
					fill(0);
				} else if (October[i][j] == 1) {
					fill(color2);
				} else if (October[i][j] < 5) {
					fill(color3);
				} else {
					fill(color4);
				}
				rect(i*width/cols, j*height/rows, width/cols, width/cols);
			}
		}
	} else if (month == 11) {
		for (var i = 0; i < November[0].length; i++) {
			for (var j = 0; j < November[1].length; j++) {
				if (November[i][j] == 0) {
					fill(0);
				} else if (November[i][j] == 1) {
					fill(color2);
				} else if (November[i][j] < 5) {
					fill(color3);
				} else {
					fill(color4);
				}
				rect(i*width/cols, j*height/rows, width/cols, width/cols);
			}
		}
	} else if (month == 12) {
		for (var i = 0; i < December[0].length; i++) {
			for (var j = 0; j < December[1].length; j++) {
				if (December[i][j] == 0) {
					fill(0);
				} else if (December[i][j] == 1) {
					fill(color2);
				} else if (December[i][j] < 5) {
					fill(color3);
				} else {
					fill(color4);
				}
				rect(i*width/cols, j*height/rows, width/cols, width/cols);
			}
		}
	}

	if (mouseIsPressed) {
		if (month <= 11) {
			month++;
		} else if (month ==12) {
			month = 1;
		}
	} 
} 

