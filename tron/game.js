// Creating variables
var myX = 0, myY = 0;
var direction=0;
// 0 - right
// 1 - down
// 2 - up
// 3 - left

var passedOver=[];
for(var rowNumber=0;rowNumber<800;rowNumber=rowNumber+1){
    passedOver[rowNumber]=[];
    for(var columnNumber=0;columnNumber<600;columnNumber=columnNumber+1){
        passedOver[rowNumber][columnNumber]=false;
    }
}

function update() {
    if(clickedScroller){
        musicVolume=(mouseX-150)/500;
        if(musicVolume<0){
            musicVolume=0;
        }
        if(musicVolume>1){
            musicVolume=1;
        }
    }
    passedOver[myX][myY]=true;
    if(direction==0){ //going right
        myX=myX+1;
        if(myX>800-30){
            myX=800-30;
        }
    }
    if(direction==1){ //going down
        myY=myY+1;
        if(myY>600-30){
            myY=600-30;
        }
    }
    if(direction==2){ //going up
        myY=myY-1;
        if(myY<0){
            myY=0;
        }
    }
    if(direction==3){ //going left
        myX=myX-1;
        if(myX<0){
            myX=0;
        }
    }
}

var menus=1;
//1 - home page 
//2 - game
//3 - options
var color="blue";
var backgroundSound=new Audio("sound.mp3");
backgroundSound.loop=true;
var musicVolume=0.5;
var backgroundImage=new Image();
backgroundImage.src="background.jpg";
function draw() {
    // This is how you draw a rectangle
    context.globalAlpha=0.5;
    context.drawImage(backgroundImage,0, 0, 800, 600);
    context.globalAlpha=1;
    if(menus==1){
        context.fillStyle="red";
        context.font="70px Algerian";
        context.fillText("My Awesome Tron",70,200);
        context.font="50px Arial";
        context.fillText("Start",320,270);
        context.fillText("Settings",290,330);
        context.fillText("About",320,390);
    }
    if(menus==2){
        context.fillStyle="blue";
        for(var rowNumber=0;rowNumber<800;rowNumber=rowNumber+1){
            for(var columnNumber=0;columnNumber<600;columnNumber=columnNumber+1){
                if(passedOver[rowNumber][columnNumber]==true){
                    context.fillRect(rowNumber,columnNumber,30,30);
                }
                //context.strokeRect(rowNumber,columnNumber,30,30);
            }
        }
        context.fillStyle="black";
        context.fillRect(myX-2, myY-2, 54, 54);
        context.fillStyle=color;
        context.fillRect(myX, myY, 50, 50);
    }
    if(menus==3){
        context.fillStyle="red";
        context.font="70px Algerian";
        context.fillText("My Awesome Tron",70,200);
        context.font="50px Arial";
        context.fillText("Settings",270,270);
        context.fillText("Choose color:",200,330);
        context.fillStyle="blue";
        context.fillRect(300,340,50,50);
        context.fillStyle="yellow";
        context.fillRect(380,340,50,50);
        context.fillStyle="red";
        context.fillRect(460,340,50,50);
        context.fillText("Choose volume:",150,430);
        context.fillStyle="black";
        context.fillRect(150,460,500,5);
        context.fillRect(150+(500-50)*musicVolume,435,50,50);
    }
};

function keyup(key) {
    // Show the pressed keycode in the console
    if(key==37){ //left
        direction=3;
    }
    if(key==39){ //right
        direction=0;
    }
    if(key==38){ //up
        direction=2;
    }
    if(key==40){ //down
        direction=1;
    }
    //console.log("Pressed", key);
    if(key==27){
        menus=1;
        backgroundSound.pause();
    }
};

var clickedScroller=false;
function mousedown() {
    // Show coordinates of mouse on click
    //console.log("Mouse DOWN clicked at", mouseX, mouseY);
    if(menus==3){
        if(mouseX>=150+(500-50)*musicVolume
            &&mouseX<=150+(500-50)*musicVolume+50){
                clickedScroller=true;
            }
    }
}
function mouseup() {
    // Show coordinates of mouse on click
    //console.log("Mouse clicked at", mouseX, mouseY);
    if(menus==1){
        if((mouseX>=300&&mouseX<=407)&&(mouseY>=230&&mouseY<=270)){
            menus=2;
            backgroundSound.volume=musicVolume;
            backgroundSound.play();
        }
        if((mouseX>=250&&mouseX<=451)&&(mouseY>=295&&mouseY<=330)){
            menus=3;
        }
        if((mouseX>=300&&mouseX<=435)&&(mouseY>=354&&mouseY<=390)){
			alert("This is my simple tron game. It has a start menu and a few options. I can control my color, hear the sound of my movement, and have a beautiful picture as a background.");
        }
    }
    if(menus==3){
        if((mouseX>=300&&mouseX<=350)&&(mouseY>=340&&mouseY<=390)){
            color="blue";
            menus=1;
        }
        if((mouseX>=380&&mouseX<=430)&&(mouseY>=340&&mouseY<=390)){
            color="yellow";
            menus=1;
        }
        if((mouseX>=460&&mouseX<=510)&&(mouseY>=340&&mouseY<=390)){
            color="red";
            menus=1;
        }
        if(clickedScroller){
            clickedScroller=false;
        }
    }
};
