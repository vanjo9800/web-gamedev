// Creating variables
var myX = 0, myY = 600-100;
var obstacleX=[],obstacleY=[],cntObstacles=1;
var points=0,speed=1;
var imgGolf4=new Image();
imgGolf4.src="golf4.jpg";

for(var i=0;i<cntObstacles;i++){
	obstacleX[i]=Math.floor(Math.random()*3)*(800/3)+40;
	obstacleY[i]=0;
}

function update() {
    myX = myX+(mouseX-myX)/10;
	if(myX<20) myX=20;
	if(myX>800-220) myX=800-220;

	for(var i=0;i<cntObstacles;i++){
		if(areColliding(myX,myY,200,60,obstacleX[i],obstacleY[i],200,60)){
			alert("Game over! You have won "+points+" points.");
			myY=-10000;
		}
		if(obstacleY[i]>600){
			if(myY!=-10000){
				points=points+1;
				if(points>=10&&cntObstacles==1){
					cntObstacles=2;
					obstacleX[1]=Math.floor(Math.random()*3)*(800/3)+40;
					obstacleY[1]=-Math.random()*100-100;
				}
				if(points>=25&&cntObstacles==2){
					cntObstacles=3;
					obstacleX[2]=Math.floor(Math.random()*3)*(800/3)+40;
					obstacleY[2]=-Math.random()*200-100;
				}
				speed=speed+0.5;
			}
			obstacleX[i]=Math.floor(Math.random()*3)*(800/3)+40;
			obstacleY[i]=0;
		}
		obstacleY[i]=obstacleY[i]+speed;
	}
}

var markingY=-100;
function draw() {
	//Borders
	context.fillStyle="black";
	context.fillRect(0,0,20,600);
	context.fillRect(780,0,20,600);
	
	//Marking
	context.fillStyle="orange";
	for(var p=800/3;p<800;p+=800/3){
		for(var i=markingY;i<600;i+=150){
			context.fillRect(p,i,10,100);
		}
	}
	markingY=markingY+speed;
	if(markingY>=50) markingY=-100;

	//Obstacles
	context.fillStyle="red";
	for(var i=0;i<cntObstacles;i++){
		context.drawImage(imgGolf4,obstacleX[i],obstacleY[i],200,100);
	}

	//Player
	context.drawImage(imgGolf4,myX,myY,200,100);
};

function keyup(key) {
    // Show the pressed keycode in the console
    // console.log("Pressed", key);
};

function mouseup() {
    // Show coordinates of mouse on click
    // console.log("Mouse clicked at", mouseX, mouseY);
};
