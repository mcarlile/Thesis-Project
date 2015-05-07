//usb port on right is 46
//usb port on left is 50

//LEDmap on port 46
//monthDisplay on port 50

#include <LiquidCrystal.h>

LiquidCrystal lcd(12, 11, 5, 4, 3, 2);
int val = 1;
String months [] = {
  "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
};

void setup()
{
  lcd.begin(16, 2);
   Serial.begin(9600);
  lcd.clear();
}

void loop()
{


  lcd.setCursor(0, 1);
  Serial.print(val);
  lcd.clear();
  lcd.print(months[val - 1]);
  lcd.setCursor(0, 2);
  lcd.print("1988");

  if (Serial.available()) {
    val = Serial.read();
  }

  delay(10);

}











