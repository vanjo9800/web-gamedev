// Creating variables
var myX = 0, myY = 0;
var posoka=0,tekushtoVreme=0;
var golemina=100;
var hranaX=Math.random()*780,hranaY=Math.random()*580;
// 0 - nadqsno
// 1 - nadolu
// 2 - nagore
// 3 - nalqvo

var minatoLiE=[];
for(var nomerRed=0;nomerRed<800;nomerRed=nomerRed+1){
    minatoLiE[nomerRed]=[];
    for(var nomerKolona=0;nomerKolona<600;nomerKolona=nomerKolona+1){
        minatoLiE[nomerRed][nomerKolona]=-1;
    }
}

function update() {
    tekushtoVreme=tekushtoVreme+1;
    if(minatoLiE[myX][myY]!=-1&&minatoLiE[myX][myY]>tekushtoVreme-golemina){
        alert("Blusna se");
    }
    minatoLiE[myX][myY]=tekushtoVreme;
    if(posoka==0){ //dvijim se nadqsno
        myX=myX+1;
        if(myX>800-30){
            myX=800-30;
        }
    }
    if(posoka==1){ //dvijim se nadolu
        myY=myY+1;
        if(myY>600-30){
            myY=600-30;
        }
    }
    if(posoka==2){ //dvijim nagore
        myY=myY-1;
        if(myY<0){
            myY=0;
        }
    }
    if(posoka==3){ //dvijim nalqvo
        myX=myX-1;
        if(myX<0){
            myX=0;
        }
    }
    if(areColliding(myX,myY,50,50,hranaX,hranaY,20,20)){
        golemina=golemina+50;
        hranaX=Math.random()*780;
        hranaY=Math.random()*580;
    }
}

//minatoLiE[indexX][indexY] pazim dali sme minali prez pixel
//s kordinati indexX,indexY
function draw(){
    // This is how you draw a rectangle
    context.fillStyle="blue";
    for(var nomerRed=0;nomerRed<800;nomerRed=nomerRed+1){
        for(var nomerKolona=0;nomerKolona<600;nomerKolona=nomerKolona+1){
            if(minatoLiE[nomerRed][nomerKolona]!=-1&&
               minatoLiE[nomerRed][nomerKolona]>tekushtoVreme-golemina){
                context.fillRect(nomerRed,nomerKolona,30,30);
            }
            //context.strokeRect(nomerRed,nomerKolona,30,30);
        }
    }
    context.fillStyle="green";
    context.fillRect(myX, myY, 50, 50);
    context.fillStyle="orange";
    context.fillRect(hranaX,hranaY,20,20);
};

function keyup(key) {
    if(key==37){ //nalqvo
        posoka=3;
    }
    if(key==39){ //nadqsno
        posoka=0;
    }
    if(key==38){ //nagore
        posoka=2;
    }
    if(key==40){ //nadolu
        posoka=1;
    }
    // Show the pressed keycode in the console
    console.log("Pressed", key);
};

function mouseup() {
    // Show coordinates of mouse on click
    console.log("Mouse clicked at", mouseX, mouseY);
};
