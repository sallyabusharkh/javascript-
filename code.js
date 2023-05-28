// ALERT 

window.alert("this is alert test") 

// question 2 
document.getElementById("clickbtn").onclick = function() {
    window.alert("islam amar"); 
} 
document.getElementById("facebtn").onclick =function(){
    document.getElementById("facedivv").innerHTML="face is social media comapny"; 
} 
document.getElementById("applebtn").onclick = function(){
    document.getElementById("appledivv").innerHTML = "<ul> <li>iphone </li> <li>ipad </li> <li>ipod </li> </ul>" ; 
}

document.getElementById("facestyle").onclick = function(){
    document.getElementById("facedivv").style.backgroundColor = "rgba(26,203,135,0.1)" ; 
    document.getElementById("facedivv").style.width = "200px"; 
} 
document.getElementById("fontbtn").onclick = function(){
    document.getElementById("appledivv").style.fontFamily= "monospace"; 
    document.getElementById("appledivv").style.fontSize ="3em";
}
var x=3 ; 
var y = 4;  
console.log(typeof(x))

console.log(x+y); 
console.log(x*y); 
console.log(x-y); 
console.log(x/y) ;  
document.getElementById("colorbtn").onclick = function(){  
    // console.log(Math.random())
    var r =(Math.random()*255)%255
    var g =(Math.random()*255)%255
    var b =(Math.random()*255)%255 
    console.log(r,g,b)
    document.getElementById("facedivv").style.backgroundColor = "rgb("+r+","+g+","+b+")"; 
}

function swapbtn(){
    var applediv = document.getElementById("appledivv").innerHTML 
    var facediv = document.getElementById("facedivv").innerHTML 
    var inputvalue = document.getElementById("inputtext").value 
    console.log(inputvalue)
    document.getElementById("appledivv").innerHTML = facediv ;  
    document.getElementById("facedivv").innerHTML = applediv ;  

}