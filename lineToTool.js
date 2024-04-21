function LineToTool() {
  //set an icon and a name for the object
  this.icon = "assets/lineTo.jpg";
  this.name = "LineTo";

  //these values are the starting point of the line
  //they are set to -1 to indicate drawing hasn't begun

  var startMouseX = -1;
  var startMouseY = -1;
  var drawing = false;

  this.draw = function () {
    //if the mouse button is pressed
    if (mouseIsPressed) {
      //checks tif the starting position is -1, indicating drawing has not begun
      if (startMouseX == -1) {
        //sets the start of the line to the current mouse position
        startMouseX = mouseX;
        startMouseY = mouseY;
        //sets drawing to true in order to indicate a line is currently being drawn
        drawing = true;
        //saves the current image every frame
        loadPixels();
        //if the starting position isnt -1 it indicates drawing is in progress
      } else {
        //loads the current image, previous saved as drawing the line begun
        updatePixels();
        //draws an additional line every frame from the start pos to the current pos
        line(startMouseX, startMouseY, mouseX, mouseY);
      }
      //if the mouse isnt pressed AND drawing is in progress
      //the drawing is reset here
    } else if (drawing) {
      //drawing is set to false so this only triggers once
      drawing = false;
      //mouse positions are set to -1 so a new line can be drawn again
      startMouseX = -1;
      startMouseY = -1;
    }
  };
}
