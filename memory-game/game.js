// Creating variables
var size = 4;
var cells=[]
var matched=[],matchedCnt=0
for(var i=0;i<size;i++){
	matched[i]=[];
}
var cvetove=["blue","row","green","pink","purple","yellow","orange","magenta"];

for(var i=0;i<size*size/2;i++){
	cells[i]=i;
	cells[i+size*size/2]=i;
}

for(var i=0;i<100000;i++){
	var index1=Math.floor(Math.random()*size*size);
	var index2=Math.floor(Math.random()*size*size);
	var arhivA=cells[index1];
	cells[index1]=cells[index2];
	cells[index2]=arhivA;
}

function update() {
}

function draw() {
    // This is how you draw a rectangle
	for(var i=0;i<size;i++){
		for(var j=0;j<size;j++){
			context.strokeRect(50+i*50,50+j*50,50,50);
			if((i==firstClickedRow&&j==firstClickedColumn)||
			   (i==secondClickedRow&&j==secondClickedColumn)||
			   matched[i][j]==true){
				context.fillStyle=cvetove[cells[i*size+j]]
				context.fillRect(50+i*50,50+j*50,50,50);
			}
		}
	}
};

function keyup(key) {
    // Show the pressed keycode in the console
    //console.log("Pressed", key);
};

var points=0,clicks=0;
function check(){
	if(cells[firstClickedRow*size+firstClickedColumn]==cells[secondClickedRow*size+secondClickedColumn]){
		points=points+1;
		matched[firstClickedRow][firstClickedColumn]=true;
		matched[secondClickedRow][secondClickedColumn]=true;
		matched+=2;
		if(matched==size*size){
			alert("You have completed it with "+clicks+" clicks.");
		}
	}else{
		firstClickedColumn=-1;
		firstClickedRow=-1;
		secondClickedColumn=-1;
		secondClickedRow=-1;
	}
}

var clicked=false;
var firstClickedRow,firstClickedColumn;
var secondClickedRow,secondClickedColumn;
function mouseup() {
    // Show coordinates of mouse on click
    console.log("Mouse clicked at", mouseX, mouseY);
	clicks++;
	var row=Math.floor((mouseX-50)/50);
	var column=Math.floor((mouseY-50)/50);
	if(clicked==false){
		firstClickedRow=row;
		firstClickedColumn=column;
		clicked=true;
	}else{
		secondClickedRow=row;
		secondClickedColumn=column;
		clicked=false;
		setTimeout(check,1000);
	}
	console.log("Red",row,"column",column);
};
