var p = document.getElementsByTagName('p')[0];
console.log(p);

// p.addEventListener('click', function(e) {
//     console.log("clicked");
// });

// p.addEventListener('mouseover', function(e) {
//     p.style = 'color:red';
// });

// p.addEventListener('mouseout', function(e) {
//     p.style = 'color:black';
// });


// var body = document.getElementsByTagName('body')[0];


// body.addEventListener('mouseover', function(e) {
//     body.style = 'background-color: Violet;font-size:24px;';

// });


// body.addEventListener('mouseout', function(e) {
//     body.style = 'background-color: white;font-size:16px;';

// });

const validate  = ()=>{

       var myform = document.getElementsByName('myform')[0];

        var username = myform.uname.value;
        var password = myform.pass.value;

        if(username.length<10)  {
            document.getElementById('uname').focus();
            console.log("small");
        }
        

        alert(`username: ${username} and password: ${password}`);
        return false;
}

