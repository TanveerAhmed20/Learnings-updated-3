// change first letter of string to upper case

document.getElementById('btn_5').
addEventListener('click', function(e) {
   var text = document.getElementById('str').innerText;
   text = text.charAt(0).toUpperCase()+text.slice(1);
   document.getElementById('str').innerText = text;
});

