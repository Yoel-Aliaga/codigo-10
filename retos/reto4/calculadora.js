// captura el boton
window.onload=load;

function load(){
    
    document.getElementById("7").onclick=click7;
    document.getElementById("8").onclick=click8;
    
    
}

const num7 = document.getElementById("7").innerHTML;
const num8 = document.getElementById("8").innerHTML;
let result = document.getElementsByClassName(".result").innerHTML="";

function click7(){

// alert(num7)
    document.querySelector(".result").innerHTML = (result + num7);
    // document.querySelector(".result").innerHTML = num8;

}

function click8(){

    // alert(num8)
        // document.querySelector(".result").innerHTML = num7;
        document.querySelector(".result").innerHTML = (result + num8);
    
    }