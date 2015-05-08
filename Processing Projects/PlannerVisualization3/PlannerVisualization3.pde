//usb port on right is 46
//usb port on left is 50

//LEDmap on port 46
//monthDisplay on port 50

import processing.serial.*;


int cols = 8;
int rows = 8;
int month = 1;
int months = 12;
int [][] values;

color color0 = color (0, 0, 0);
color color1 = color(25, 43, 51); 
color color2 = color(143, 178, 89); 
color color3 = color(255, 217, 51); 
color color4 = color(253, 127, 0); 

Serial colorduinoPort;
Serial monthDisplayPort;



void setup() {
  size(800, 800);
  println(Serial.list());

  // ledMap is port50
  String colorduinoPortName = Serial.list()[2]; 
  colorduinoPort = new Serial(this, colorduinoPortName, 9600);

  //monthDisplay is port46
  String monthDisplayPortName = Serial.list()[3];
  monthDisplayPort = new Serial(this, monthDisplayPortName, 9600);


  //load the CSV into a table
  Table table = loadTable("1988.csv");
  int totalRows = table.getRowCount();

  //create a 2D array of ints called values 
  values = new int [totalRows][cols];

  //set the values in the array according to the values in the table 
  for (int m = 0; m < months; m++) {
    for (int c = 0; c < cols; c++) {
      for (int r = 0; r < rows; r++) {
        values[r+m*rows][c] = table.getInt(m*rows*cols + c*rows + r, 0);
      }
    }
  }
}

void draw() {
  colorduinoPort.write(month);
  monthDisplayPort.write(month);



  for (int i = ( (month*cols)-cols); i < cols*month; i++) {
    for (int j = 0; j < rows; j++) {
      if (values[i][j] == 0) {
        fill(0);
      } else if (values[i][j] == 1) {
        fill(color2);
      } else if (values[i][j] < 5) {
        fill(color3);
      } else {
        fill(color4);
      }
      rect(((i*width/cols))-width*(month-1), ((j*height/rows)), width/cols, width/cols);
    }
  }
} 


void keyPressed() {
  if (keyCode == DOWN) {

    if (month <= 11) {
      month++;
    } else if (month ==12) {
//      month = 1;
    }
  } else if (keyCode == UP) {

    if (month >= 2) {
      month --;
    } else if (month == 1) {
//      month = 12;
    }
  }
  println(month);
}

