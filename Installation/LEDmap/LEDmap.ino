//usb port on right is 46
//usb port on left is 50

//LEDmap on port 46
//monthDisplay on port 50

#include <Colorduino.h>

int val = 1;
int oldVal = 0;


int greenR = 0;
int greenG = 255;
int greenB = 0;

int yellowR = 75;
int yellowG = 170;
int yellowB = 51;

int orangeR = 95;
int orangeG = 100;
int orangeB = 0;

//int greenR = 95;
//int greenG = 255;
//int greenB = 94;
//
//int yellowR = 92;
//int yellowG = 110;
//int yellowB = 63;
//
//int orangeR = 255;
//int orangeG = 0;
//int orangeB = 0;

void setup()
{
  Colorduino.Init();
  // compensate for relative intensity differences in R/G/B brightness
  // array of 6-bit base values for RGB (0~63)
  // whiteBalVal[0]=red
  // whiteBalVal[1]=green
  // whiteBalVal[2]=blue
  unsigned char whiteBalVal[3] = {36, 63, 63};

  Colorduino.SetWhiteBal(whiteBalVal);
  //  Colorduino.ColorFill(75, 200, 255);
  //  r whitebalance multiplier = .375
  //  g whitebalance multiplier = .784
  //  b whitebalance multiplier = 1
  Serial.begin(9600);

}

