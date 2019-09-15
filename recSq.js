class recSq{
//enough Go do something else.,,,,
constructor(leftbotst,rightbotst,righttopst,lefttopst){//3 corners of starting triangle
this.leftbot=leftbotst;this.lefttop=lefttopst;
this.rightbot=rightbotst;this.righttop=righttopst;

this.left1a=p5.Vector.sub(this.lefttop,this.leftbot);this.left1a.mult((1/3));
this.left1=p5.Vector.add(this.leftbot,this.left1a);

this.left2a=p5.Vector.sub(this.lefttop,this.leftbot);this.left2a.mult((2/3));
this.left2=p5.Vector.add(this.leftbot,this.left2a);

this.bot1a=p5.Vector.sub(this.rightbot,this.leftbot);this.bot1a.mult((1/3));
this.bot1=p5.Vector.add(this.leftbot,this.bot1a);

this.bot2a=p5.Vector.sub(this.rightbot,this.leftbot);this.bot2a.mult((2/3));
this.bot2=p5.Vector.add(this.leftbot,this.bot2a);

this.top1a=p5.Vector.sub(this.righttop,this.lefttop);this.top1a.mult((1/3));
this.top1=p5.Vector.add(this.lefttop,this.top1a);

this.top2a=p5.Vector.sub(this.righttop,this.lefttop);this.top2a.mult((2/3));
this.top2=p5.Vector.add(this.lefttop,this.top2a);

this.right1a=p5.Vector.sub(this.righttop,this.rightbot);this.right1a.mult((1/3));
this.right1=p5.Vector.add(this.rightbot,this.right1a);

this.right2a=p5.Vector.sub(this.righttop,this.rightbot);this.right2a.mult((2/3));
this.right2=p5.Vector.add(this.rightbot,this.right2a);

this.mid1=p5.Vector.add(this.bot1,this.left1a);//start lowerleft, count
this.mid2=p5.Vector.add(this.bot2,this.left1a);//counterclockwise
this.mid3=p5.Vector.add(this.bot2,this.left2a);
this.mid4=p5.Vector.add(this.bot1,this.left2a);

}	

show(){
line(this.middle.x,this.middle.y,this.left.x,this.left.y);	
line(this.middle.x,this.middle.y,this.right.x,this.right.y);
line(this.right.x,this.right.y,this.left.x,this.left.y);
}

showrecSq(j){
let s=j%3;text("level  "+j,20,20);
switch(s){
	case 0:fill(250,0,0);break;
	case 1:fill(0,250,0);break;
	case 2:fill(0,0,250);break;
}
beginShape();
vertex(this.leftbot.x,this.leftbot.y);vertex(this.rightbot.x,this.rightbot.y);
vertex(this.righttop.x,this.righttop.y);vertex(this.lefttop.x,this.lefttop.y);
endShape(CLOSE);
}

}

function generaterecSq() {
let next=[];
  
for(let j=0;j<linesSq.length;j++){
next.push(new recSq(linesSq[j].leftbot,linesSq[j].bot1,linesSq[j].mid1,linesSq[j].left1));//A
next.push(new recSq(linesSq[j].left2,linesSq[j].mid4,linesSq[j].top1,linesSq[j].lefttop));//B
next.push(new recSq(linesSq[j].mid3,linesSq[j].right2,linesSq[j].righttop,linesSq[j].top2));//C
next.push(new recSq(linesSq[j].bot2,linesSq[j].rightbot,linesSq[j].right1,linesSq[j].mid2));//D
next.push(new recSq(linesSq[j].mid1,linesSq[j].mid2,linesSq[j].mid3,linesSq[j].mid4));//E
//next.push(new recSq(linesSq[j].leftbot,linesSq[j].rightbot,linesSq[j].righttop,linesSq[j].lefttop));//E
}
linesSq=next; 
}