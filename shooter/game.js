// Creating variables
var myX = 0, myY = 580;
//var vragX = Math.random()*(800-50);
//var vragY = 0;
var vragX = [], vragY = [];
for(var i=0;i<5;i=i+1){
    vragX[i]=Math.random()*(800-50);
    vragY[i]=0;
}
//var patronX,patronY=-10;
var patronX=[],patronY=[],broiPatroni=0;
var tochki=0,coolDown=0,jivoti=10;

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
        vragY[i]=vragY[i]+1;
        if(vragY[i]>=600){
            vragY[i]=0;
            vragX[i]=Math.random()*(800-50);
            jivoti=jivoti-1;
        }
        if(areColliding(myX,myY,70,20,vragX[i],vragY[i],50,30)||jivoti<0){
            alert("Game over!!!");
            myX=NaN;
        }
        for(var j=0;j<broiPatroni;j=j+1){
            if(areColliding(vragX[i],vragY[i],50,30,patronX[j],patronY[j],10,10)){
                vragY[i]=0;
                vragX[i]=Math.random()*(800-50);
                patronY[j]=-10;
                tochki=tochki+1;
                console.log(tochki);
                break;
            }
        }
    }
    for(var i=0;i<broiPatroni;i=i+1){
        patronY[i]=patronY[i]-2;
    }
    coolDown=coolDown-1;
    if(isKeyPressed[32]==true){
        if(coolDown<0){
            patronX[broiPatroni]=myX+30;
            patronY[broiPatroni]=myY;
            broiPatroni=broiPatroni+1;
            coolDown=25;
        }
    }
}

function draw() {
    // This is how you draw a rectangle
    context.fillStyle="black";
    context.font="30px Comic Sans";
    context.fillText("Tochki: "+tochki,10,50);
    context.fillStyle="red";
    context.font="30px Comic Sans";
    context.fillText("Jivoti: "+jivoti,170,50);
    context.fillStyle="black";
    for(var i=0;i<broiPatroni;i=i+1){
        context.fillRect(patronX[i],patronY[i],10,10);
    }
    context.fillStyle="blue";
    context.fillRect(myX, myY, 70, 20);
    context.fillStyle="orange";
    for(var i=0;i<5;i=i+1){
        context.fillRect(vragX[i],vragY[i],50,30);
    }
};

function keyup(key) {
    // Show the pressed keycode in the console
    console.log("Pressed", key);
};

function mouseup() {
    // Show coordinates of mouse on click
    console.log("Mouse clicked at", mouseX, mouseY);
};
