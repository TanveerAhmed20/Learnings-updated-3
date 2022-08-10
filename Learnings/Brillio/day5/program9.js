// check the input given in a input box is numbre and algo value should be between 1 -100

document.getElementById('btn_7').
addEventListener('click', function(e) {

   let num = document.getElementById('num_3').value;
   if(!/^\d*$/.test(num)) {
       return alert('input is not a number');
    }

    if(parseInt(num) >100 || parseInt(num) <1){
        return alert('number should be between 1-100 inclusive');
    }

    return alert('number is valid');
});