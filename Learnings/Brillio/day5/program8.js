//login page
function isBlank(var1){
    if(var1==='') return true;
    return false;
}
function validatePass(pass){
    if(pass.length < 8) return false; 
    return true ;
}
function func(){

    let form = document.getElementsByName("myform")[0];
    let name = form.uname.value;
    let pass = form.pass.value;
    
    if(isBlank(name) && isBlank(pass))
    {
        alert("Name and password  is required");
        return false;
    }
    if(isBlank(name))
    {
        alert("Name is required");
        return false;
    }
    if(isBlank(pass))
    {
        alert("password is required");
        return false;
    }
    
    // if(!validateName(name)){ alert("name is required"); return false;}
    if(!validatePass(pass)) {alert("password should be min of length 8"); return false;}

    return true;
}