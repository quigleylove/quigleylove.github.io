mode = 1;
correctAnswerH = "THOMAS";
correctAnswerV = "AMELIA";
let guessH = "";
let guessV = "";

if(mode == 1){
    document.getElementById("gameBoard").innerHTML = '<div class="square"></div><div class="square"></div><div class="square playable" id="V1S"><div class="tileLetter" id="V1"></div></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square playable" id="H1S"><div class="tileLetter" id="H1"></div></div><div class="square playable" id="H2S"><div class="tileLetter" id="H2"></div></div><div class="square playable" id="H3S"><div class="tileLetter" id="H3"></div></div><div class="square playable" id="H4S"><div class="tileLetter" id="H4"></div></div><div class="square playable" id="H5S"><div class="tileLetter" id="H5"></div></div><div class="square playable" id="H6S"><div class="tileLetter" id="H6"></div></div><div class="square"></div><div class="square"></div><div class="square playable" id="V3S"><div class="tileLetter" id="V3"></div></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square playable" id="V4S"><div class="tileLetter" id="V4"></div></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square playable" id="V5S"><div class="tileLetter" id="V5"></div></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square playable" id="V6S"><div class="tileLetter" id="V6"></div></div><div class="square"></div><div class="square"></div><div class="square"></div>';
    correctAnswerV = "JOSEPH";
    document.getElementById("checkButtonVertical").style.backgroundColor = "#C2DCF2";
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
    //square.style.backgroundColor = "#F0F0F0";
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
    square.style.backgroundColor = "#F0F0F0";
  });
}

function checkHorizontal(){

    guessH = document.getElementById("H1").innerHTML + document.getElementById("H2").innerHTML + document.getElementById("H3").innerHTML + document.getElementById("H4").innerHTML + document.getElementById("H5").innerHTML + document.getElementById("H6").innerHTML;
    //console.log(guessH.length);
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

            checkWin();
        }
        else{
            for(var i = 0; i < 6; i++){
                space = "H" + (i+1).toString();
                if(guessH.charAt(i) == correctAnswerH.charAt(i)){
                    if(document.getElementById(space).style.color != "white"){
                        document.getElementById(space).style.color = "green";
                    }
                }
                else if(correctAnswerH.includes(guessH.charAt(i))){
                    document.getElementById(space).style.color = "#DAA520";
                    document.getElementById(space).style.animation = "shake 0.5s";
                }
                else{
                    document.getElementById(space).style.color = "red";
                    document.getElementById(space).style.animation = "shake 0.5s";
                }
            }

            /*document.getElementById("H1").style.animation = "shake 0.5s";
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
            document.getElementById("H6").style.color = "red";*/
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

            checkWin();
        }
        else{
            for(var i = 0; i < 6; i++){
                if(mode == 0 && i == 1){
                    space = "H4";
                }
                else if(mode == 1 && i == 1){
                    space = "H3";
                }
                else{
                    space = "V" + (i+1).toString();
                }

                if(guessV.charAt(i) == correctAnswerV.charAt(i)){
                    if(document.getElementById(space).style.color != "white"){
                        document.getElementById(space).style.color = "green";
                    }
                }
                else if(correctAnswerV.includes(guessV.charAt(i))){
                    document.getElementById(space).style.color = "#DAA520";
                    document.getElementById(space).style.animation = "shake 0.5s";
                }
                else{
                    document.getElementById(space).style.color = "red";
                    document.getElementById(space).style.animation = "shake 0.5s";
                }
            }

            /*document.getElementById("V1").style.animation = "shake 0.5s";
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
            document.getElementById("V6").style.color = "red";*/
        }
    }
}

function checkWin(){
    if(guessH == correctAnswerH && guessV == correctAnswerV){
        console.log("You win!");
        setTimeout(function() {
            // code to execute after the delay
            document.getElementById("gameBoard").innerHTML = "";
            document.getElementById("keyboard").innerHTML = "";
            document.getElementById("checkButtons").innerHTML = "";
            if(mode == 0){
                document.getElementById("title").innerHTML = "Welcome Babies";
                document.getElementById("winScreen0").style.display = "block";
            }
            else{
                document.getElementById("title").innerHTML = "Welcome Babies";
                document.getElementById("winScreen1").style.display = "block";
            }
          }, 1000);
    }
}