class vclass{
constructor(vst,vend){
this.vs=vst;//(400,10)
this.ve=vend;//(400,110)
}	

show(){
line(this.vs.x,this.vs.y,this.ve.x,this.ve.y);	
}

st1(){
 return this.vs;
}
end1(){
 return this.ve;
}

right(){
let vr=p5.Vector.sub(this.ve,this.vs);
vr.mult(.5);
vr.rotate(30*PI/180);
let vnr=p5.Vector.add(this.ve,vr);
return vnr;	

}

left(){
let vl=p5.Vector.sub(this.ve,this.vs);
vl.mult(.5);vl.rotate(-30*PI/180);
let vnl=p5.Vector.add(this.ve,vl);
return vnl;	
}
}

function genV(){
let next=[];
for(let j=0;j<vees.length;j++){
let vnr=vees[j].right();let vstart=vees[j].st1();
let vnl=vees[j].left();let vend=vees[j].end1();
next.push(new vclass(vstart,vend));
next.push(new vclass(vend,vnr));
next.push(new vclass(vend,vnl));

}	
vees=next;	
}