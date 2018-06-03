// Creating variables
var myX = 0, myY = 580;
var enemyX = [], enemyY = [];
for(var i=0;i<5;i=i+1){
    enemyX[i]=Math.random()*(800-50);
    enemyY[i]=0;
}
var bulletX=[],bulletY=[],bulletNumber=0;
var points=0,coolDown=0,lives=10;

function update() {
    if(isKeyPressed[37]==true){
        myX-=10;
        if(myX<0) myX=0;
    }
    if(isKeyPressed[39]==true){
        myX+=10;
        if(myX>800-70) myX=800-70;
    }
    for(var i=0;i<5;i=i+1){
        enemyY[i]=enemyY[i]+1;
        if(enemyY[i]>=600){
            enemyY[i]=0;
            enemyX[i]=Math.random()*(800-50);
            lives=lives-1;
        }
        if(areColliding(myX,myY,70,20,enemyX[i],enemyY[i],50,30)) lives=-1;
		if(lives<0){
            alert("Game over! You have "+points+" points.");
            myX=NaN;
			lives=0;
        }
        for(var j=0;j<bulletNumber;j=j+1){
            if(areColliding(enemyX[i],enemyY[i],50,30,bulletX[j],bulletY[j],10,10)){
                enemyY[i]=0;
                enemyX[i]=Math.random()*(800-50);
                bulletY[j]=-10;
                points=points+1;
                break;
            }
        }
    }
    for(var i=0;i<bulletNumber;i=i+1){
        bulletY[i]=bulletY[i]-2;
    }
    coolDown=coolDown-1;
    if(isKeyPressed[32]==true){
        if(coolDown<0){
            bulletX[bulletNumber]=myX+30;
            bulletY[bulletNumber]=myY;
            bulletNumber=bulletNumber+1;
            coolDown=25;
        }
    }
}

function draw() {
    // This is how you draw a rectangle
    context.fillStyle="black";
    for(var i=0;i<bulletNumber;i=i+1){
        context.fillRect(bulletX[i],bulletY[i],10,10);
    }
    context.fillStyle="blue";
    context.fillRect(myX, myY, 70, 20);
    context.fillStyle="orange";
    for(var i=0;i<5;i=i+1){
        context.fillRect(enemyX[i],enemyY[i],50,30);
    }
    
	context.fillStyle="black";
    context.font="30px Comic Sans";
    context.fillText("Points: "+points,10,50);
    context.fillStyle="red";
    context.font="30px Comic Sans";
    context.fillText("Lives: "+lives,170,50);
};

function keyup(key) {
    // Show the pressed keycode in the console
    //console.log("Pressed", key);
};

function mouseup() {
    // Show coordinates of mouse on click
    //console.log("Mouse clicked at", mouseX, mouseY);
};
