let vs,ve;let ks,kf;let crst,crend;
vees=[];lines=[];cross=[];
linesSier=[];let lv,mv,rv;
linesSq=[];let lbot,rbot,rtop,ltop;
function start(){
vs=createVector(600,50);
ve=createVector(600,250);	
vees.push(new vclass(vs,ve));

ks=createVector(20,500);
kf=createVector(760,500);
lines.push(new kochline(ks,kf));	

lv=createVector(-100,173);
mv=createVector(0,0);
rv=createVector(100,173);
linesSier.push(new sier(lv,mv,rv));

crst=createVector(300,300);
crend=createVector(300,550);
cross.push(new Cclass(crend,crst));

lbot=createVector(300,500);rbot=createVector(600,500);
rtop=createVector(600,200);ltop=createVector(300,200);
linesSq.push(new recSq(lbot,rbot,rtop,ltop));
}

function drawLines(){
	let min=Math.min(lines.length,cross.length);
	for(let j=0;j<min;j++){
	line(lines[j].st.x,lines[j].st.y,cross[j].end.x,cross[j].end.y);
	}
}
	
