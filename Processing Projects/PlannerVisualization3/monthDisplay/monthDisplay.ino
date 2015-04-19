#include <LiquidCrystal.h>

// Initialize the library with the pins we're using.
// See http://arduino.cc/en/Reference/LiquidCrystal
// for more information:

LiquidCrystal lcd(12,11,5,4,3,2);
char val;

void setup()
{
  // The LiquidCrystal library can be used with many different
  // LCD sizes. We're using one that's 2 lines of 16 characters,
  // so we'll inform the library of that:

  lcd.begin(16, 2);
  Serial.begin(9600);

  // Data sent to the display will stay there until it's
  // overwritten or power is removed. This can be a problem
  // when you upload a new sketch to the Arduino but old data
  // remains on the display. Let's clear the LCD using the
  // clear() command from the LiquidCrystal library:

  lcd.clear();

  //  lcd.print("hello, world!");

}

void loop()
{
  // You can move the invisible cursor to any location on the
  // LCD before sending data. Counting starts from 0, so the top
  // line is line 0 and the bottom line is line 1. Columns range
  // from 0 on the left side, to 15 on the right.

  // In additon to the "hello, world!" printed above, let's
  // display a running count of the seconds since the Arduino
  // was last reset. Note that the data you send to the display
  // will stay there unless you erase it by overwriting it or
  // sending a lcd.clear() command.

  // Here we'll set the invisible cursor to the first column
  // (column 0) of the second line (line 1):

  //  lcd.print("January");
  //  lcd.setCursor(0,1);
  //  lcd.print(val);

  if (Serial.available()) 
  { // If data is available to read,
    val = Serial.read(); // read it and store it in val
  }
  if (val == '1') 
  { // If 1 was received
    lcd.print("value was received");
  } 
  else {
  }
  delay(10); // Wait 10 milliseconds for next reading

}









