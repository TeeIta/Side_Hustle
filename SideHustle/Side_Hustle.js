var seven=document.getElementById("seven")

var one=1


function myFunction_sub() {
    a=parseInt(seven.innerText)-one
    document.getElementById("seven").innerHTML = a;

}


function myFunction_add() {
    a=parseInt(seven.innerText)+one
    document.getElementById("seven").innerHTML = a;

}