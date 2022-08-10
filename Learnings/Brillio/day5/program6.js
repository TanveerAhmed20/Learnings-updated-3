// find largest of two numbers
document.getElementById('btn_6').
addEventListener('click', function(e) {
    let var1 = parseInt(prompt('enter first number'));
    let var2 = parseInt(prompt('enter second number'));
    return (var1 > var2)? alert('First Number is larger'):alert('Second Number is Larger');
});