void loop () {
  Serial.print(val);


  //Colorduino.SetPixel(row, cxolumn, red, green, blue)

  if (Serial.available()) {
    val = Serial.read();
  }

  if (val != oldVal) {
    if (val == 1) {
      //      Colorduino.ColorFill(255, 0, 0);
      clearPixels();
      Colorduino.SetPixel(6, 12, greenR, greenG, greenB); // green
      Colorduino.SetPixel(6, 13, yellowR, yellowG, yellowB); //yellow
      Colorduino.SetPixel(6, 14, orangeR, orangeG, orangeB); //orange
      Colorduino.SetPixel(5, 13, yellowR, yellowG, yellowB); //yellow
      Colorduino.SetPixel(5, 14, orangeR, orangeG, orangeB); //orange
      Colorduino.SetPixel(4, 13, yellowR, yellowG, yellowB); //yellow
    } else if (val == 2) {
      clearPixels();
      Colorduino.SetPixel(6, 13, greenR, greenG, greenB); //green
      Colorduino.SetPixel(6, 15, greenR, greenG, greenB); //green
      Colorduino.SetPixel(5, 13, orangeR, orangeG, orangeB); //orange
      Colorduino.SetPixel(5, 14, yellowR, yellowG, yellowB); //yellow
      Colorduino.SetPixel(4, 12, yellowR, yellowG, yellowB); //yellow
    } else if (val == 3) {
      clearPixels();
      Colorduino.SetPixel(6, 13, greenR, greenG, greenB); //green
      Colorduino.SetPixel(6, 14, yellowR, yellowG, yellowB); //yellow
      Colorduino.SetPixel(5, 13, orangeR, orangeG, orangeB); //orange
      Colorduino.SetPixel(5, 14, yellowR, yellowG, yellowB); //yellow
    } else if (val == 4) {
      clearPixels();
      Colorduino.SetPixel(7, 11, greenR, greenG, greenB); //green
      Colorduino.SetPixel(6, 14, yellowR, yellowG, yellowB); //yellow
      Colorduino.SetPixel(5, 12, greenR, greenG, greenB); //green
      Colorduino.SetPixel(5, 13, orangeR, orangeG, orangeB); //orange
      Colorduino.SetPixel(5, 14, yellowR, yellowG, yellowB); //yellow
      Colorduino.SetPixel(4, 14, yellowR, yellowG, yellowB); //yellow
    } else if (val == 5) {
      clearPixels();
      Colorduino.SetPixel(7, 14, greenR, greenG, greenB); //green
      Colorduino.SetPixel(6, 14, yellowR, yellowG, yellowB); //yellow
      Colorduino.SetPixel(5, 13, greenR, greenG, greenB); //green
      Colorduino.SetPixel(5, 14, orangeR, orangeG, orangeB); //orange
    } else if (val == 6) {
      clearPixels();
      Colorduino.SetPixel(6, 12, greenR, greenG, greenB); //green
      Colorduino.SetPixel(6, 13, greenR, greenG, greenB); //green
      Colorduino.SetPixel(6, 14, yellowR, yellowG, yellowB); //yellow
      Colorduino.SetPixel(5, 13, greenR, greenG, greenB); //green
      Colorduino.SetPixel(5, 14, orangeR, orangeG, orangeB); //orange
    } else if (val == 7) {
      clearPixels();
      Colorduino.SetPixel(7, 15, greenR, greenG, greenB); //green
      Colorduino.SetPixel(6, 12, greenR, greenG, greenB); //green
      Colorduino.SetPixel(6, 13, greenR, greenG, greenB); //green
      Colorduino.SetPixel(6, 14, yellowR, yellowG, yellowB); //yellow
      Colorduino.SetPixel(6, 15, greenR, greenG, greenB); //green
      Colorduino.SetPixel(5, 13, yellowR, yellowG, yellowB); //yellow
      Colorduino.SetPixel(5, 14, orangeR, orangeG, orangeB); //orange
      Colorduino.SetPixel(4, 13, yellowR, yellowG, yellowB); //yellow
    } else if (val == 8) {
      clearPixels();
      Colorduino.SetPixel(6, 14, greenR, greenG, greenB); //green
      Colorduino.SetPixel(5, 13, greenR, greenG, greenB); //green
      Colorduino.SetPixel(4, 12, greenR, greenG, greenB); //green
      Colorduino.SetPixel(0, 12, greenR, greenG, greenB); //green
    } else if (val == 9) {
      clearPixels();
      Colorduino.SetPixel(7, 14, greenR, greenG, greenB); //green
      Colorduino.SetPixel(6, 12, greenR, greenG, greenB); //green
      Colorduino.SetPixel(6, 14, yellowR, yellowG, yellowB); //yellow
      Colorduino.SetPixel(5, 13, greenR, greenG, greenB); //green
      Colorduino.SetPixel(5, 14, yellowR, yellowG, yellowB); //yellow
    } else if (val == 10) {
      clearPixels();
      Colorduino.SetPixel(6, 12, greenR, greenG, greenB); //green
      Colorduino.SetPixel(6, 13, greenR, greenG, greenB); //green
      Colorduino.SetPixel(6, 14, yellowR, yellowG, yellowB); //yellow
      Colorduino.SetPixel(5, 13, greenR, greenG, greenB); //green
      Colorduino.SetPixel(5, 14, yellowR, yellowG, yellowB); //yellow
      Colorduino.SetPixel(4, 14, greenR, greenG, greenB); //green
      Colorduino.SetPixel(3, 12, greenR, greenG, greenB); //green
      Colorduino.SetPixel(3, 13, greenR, greenG, greenB); //green
      Colorduino.SetPixel(2, 12, greenR, greenG, greenB); //green
    } else if (val == 11) {
      clearPixels();
      Colorduino.SetPixel(5, 13, yellowR, yellowG, yellowB); //yellow
      Colorduino.SetPixel(5, 14, yellowR, yellowG, yellowB); //yellow
      Colorduino.SetPixel(4, 14, greenR, greenG, greenB); //green
    } else if (val == 12) {
      clearPixels();
      Colorduino.SetPixel(5, 14, yellowR, yellowG, yellowB); //yellow
      Colorduino.SetPixel(4, 12, greenR, greenG, greenB); //green
      Colorduino.SetPixel(3, 9, greenR, greenG, greenB); //green
    }
    oldVal = val;
    delay(10);
  }
}

void clearPixels () {

  for (int r = 0; r < 8; r++) {
    for (int c = 8; c < 16; c++) {
      Colorduino.SetPixel(r, c, 0, 0, 0);
    }
  }
}
