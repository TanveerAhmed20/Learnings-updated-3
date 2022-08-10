document.getElementById('btn_4').
addEventListener('click', function(){
   const val = prompt('enter number');
   if(/^\d*$/.test(val)===false) return alert('invalid number');
   return val &1 ? alert('number is odd'): alert('number is even');
});
