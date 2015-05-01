#include <TinkerKit.h>
#include <Colorduino.h>


//taken from http://blog.lincomatic.com/?p=148

void setup() {
  Colorduino.Init();
  // compensate for relative intensity differences in R/G/B brightness
  // array of 6-bit base values for RGB (0~63)
  // whiteBalVal[0]=red
  // whiteBalVal[1]=green
  // whiteBalVal[2]=blue
  unsigned char whiteBalVal[3] = {
    63,63,63    }; // for LEDSEE 6x6cm round matrix
  Colorduino.SetWhiteBal(whiteBalVal);
}

void loop() {
}



