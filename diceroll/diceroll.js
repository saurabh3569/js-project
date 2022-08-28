var random1 = Math.floor(Math.random()*6)+1;
var picture1="picture/"+"dice"+random1+".png";
var x = document.querySelectorAll("img")[0];
x.setAttribute("src",picture1);

var random2= Math.floor(Math.random()*6)+1;
var picture2="picture/"+"dice"+random2+".png";
document.querySelectorAll("img")[1].setAttribute("src",picture2);

if(random1>random2)
{
    document.querySelector("h1").innerHTML="player 1 wins";
}
else if(random1<random2)
{
    
    document.querySelector("h1").innerHTML="player 2 wins";
}
else
{
    
    document.querySelector("h1").innerHTML="Draw";
}