int cols = 8;
int rows = 8;
int month = 1;
color color0 = color (0, 0, 0);
color color1 = color(25, 43, 51); 
color color2 = color(143, 178, 89); 
color color3 = color(255, 217, 51); 
color color4 = color(253, 127, 0); 

int[][] January = {  

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

int [][] February = {
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

int[][] March = {  
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

int[][] April = {  
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

int[][] May = {  
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

void setup() {
  size(800, 800);
}

void draw() {
  if (month ==1) {
    for (int i = 0; i < January[0].length; i++) {
      for (int j = 0; j < January[1].length; j++) {
        if (January[i][j] == 0) {
          fill(0);
          rect(i*width/cols, j*height/rows, width/cols, width/cols);
        } else if (January[i][j] == 1) {
          fill(color2);
          rect(i*width/cols, j*height/rows, width/cols, width/cols);
        } else if (January[i][j] < 5) {
          fill(color3);
          rect(i*width/cols, j*height/rows, width/cols, width/cols);
        } else {
          fill(color4);
          rect(i*width/cols, j*height/rows, width/cols, width/cols);
        }
      }
    }
  } else if (month == 2) {

    // Two nested loops allow us to visit every spot in a 2D array.   
    // For every column I, visit every row J.

    for (int i = 0; i < February[0].length; i++) {
      for (int j = 0; j < February[1].length; j++) {
        if (February[i][j] == 0) {
          fill(0);
          rect(i*width/cols, j*height/rows, width/cols, width/cols);
        } else if (February[i][j] == 1) {
          fill(color2);
          rect(i*width/cols, j*height/rows, width/cols, width/cols);
        } else if (February[i][j] < 5) {
          fill(color3);
          rect(i*width/cols, j*height/rows, width/cols, width/cols);
        } else {
          fill(color4);
          rect(i*width/cols, j*height/rows, width/cols, width/cols);
        }
      }
    }
  } else if (month == 3) {

    // Two nested loops allow us to visit every spot in a 2D array.   
    // For every column I, visit every row J.

    for (int i = 0; i < March[0].length; i++) {
      for (int j = 0; j < March[1].length; j++) {
        if (March[i][j] == 0) {
          fill(0);
          rect(i*width/cols, j*height/rows, width/cols, width/cols);
        } else if (March[i][j] == 1) {
          fill(color2);
          rect(i*width/cols, j*height/rows, width/cols, width/cols);
        } else if (March[i][j] < 5) {
          fill(color3);
          rect(i*width/cols, j*height/rows, width/cols, width/cols);
        } else {
          fill(color4);
          rect(i*width/cols, j*height/rows, width/cols, width/cols);
        }
      }
    }
  } else if (month == 4) {

    // Two nested loops allow us to visit every spot in a 2D array.   
    // For every column I, visit every row J.

    for (int i = 0; i < April[0].length; i++) {
      for (int j = 0; j < April[1].length; j++) {
        if (April[i][j] == 0) {
          fill(0);
          rect(i*width/cols, j*height/rows, width/cols, width/cols);
        } else if (April[i][j] == 1) {
          fill(color2);
          rect(i*width/cols, j*height/rows, width/cols, width/cols);
        } else if (April[i][j] < 5) {
          fill(color3);
          rect(i*width/cols, j*height/rows, width/cols, width/cols);
        } else {
          fill(color4);
          rect(i*width/cols, j*height/rows, width/cols, width/cols);
        }
      }
    }
  } else if (month == 5) {

    // Two nested loops allow us to visit every spot in a 2D array.   
    // For every column I, visit every row J.

    for (int i = 0; i < May[0].length; i++) {
      for (int j = 0; j < May[1].length; j++) {
        if (May[i][j] == 0) {
          fill(0);
          rect(i*width/cols, j*height/rows, width/cols, width/cols);
        } else if (May[i][j] == 1) {
          fill(color2);
          rect(i*width/cols, j*height/rows, width/cols, width/cols);
        } else if (May[i][j] < 5) {
          fill(color3);
          rect(i*width/cols, j*height/rows, width/cols, width/cols);
        } else {
          fill(color4);
          rect(i*width/cols, j*height/rows, width/cols, width/cols);
        }
      }
    }
  }
}

void keyPressed() {
  if (keyCode == DOWN) {
    if (month <= 11) {
      month++;
    }
  } else if (keyCode == UP) {
    if (month >= 1) {
      month --;
    }
  }
}

