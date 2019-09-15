class Cclass{
	
constructor(stv,endv){
this.st=stv;this.end=endv;
}	
	
show(){
line(this.st.x,this.st.y,this.end.x,this.end.y);
}	

giggle(){
this.st.add(-.3+random(.6),0);	
}	

st1(){
return this.st;
}

end1(){
return this.end;	
}

up(){
let up=p5.Vector.sub(this.end,this.st);
up.mult(.5);
up.add(this.end);return up;	
}	

rt(){
let rt=p5.Vector.sub(this.end,this.st);
rt.mult(.5);rt.rotate(PI/2);
rt.add(this.end);return rt;

}

bot(){
	let bot=p5.Vector.sub(this.end,this.st);
bot.mult(.5);bot.rotate(PI);
bot.add(this.end);return bot;
}

lt(){
let lt=p5.Vector.sub(this.end,this.st);
lt.mult(.5);lt.rotate(-PI/2);
lt.add(this.end);return lt;	
}

}

function genC(){
let next=[];
for(let j=0;j<cross.length;j++){
let up=cross[j].up();let rt=cross[j].rt();
let bot=cross[j].bot();let lt=cross[j].lt();
let endof=cross[j].end1();
let stof=cross[j].st1();
next.push(new Cclass(endof,up));
next.push(new Cclass(endof,rt));
next.push(new Cclass(endof,bot));
next.push(new Cclass(endof,lt));
next.push(new Cclass(stof,endof));
}	
cross=next;	
}