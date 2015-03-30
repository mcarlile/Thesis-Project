import controlP5.*;

String[] lines;
String[] locationLines;

int entries;
ControlP5 cp5;
ListBox l;
int cnt = 0;
String entry = ("(Select a date to load a diary entry)");
String locationEntry = ("(Select a date to load an entry's location data)");
int myColor = color(255);
int c1, c2;
float n, n1;
Boolean redacted = false;
int dateSelection;


void setup () {
  size(700, 400);
  lines = loadStrings("1986.txt");
  locationLines = loadStrings("1986Locations.txt");
  entries = lines.length;
  println("there are " + entries + " entries");

  ControlP5.printPublicMethodsFor(ListBox.class);

  cp5 = new ControlP5(this);
  l = cp5.addListBox("myList")
    .setPosition(50, height/2-120)
      .setSize(120, 240)
        .setItemHeight(15)
          .setBarHeight(15)
            .setColorBackground(color(255, 128))
              .setColorActive(color(0))
                .setColorForeground(color(42, 39, 64))
                  ;

  l.captionLabel().toUpperCase(true);
  l.captionLabel().set("1986");
  l.captionLabel().setColor(#000000);
  l.captionLabel().style().marginTop = 3;
  l.valueLabel().style().marginTop = 3;

  for (int i=0; i<entries; i++) {
    ListBoxItem lbi = l.addItem("January "+i, i );
    lbi.setColorBackground(color(28, 26, 38));
  }

  // create a new button with name 'buttonA'
  cp5.addButton("Unredacted")
    .setValue(0)
      .setPosition(50, height-50)
        .setSize(125, 19)
          ;

  // and add another 2 buttons
  cp5.addButton("Redacted")
    .setValue(100)
      .setPosition(180, height-50)
        .setSize(200, 19)
          ;
}

void draw () {
  background(myColor);
  myColor = lerpColor(c1, c2, n);
  n += (1-n)* 0.1; 
  // scroll the scroll List according to the mouseX position
  // when holding down SPACE.
  if (keyPressed && key==' ') {
    //l.scroll(mouseX/((float)width)); // scroll taks values between 0 and 1
  }
  if (keyPressed && key==' ') {
    l.setWidth(mouseX);
  }
  text ("Entry: January " + dateSelection, width/2-150, height/2-20, 400, 400);
  if (redacted) {
    text(locationEntry, width/2-150, height/2, 400, 400);
  } else {
    text(entry, width/2-150, height/2, 400, 400);
  }
}

void keyPressed() {
  if (key=='0') {
    // will activate the listbox item with value 5
    l.setValue(5);
  }
  if (key=='1') {
    // set the height of a listBox should always be a multiple of itemHeight
    l.setHeight(210);
  } else if (key=='2') {
    // set the height of a listBox should always be a multiple of itemHeight
    l.setHeight(120);
  } else if (key=='3') {
    // set the width of a listBox
    l.setWidth(200);
  } else if (key=='i') {
    // set the height of a listBoxItem, should always be a fraction of the listBox
    l.setItemHeight(30);
  } else if (key=='u') {
    // set the height of a listBoxItem, should always be a fraction of the listBox
    l.setItemHeight(10);
    l.setBackgroundColor(color(100, 0, 0));
  } else if (key=='a') {
    int n = (int)(random(100000));
    l.addItem("item "+n, n);
  } else if (key=='d') {
    l.removeItem("item "+cnt);
    cnt++;
  } else if (key=='c') {
    l.clear();
  }
}

void controlEvent(ControlEvent theEvent) {
  //  println(theEvent.getController().getName());
  n = 0;

  if (theEvent.isGroup()) {
    // an event from a group e.g. scrollList
    println(theEvent.group().value()+" from "+theEvent.group());
  }

  if (theEvent.isGroup() && theEvent.name().equals("myList")) {
    dateSelection = (int)theEvent.group().value();
    println("Entry: " + lines[dateSelection]);
    println("locationEntry: " + lines[dateSelection]);

    entry = lines[dateSelection];
    locationEntry = locationLines[dateSelection];
  }
}

// function colorA will receive changes from 
// controller with name colorA
public void Unredacted(int theValue) {
  println("a button event from colorA: "+theValue);
  c1 = c2;
  c2 = color(0, 160, 100);
  redacted = false;
}

// function colorB will receive changes from 
// controller with name colorB
public void Redacted(int theValue) {
  println("a button event from colorB: "+theValue);
  c1 = c2;
  c2 = color(150, 0, 0);
  redacted = true;
}

// function colorC will receive changes from 
// controller with name colorC
public void colorC(int theValue) {
  println("a button event from colorC: "+theValue);
  c1 = c2;
  c2 = color(255, 255, 0);
}

public void play(int theValue) {
  println("a button event from buttonB: "+theValue);
  c1 = c2;
  c2 = color(0, 0, 0);
}

