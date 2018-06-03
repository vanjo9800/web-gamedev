// Creating variables
var myX = 0, myY = 0;
var posoka=0;
// 0 - nadqsno
// 1 - nadolu
// 2 - nagore
// 3 - nalqvo

var minatoLiE=[];
for(var nomerRed=0;nomerRed<800;nomerRed=nomerRed+1){
    minatoLiE[nomerRed]=[];
    for(var nomerKolona=0;nomerKolona<600;nomerKolona=nomerKolona+1){
        minatoLiE[nomerRed][nomerKolona]=false;
    }
}

function update() {
    if(clickedPluzgach){
        musicVolume=(mouseX-150)/500;
        if(musicVolume<0){
            musicVolume=0;
        }
        if(musicVolume>1){
            musicVolume=1;
        }
    }
    minatoLiE[myX][myY]=true;
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
}

var menus=1;
//1 - startova stranica
//2 - igra
//3 - nastroiki
var cvqt="blue";
var backgroundSound=new Audio("sound.mp3");
backgroundSound.loop=true;
var musicVolume=0.5;
var backgroundImage=new Image();
backgroundImage.src="background.png";
function draw() {
    // This is how you draw a rectangle
    context.globalAlpha=0.5;
    context.drawImage(backgroundImage,0, 0, 800, 600);
    context.globalAlpha=1;
    if(menus==1){
        context.fillStyle="red";
        context.font="70px Algerian";
        context.fillText("My Awesome Tron",20,200);
        context.font="50px Arial";
        context.fillText("Start",300,270);
        context.fillText("Settings",270,330);
        context.fillText("About",300,390);
    }
    if(menus==2){
        context.fillStyle="blue";
        for(var nomerRed=0;nomerRed<800;nomerRed=nomerRed+1){
            for(var nomerKolona=0;nomerKolona<600;nomerKolona=nomerKolona+1){
                if(minatoLiE[nomerRed][nomerKolona]==true){
                    context.fillRect(nomerRed,nomerKolona,30,30);
                }
                //context.strokeRect(nomerRed,nomerKolona,30,30);
            }
        }
        context.fillStyle=cvqt;
        context.fillRect(myX, myY, 50, 50);
    }
    if(menus==3){
        context.fillStyle="red";
        context.font="70px Algerian";
        context.fillText("My Awesome Game",20,200);
        context.font="50px Arial";
        context.fillText("Settings",270,270);
        context.fillText("Izberi cvqt:",200,330);
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
    console.log("Pressed", key);
    if(key==27){
        menus=1;
        backgroundSound.pause();
    }
};

var clickedPluzgach=false;
function mousedown() {
    // Show coordinates of mouse on click
    console.log("Mouse DOWN clicked at", mouseX, mouseY);
    if(menus==3){
        if(mouseX>=150+(500-50)*musicVolume
            &&mouseX<=150+(500-50)*musicVolume+50){
                clickedPluzgach=true;
            }
    }
}
function mouseup() {
    // Show coordinates of mouse on click
    console.log("Mouse clicked at", mouseX, mouseY);
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
            alert("Това е моята игра. Направена е на вечерна школа в Дупница, при падаща космическа станция. Много е яка и дебела.");
        }
    }
    if(menus==3){
        if((mouseX>=300&&mouseX<=350)&&(mouseY>=340&&mouseY<=390)){
            cvqt="blue";
            menus=1;
        }
        if((mouseX>=380&&mouseX<=430)&&(mouseY>=340&&mouseY<=390)){
            cvqt="yellow";
            menus=1;
        }
        if((mouseX>=460&&mouseX<=510)&&(mouseY>=340&&mouseY<=390)){
            cvqt="red";
            menus=1;
        }
        if(clickedPluzgach){
            clickedPluzgach=false;
        }
    }
};
