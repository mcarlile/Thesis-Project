#include <Colorduino.h>

int val = 1;


void setup()
{
  Colorduino.Init();
  // compensate for relative intensity differences in R/G/B brightness
  // array of 6-bit base values for RGB (0~63)
  // whiteBalVal[0]=red
  // whiteBalVal[1]=green
  // whiteBalVal[2]=blue
  unsigned char whiteBalVal[3] = {28, 63, 63};

  Colorduino.SetWhiteBal(whiteBalVal);
  //  Colorduino.ColorFill(255, 255, 255);
  Serial.begin(9600);

}

void loop () {


  //Colorduino.SetPixel(row, column, red, green, blue)

  if (Serial.available()) {
    val = Serial.read();
    Serial.print(val);

  }

  if (val == 1) {
    clearPixels();
    Colorduino.SetPixel(6, 12, 255, 255, 255); //green
    Colorduino.SetPixel(6, 13, 255, 255, 255); //yellow
    Colorduino.SetPixel(6, 14, 255, 255, 255); //orange
    Colorduino.SetPixel(5, 13, 255, 255, 255); //yellow
    Colorduino.SetPixel(5, 14, 255, 255, 255); //orange
    Colorduino.SetPixel(4, 13, 255, 255, 255); //yellow
  } else if (val == 2) {
    clearPixels();
    Colorduino.SetPixel(7, 8, 255, 255, 255); //green
  }

  delay(10);
}

void clearPixels () {

  for (int r = 0; r < 8; r++) {
    for (int c = 8; c < 15; c++) {
      Colorduino.SetPixel(r, c, 0, 0, 0);
    }
  }

  //    Colorduino.SetPixel(0, 8, 0, 0, 0);
  //    Colorduino.SetPixel(0, 9, 0, 0, 0);
  //    Colorduino.SetPixel(0, 10, 0, 0, 0);
  //    Colorduino.SetPixel(0, 11, 0, 0, 0);
  //    Colorduino.SetPixel(0, 12, 0, 0, 0);
  //    Colorduino.SetPixel(0, 13, 0, 0, 0);
  //    Colorduino.SetPixel(0, 14, 0, 0, 0);
  //    Colorduino.SetPixel(0, 15, 0, 0, 0);
  //
  //    Colorduino.SetPixel(1, 8, 0, 0, 0);
  //    Colorduino.SetPixel(1, 9, 0, 0, 0);
  //    Colorduino.SetPixel(1, 10, 0, 0, 0);
  //    Colorduino.SetPixel(1, 11, 0, 0, 0);
  //    Colorduino.SetPixel(1, 12, 0, 0, 0);
  //    Colorduino.SetPixel(1, 13, 0, 0, 0);
  //    Colorduino.SetPixel(1, 14, 0, 0, 0);
  //    Colorduino.SetPixel(1, 15, 0, 0, 0);
  //
  //    Colorduino.SetPixel(2, 8, 0, 0, 0);
  //    Colorduino.SetPixel(2, 9, 0, 0, 0);
  //    Colorduino.SetPixel(2, 10, 0, 0, 0);
  //    Colorduino.SetPixel(2, 11, 0, 0, 0);
  //    Colorduino.SetPixel(2, 12, 0, 0, 0);
  //    Colorduino.SetPixel(2, 13, 0, 0, 0);
  //    Colorduino.SetPixel(2, 14, 0, 0, 0);
  //    Colorduino.SetPixel(2, 15, 0, 0, 0);
  //
  //    Colorduino.SetPixel(3, 8, 0, 0, 0);
  //    Colorduino.SetPixel(3, 9, 0, 0, 0);
  //    Colorduino.SetPixel(3, 10, 0, 0, 0);
  //    Colorduino.SetPixel(3, 11, 0, 0, 0);
  //    Colorduino.SetPixel(3, 12, 0, 0, 0);
  //    Colorduino.SetPixel(3, 13, 0, 0, 0);
  //    Colorduino.SetPixel(3, 14, 0, 0, 0);
  //    Colorduino.SetPixel(3, 15, 0, 0, 0);
  //
  //    Colorduino.SetPixel(4, 8, 0, 0, 0);
  //    Colorduino.SetPixel(4, 9, 0, 0, 0);
  //    Colorduino.SetPixel(4, 10, 0, 0, 0);
  //    Colorduino.SetPixel(4, 11, 0, 0, 0);
  //    Colorduino.SetPixel(4, 12, 0, 0, 0);
  //    Colorduino.SetPixel(4, 13, 0, 0, 0);
  //    Colorduino.SetPixel(4, 14, 0, 0, 0);
  //    Colorduino.SetPixel(4, 15, 0, 0, 0);
  //
  //    Colorduino.SetPixel(5, 8, 0, 0, 0);
  //    Colorduino.SetPixel(5, 9, 0, 0, 0);
  //    Colorduino.SetPixel(5, 10, 0, 0, 0);
  //    Colorduino.SetPixel(5, 11, 0, 0, 0);
  //    Colorduino.SetPixel(5, 12, 0, 0, 0);
  //    Colorduino.SetPixel(5, 13, 0, 0, 0);
  //    Colorduino.SetPixel(5, 14, 0, 0, 0);
  //    Colorduino.SetPixel(5, 15, 0, 0, 0);
  //
  //    Colorduino.SetPixel(6, 8, 0, 0, 0);
  //    Colorduino.SetPixel(6, 9, 0, 0, 0);
  //    Colorduino.SetPixel(6, 10, 0, 0, 0);
  //    Colorduino.SetPixel(6, 11, 0, 0, 0);
  //    Colorduino.SetPixel(6, 12, 0, 0, 0);
  //    Colorduino.SetPixel(6, 13, 0, 0, 0);
  //    Colorduino.SetPixel(6, 14, 0, 0, 0);
  //    Colorduino.SetPixel(6, 15, 0, 0, 0);
  //
  //    Colorduino.SetPixel(7, 8, 0, 0, 0);
  //    Colorduino.SetPixel(7, 9, 0, 0, 0);
  //    Colorduino.SetPixel(7, 10, 0, 0, 0);
  //    Colorduino.SetPixel(7, 11, 0, 0, 0);
  //    Colorduino.SetPixel(7, 12, 0, 0, 0);
  //    Colorduino.SetPixel(7, 13, 0, 0, 0);
  //    Colorduino.SetPixel(7, 14, 0, 0, 0);
  //    Colorduino.SetPixel(7, 15, 0, 0, 0);

}
