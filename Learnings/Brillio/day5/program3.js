// change the color of a text when used is clicking on the button
let toggle = true;
document.getElementById("btn_2").
addEventListener("click", function(e) {
    if(toggle){ toggle = false; document.getElementById("color").style.color = "red";}
    else{document.getElementById("color").style.color = "yellow";toggle = true;}
});