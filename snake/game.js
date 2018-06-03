// Creating variables
var myX = 0, myY = 0;
var direction=0,currentTime=0;
var size=100;
var foodX=Math.random()*780,foodY=Math.random()*580;
// 0 - right
// 1 - down
// 2 - up
// 3 - left

var passedOver=[];
for(var rowNumber=0;rowNumber<800;rowNumber=rowNumber+1){
    passedOver[rowNumber]=[];
    for(var columnNumber=0;columnNumber<600;columnNumber=columnNumber+1){
        passedOver[rowNumber][columnNumber]=-1;
    }
}

var points=0;
function update() {
    currentTime=currentTime+1;
    if(myY!=-1&&passedOver[myX][myY]!=-1&&passedOver[myX][myY]>currentTime-size){
        alert("You crashed! Your points are "+points+".");
		myY=-1;
    }
	if(myY==-1) return;
    passedOver[myX][myY]=currentTime;
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
    if(areColliding(myX,myY,50,50,foodX,foodY,20,20)){
        size=size+50;
        foodX=Math.random()*780;
        foodY=Math.random()*580;
		points++;
    }
}

function draw(){
    // This is how you draw a rectangle
    context.fillStyle="blue";
    for(var rowNumber=0;rowNumber<800;rowNumber=rowNumber+1){
        for(var columnNumber=0;columnNumber<600;columnNumber=columnNumber+1){
            if(passedOver[rowNumber][columnNumber]!=-1&&
               passedOver[rowNumber][columnNumber]>currentTime-size){
                context.fillRect(rowNumber,columnNumber,30,30);
            }
            //context.strokeRect(rowNumber,columnNumber,30,30);
        }
    }
    context.fillStyle="black";
    context.fillRect(myX-2, myY-2, 54, 54);
    context.fillStyle="green";
    context.fillRect(myX, myY, 50, 50);
    context.fillStyle="orange";
    context.fillRect(foodX,foodY,20,20);
};

function keyup(key) {
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
    // Show the pressed keycode in the console
    //console.log("Pressed", key);
};

function mouseup() {
    // Show coordinates of mouse on click
    //console.log("Mouse clicked at", mouseX, mouseY);
};
