class sier{
//enough Go do something else.,,,,
constructor(leftst,middlest,rightst){//3 corners of starting triangle
this.left=leftst;
this.middle=middlest;
this.right=rightst;
this.leftm=p5.Vector.sub(this.middle,this.left);this.leftm.mult(.5);
this.leftm=p5.Vector.add(this.left,this.leftm);

this.rightm=p5.Vector.sub(this.middle,this.right);this.rightm.mult(.5);
this.rightm=p5.Vector.add(this.right,this.rightm);

this.middlem=p5.Vector.sub(this.right,this.left);this.middlem.mult(.5);
this.middlem=p5.Vector.add(this.left,this.middlem);

}	

show(){
line(this.middle.x,this.middle.y,this.left.x,this.left.y);	
line(this.middle.x,this.middle.y,this.right.x,this.right.y);
line(this.right.x,this.right.y,this.left.x,this.left.y);
}

showS(j){
let s=j%3;//floor(random(3));
switch(s){
	case 0:fill(250,0,0);break;
	case 1:fill(0,250,0);break;
	case 2:fill(0,0,250);break;
}
beginShape();
vertex(this.left.x,this.left.y);vertex(this.middle.x,this.middle.y);
vertex(this.right.x,this.right.y);
endShape(CLOSE);
}}

function generateSier() {
let next=[];
  
for(let j=0;j<linesSier.length;j++){
next.push(new sier(linesSier[j].left,linesSier[j].leftm,linesSier[j].middlem));
next.push(new sier(linesSier[j].middlem,linesSier[j].rightm,linesSier[j].right));
next.push(new sier(linesSier[j].leftm,linesSier[j].middle,linesSier[j].rightm));
}
linesSier=next; 
}
			
/*	
leftT(){
let lefty=new sier(this.left,this.leftm,this.middlem);
return lefty;	
}

rightT(){
let righty=new sier(this.middlem,this.rightm,this.right);
return righty;	
}

middleT(){
let middley=new sier(this.leftm,this.middle,this.rightm);
return middley;	
}
}

function generateSier() {
let next=[];
  
for(let j=0;j<linesSier.length;j++){
next.push(linesSier[j].leftT());
next.push(linesSier[j].rightT());
next.push(linesSier[j].middleT());
}
linesSier=next; 
}
*/