mode = 0;
correctAnswerH = "THOMAS";
correctAnswerV = "AMELIA";

if(mode == 1){
    document.getElementById("gameBoard").innerHTML = '<div class="square"></div><div class="square"></div><div class="square playable"><div class="tileLetter" id="V1"></div></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square playable"><div class="tileLetter" id="H1"></div></div><div class="square playable"><div class="tileLetter" id="H2"></div></div><div class="square playable"><div class="tileLetter" id="H3"></div></div><div class="square playable"><div class="tileLetter" id="H4"></div></div><div class="square playable"><div class="tileLetter" id="H5"></div></div><div class="square playable"><div class="tileLetter" id="H6"></div></div><div class="square"></div><div class="square"></div><div class="square playable"><div class="tileLetter" id="V3"></div></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square playable"><div class="tileLetter" id="V4"></div></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square playable"><div class="tileLetter" id="V5"></div></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square playable"><div class="tileLetter" id="V6"></div></div><div class="square"></div><div class="square"></div><div class="square"></div>';
    correctAnswerV = "JOSEPH";
}

// Get all the buttons and squares
const buttons = document.querySelectorAll("button");
const squares = document.querySelectorAll(".square.playable");

// Loop through the buttons and add event listeners
for (let button of buttons) {
  // When the drag starts, store the button ID as data and change the button style
  button.addEventListener("dragstart", function(event) {
    event.dataTransfer.setData("text/plain", button.id);
    button.style.opacity = 0.5;
  });

  // When the drag ends, reset the button style
  button.addEventListener("dragend", function(event) {
    button.style.opacity = 1;
  });
}

// Loop through the squares and add event listeners
for (let square of squares) {
  // When the drag enters the square, prevent the default behavior and change the square style
  square.addEventListener("dragenter", function(event) {
    event.preventDefault();
    square.style.backgroundColor = "#F0F0F0";
  });

  // When the drag is over the square, prevent the default behavior
  square.addEventListener("dragover", function(event) {
    event.preventDefault();
  });

  // When the drag leaves the square, reset the square style
  /*
  square.addEventListener("dragleave", function(event) {
    square.style.backgroundColor = "#FFFFFF";
  });*/

  // When the drop happens, get the button ID from the data and set it as the inner HTML of the square
  square.addEventListener("drop", function(event) {
    const buttonId = event.dataTransfer.getData("text/plain");
    square.querySelector(".tileLetter").innerHTML = buttonId;
    square.querySelector(".tileLetter").style.color = "black";
  });
}

function checkHorizontal(){

    guessH = document.getElementById("H1").innerHTML + document.getElementById("H2").innerHTML + document.getElementById("H3").innerHTML + document.getElementById("H4").innerHTML + document.getElementById("H5").innerHTML + document.getElementById("H6").innerHTML;
    console.log(guessH.length);
    if(guessH.length == 6){
        if(guessH == correctAnswerH){
            document.getElementById("H1").style.animation = "pulse 1s";
            document.getElementById("H2").style.animation = "pulse 1s";
            document.getElementById("H3").style.animation = "pulse 1s";
            document.getElementById("H4").style.animation = "pulse 1s";
            document.getElementById("H5").style.animation = "pulse 1s";
            document.getElementById("H6").style.animation = "pulse 1s";
            document.getElementById("H1").style.color = "white";
            document.getElementById("H1S").style.backgroundColor = "#B8D8BE";
            //document.getElementById("H1S").style.borderWidth = "0px";
            document.getElementById("H2").style.color = "white";
            document.getElementById("H2S").style.backgroundColor = "#B8D8BE";
            document.getElementById("H3").style.color = "white";
            document.getElementById("H3S").style.backgroundColor = "#B8D8BE";
            document.getElementById("H4").style.color = "white";
            document.getElementById("H4S").style.backgroundColor = "#B8D8BE";
            document.getElementById("H5").style.color = "white";
            document.getElementById("H5S").style.backgroundColor = "#B8D8BE";
            document.getElementById("H6").style.color = "white";
            document.getElementById("H6S").style.backgroundColor = "#B8D8BE";
        }
        else{
            document.getElementById("H1").style.animation = "shake 0.5s";
            document.getElementById("H2").style.animation = "shake 0.5s";
            document.getElementById("H3").style.animation = "shake 0.5s";
            document.getElementById("H4").style.animation = "shake 0.5s";
            document.getElementById("H5").style.animation = "shake 0.5s";
            document.getElementById("H6").style.animation = "shake 0.5s";
            document.getElementById("H1").style.color = "red";
            document.getElementById("H2").style.color = "red";
            document.getElementById("H3").style.color = "red";
            document.getElementById("H4").style.color = "red";
            document.getElementById("H5").style.color = "red";
            document.getElementById("H6").style.color = "red";
        }
    }
}

