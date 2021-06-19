var computerImage=1;
var totalIamge=5;
function slider(x){
    var image=document.getElementById('img');
    computerImage=computerImage+x;
    image.src-"image"+computerImage+".jpg";
    if(computerImage>=totalIamge)
        {
            computerImage=1;
            
        }
    if(computerImage<1){
        computerImage=totalIamge;
                       }
    
}
function Temps()
{
var d=new Date();
var t=["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"] ;
var h=d.getHours();
var m=d.getMinutes();
var s=d.getSeconds();
var dy=d.getFullYear();
dmo=d.getMonth();
dday=d.getDay();
ddate=d.getDate();
if (h<10)
h='0'+h;
if(m<10)
m='0'+m;
if(s<10)
s='0'+s;
var mois=['janvier','février','mars','mai','juin','juillet','aout','septembre','octobre','novembre','decembre'] ;
 var jour=['dimanche','lundi','mardi','mercredi','jeudi','vendredi','samedi']   ;
f.date.value=('on est le '+ jour[dday] +' ' +ddate +' '+mois[dmo-1] + ' '+ dy +' il est : '
    + h +':' + m +':' +s);
}