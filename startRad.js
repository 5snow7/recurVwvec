
let rad2;
function startRad(){
rad2=createRadio("choose a Rec.Shape");rad2.class('parbdd');
rad2.position(1000,110);
rad2.option('recSq',1);
rad2.option('koch_',2);
rad2.option('vees_',3);
rad2.option('cross',4);
rad2.option('Sier_',5);
rad2.option('reset',6);
rad2.mousePressed(chgRec);
}
let ch='0';
function chgRec(){
let choice=rad2.value();
if(choice){
switch(choice){
case '1':ch='1';can.mousePressed(recR);break;
case '2':ch='2';can.mousePressed(kochC);break;
case '3':ch='3';can.mousePressed(veeC);break;
case '4':ch='4';can.mousePressed(crossC);break;	
case '5':ch='5';can.mousePressed(sierC);break;
case '6':ch='6';linesSq=[];vees=[];lines=[];cross=[];
linesSier=[];setup();break;
}	
}}
    
function recR(){generaterecSq();}	
function kochC(){generateK();}	
function veeC(){genV();}	
function crossC(){genC();}	
function sierC(){generateSier();}	