function checkVertical(){

    guessV = document.getElementById("V1").innerHTML + document.getElementById("H4").innerHTML + document.getElementById("V3").innerHTML + document.getElementById("V4").innerHTML + document.getElementById("V5").innerHTML + document.getElementById("V6").innerHTML;
    if(mode == 1){
        guessV = document.getElementById("V1").innerHTML + document.getElementById("H3").innerHTML + document.getElementById("V3").innerHTML + document.getElementById("V4").innerHTML + document.getElementById("V5").innerHTML + document.getElementById("V6").innerHTML;
    }  
    if(guessV.length == 6){
        if(guessV == correctAnswerV){
            document.getElementById("V1").style.animation = "pulse 1s";
            if(mode == 0){
                document.getElementById("H4").style.animation = "pulse 1s";
            }
            else{
                document.getElementById("H3").style.animation = "pulse 1s";
            }
            document.getElementById("V3").style.animation = "pulse 1s";
            document.getElementById("V4").style.animation = "pulse 1s";
            document.getElementById("V5").style.animation = "pulse 1s";
            document.getElementById("V6").style.animation = "pulse 1s";
            document.getElementById("V1").style.color = "white";
            document.getElementById("V1S").style.backgroundColor = "#B8D8BE";
            if(mode == 0){
                document.getElementById("H4").style.color = "white";
                document.getElementById("H4S").style.backgroundColor = "#B8D8BE";
            }
            else{
                document.getElementById("H3").style.color = "white";
                document.getElementById("H3S").style.backgroundColor = "#B8D8BE";
            }
            document.getElementById("V3").style.color = "white";
            document.getElementById("V3S").style.backgroundColor = "#B8D8BE";
            document.getElementById("V4").style.color = "white";
            document.getElementById("V4S").style.backgroundColor = "#B8D8BE";
            document.getElementById("V5").style.color = "white";
            document.getElementById("V5S").style.backgroundColor = "#B8D8BE";
            document.getElementById("V6").style.color = "white";
            document.getElementById("V6S").style.backgroundColor = "#B8D8BE";
        }
        else{
            document.getElementById("V1").style.animation = "shake 0.5s";
            if(mode == 0){
                document.getElementById("H4").style.animation = "shake 0.5s";
            }
            else{
                document.getElementById("H3").style.animation = "shake 0.5s";
            }
            document.getElementById("V3").style.animation = "shake 0.5s";
            document.getElementById("V4").style.animation = "shake 0.5s";
            document.getElementById("V5").style.animation = "shake 0.5s";
            document.getElementById("V6").style.animation = "shake 0.5s";
            document.getElementById("V1").style.color = "red";
            if(mode == 0){
                document.getElementById("H4").style.color = "red";
            }
            else{
                document.getElementById("H3").style.color = "red";
            }
            document.getElementById("V3").style.color = "red";
            document.getElementById("V4").style.color = "red";
            document.getElementById("V5").style.color = "red";
            document.getElementById("V6").style.color = "red";
        }
    }
}