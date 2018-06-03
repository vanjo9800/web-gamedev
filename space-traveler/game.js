// Creating variables
var tabloX=400,tabloY=400;
var tilt=0,lift=0;
var planetsX=[],planetsY=[],dalechina=[],radius=[];
for(var i=0;i<20;i++){
	dalechina[i]=100+Math.random()*600;
	planetsX[i]=-900+Math.random()*1200;
	planetsY[i]=-900+Math.random()*1000;
	radius[i]=50+Math.random()*60;
}

function update() {
	writeText--;
	if(isKeyPressed[37]){
		tilt-=1;
		if(tilt<-50){
			tilt=-50
		}
		tabloX++;
	}
	if(isKeyPressed[39]){
		tilt+=1;
		if(tilt>50){
			tilt=50;
		}
		tabloX--;
	}
	if(isKeyPressed[38]){
		lift-=1;
		if(lift<-100){
			lift=-100;
		}
		tabloY++;
	}
	if(isKeyPressed[40]){
		lift+=1;
		if(lift>100){
			lift=100;
		}
		tabloY--;
	}
	if(!isKeyPressed[38]&&!isKeyPressed[40]){
		lift*=0.9;	
	}
	if(!isKeyPressed[37]&&!isKeyPressed[39]){
		tilt*=0.9;
	}
}

var pilot=new Image();
pilot.src="cabin.jpg";
var spaceBck=new Image();
spaceBck.src="space.jpeg";
var writeText=0;
function draw() {
    // This is how you draw a rectangle
	context.drawImage(spaceBck,0,0,1200,1000);
	if(writeText>0){
		context.font="50px Arial";
		context.fillStyle="red";
		context.fillText("SPACE COLLISION",150,300);
	}
	context.translate(tabloX,tabloY);
	for(var i=0;i<20;i++){
		context.beginPath();
		var newDist=(450-dalechina[i])/450;
		if(newDist<0){
			newDist=0;
		}
		newDist*=radius[i];
		var visualPerimeterX=400+Math.tan(40*Math.PI/180)*dalechina[i];
		var visualPerimeterY=200+Math.tan(20*Math.PI/180)*dalechina[i];
		var newX=planetsX[i]/visualPerimeterX*400;
		var newY=planetsY[i]/visualPerimeterY*200;
		context.arc(newX,newY,newDist,0,2*Math.PI);
		context.fillStyle="orange";
		context.fill();
		context.stroke();
		context.closePath();
		dalechina[i]--;
		if(dalechina[i]<radius[i]){
			if(planetsX[i]+radius[i]>=0&&planetsX[i]-radius[i]<=800&&planetsY[i]+radius[i]>=0&&planetsY[i]-radius[i]<=500){
				writeText=100;
			}
			dalechina[i]=100+Math.random()*600;
			planetsX[i]=-900+Math.random()*1200;
			planetsY[i]=-900+Math.random()*1000;
			radius[i]=50+Math.random()*60;
		}
	}
	context.translate(-tabloX,-tabloY);
	context.translate(400,400+lift);
	context.rotate(tilt*Math.PI/180.0);
    context.drawImage(pilot,-600, 0, 1200, 600);
	context.rotate(-tilt*Math.PI/180.0);
	context.translate(-400,-400-lift);
};

function keyup(key) {
    // Show the pressed keycode in the console
    //console.log("Pressed", key);
};

function mouseup() {
    // Show coordinates of mouse on click
    //console.log("Mouse clicked at", mouseX, mouseY);
};
