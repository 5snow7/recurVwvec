function sq1(x){
	return x*x;
}

class kochline{

constructor(sta,enda){
this.st=sta;//createVector(sta);
this.end=enda;//createVector(enda);

}	

show(){
//line(this.st.x,.1*sin(this.st.x)*this.st.y+200,this.end.x,.1*sin(this.end.x)*this.end.y+200);	
line((this.st.x),sq(.05*this.st.y),(this.end.x),sq(.05*this.end.y));  	
//text("what  "+.1*sin(this.st.x)*this.st.y,20,40);
//text("what  "+.1*sin(this.end.x)*this.end.y,20,60);
}

kochA(){
//let a=this.st;
return this.st;	
}

kochB(){
let b=p5.Vector.sub(this.end,this.st);
b.div(3);b.add(this.st);
return b;
}

kochC(){
let ctemp=p5.Vector.sub(this.end,this.st);
ctemp.div(3);
let c=p5.Vector.add(this.st,ctemp);
ctemp.rotate(-PI/3);
c.add(ctemp);
return c;
}

kochD(){
let d=p5.Vector.sub(this.end,this.st);
d.mult(2);d.div(3);d.add(this.st);
return d;
}	

kochE(){
return this.end;	
}
}

function generateK() {
let next=[];
  
for(let j=0;j<lines.length;j++){
let a=lines[j].kochA();let b=lines[j].kochB();	  
let c=lines[j].kochC();let d=lines[j].kochD();
let e=lines[j].kochE();	  
next.push(new kochline(a,b));next.push(new kochline(b,c));
next.push(new kochline(c,d));next.push(new kochline(d,e)); 
}
lines=next; 
}

	

