
let can;
function setup(){
	start();startRad();
	angleMode(radians);
	can=createCanvas(800,600);
	can.position(25,25);
	can.class("bdd");
	
	//can.mousePressed(nextlevel);
	}
	let k=12;
	let h1=0;
	function draw(){
	background(200,200,0);
	//let choice=rad2.value();
	//if(choice){text("value is "+rad2.value(),30,30);
	switch(ch){
	case '1':for(let j=0;j<linesSq.length;j++){linesSq[j].showrecSq(j);};break;
	case '3':for(let j=0;j<vees.length;j++){vees[j].show();};
	text(rad2.value()+"???",30,60);break;
	case '2':for(let j=0;j<lines.length;j++){lines[j].show();};break;
	case '4':for(let j=0;j<cross.length;j++){cross[j].show();cross[j].giggle();};break;
	case '5':translate(200,100);
	for(let j=0;j<linesSier.length;j++){linesSier[j].showS(j);};break;
    }
	//drawLines();
	
	}
	
function nextlevel(){
generateK();	
genV();
generateSier();
genC();
generaterecSq();
text("here",mouseX,mouseY);
}