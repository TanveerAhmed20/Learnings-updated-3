// 

 
document.getElementById('btn_1').addEventListener('click', function(){
    var val = parseFloat(document.getElementById('inp_1').value);
    console.log(val);
    var p1 = document.getElementById('area');
    var p2 = document.getElementById('circumference');
    console.log('button clicked');
    console.log("val"+val);
    p1.innerText = "Area : "+ (Math.PI * val * val);
    p2.innerText = "Circumference : "+ (2*Math.PI * val);
     
});