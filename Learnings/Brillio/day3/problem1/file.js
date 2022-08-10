
function validate(){
 var myform = document.getElementsByName('myform')[0];
 var name = myform.name.value;
 var password = myform.pass.value;
 var gender = myform.gender.value;
 var htown = myform.htown.value;
 var address = myform.addr.value;
 var checkbox1= document.getElementById('cbox1');
 var checkbox2 = document.getElementById('cbox2');
 var checkbox3 = document.getElementById('cbox3');
valid = true;
var checkboxvalue;
if(!checkbox1.checked && !checkbox2.checked && !checkbox3.checked){
    document.getElementById('s4').style.display ="";
    valid = false
    
}
 
 if(name.length< 10){
    // alert('Name must be at max 20 characters');
    document.getElementById('s1').style.display =""

    setTimeout(() =>{
      document.getElementById('s1').style.display ="none"      
    },2000)
    valid = false;
 }

 if(gender==''){
    // alert("Please select a Gender");
    document.getElementById('s2').style.display =""
    valid = false 
 }

 if(htown ==''){
    document.getElementById('s3').style.display =""
    valid = false;
 }
 if(password.length <=8){

    document.getElementById('spass').style.display = "";
    setTimeout(() =>{
      document.getElementById('spass').style.display ="none"      
    },2000)
    valid = false
 }


 if(address ==''){
   document.getElementById('sadd').style.display = "";
   valid = false;
}
 if(valid) {
      document.getElementById('b01').innerText = name;
      document.getElementById('b11').innerText =htown;
      document.getElementById('b21').innerText =gender;
      document.getElementById('b31').innerText =address;
      
    if(checkbox1.checked) checkboxvalue = checkbox1.value;
    if(checkbox2.checked) checkboxvalue +=(" "+ checkbox2.value);
    if(checkbox3.checked) checkboxvalue +=(" "+ checkbox3.value);
    document.getElementById('b41').innerText = checkboxvalue;
    document.getElementById('b51').innerText = password;
    
      // alert('successfully submitted');
 }
 return false;
}

const v1 = document.createElement('h1');
v1.innerText = "Personal Details";
document.body.appendChild(v1);

const form = document.createElement('form');

document.body.appendChild(form);

form.setAttribute('action', "https://www.google.com");
form.setAttribute('onSubmit', "return validate()");
form.setAttribute('name','myform');
const label1 = document.createElement('label');
label1.innerText ="Name  ";
label1.setAttribute('for', 'name');
const input1 = document.createElement('input');

input1.setAttribute('name', 'name');
input1.setAttribute('id', 'name');
input1.setAttribute('required',"");
form.appendChild(label1);
form.appendChild(input1);

// const break1 = document.createElement('br');
// form.appendChild(break1);

//SPAN -1  NAME
const span_input = document.createElement('span');
span_input.innerText = "invalid username entered";
span_input.style.display = 'none';
span_input.setAttribute('id', 's1');
span_input.style.color = 'red';
form.appendChild(span_input);

const break2 = document.createElement('br');
form.appendChild(break2);

const label2 = document.createElement('label');
label2.innerText = "Gender:    ";


form.appendChild(label2);

//male radio button
const label3 = document.createElement('label');
label3.innerHTML = "Male";
label3.setAttribute('for',"gender");
form.appendChild(label3);
const radio1 = document.createElement('input');
radio1.setAttribute('type', 'radio');
radio1.setAttribute('name', 'gender');
radio1.setAttribute('value', 'Male');
form.appendChild(radio1);

//female radio button
const label4 = document.createElement('label');
label4.innerHTML = "Female"
label4.setAttribute('for',"gender");
form.appendChild(label4);
const radio2 = document.createElement('input');
radio2.setAttribute('type', 'radio');
radio2.setAttribute('name', 'gender');
radio2.setAttribute('value', 'Female');
form.appendChild(radio2);


//SPAN -2 GENDER
const span_gender = document.createElement('span');
span_gender.innerText = "Please select a gender";
span_gender.style.display = 'none';
span_gender.style.color = 'red';
span_gender.setAttribute('id', 's2');
form.appendChild(span_gender);


//label for hometown select 
const break3 = document.createElement('br');
form.appendChild(break3);



// // hometown input
const label5 = document.createElement('label');
label5.innerText = "HomeTown    ";
label5.setAttribute('for',"htown");
form.appendChild(label5);

const select1 = document.createElement('select');

select1.setAttribute('name', "htown");
select1.setAttribute('id', 'htown');

const option1 = document.createElement('option');
const option2 = document.createElement('option');
const option3 = document.createElement('option');
const option4 = document.createElement('option');

option1.innerText= "Delhi";
option2.innerText ="Assam";
option3.innerText = "Karnataka";
option4.innerText = "Select";

option1.setAttribute('value', 'Delhi');
option2.setAttribute('value', 'Assam');
option3.setAttribute('value', 'Karnataka');
option4.setAttribute('value', '');



form.appendChild(select1);
select1.appendChild(option4);
select1.appendChild(option1);
select1.appendChild(option2);
select1.appendChild(option3);

//SPAN -2 HomeTown
const span_home = document.createElement('span');
span_home.innerText = "Please select a HomeTown";
span_home.style.display = 'none';
span_home.style.color = 'red';
span_home.setAttribute('id', 's3');
form.appendChild(span_home);


//break
const break4 = document.createElement('br');
form.appendChild(break4);



// adddress 

const address_label = document.createElement('label');
address_label.innerText= "Address: ";
address_label.setAttribute('for', "addr");
form.appendChild(address_label);

const input_address = document.createElement('textarea');
input_address.setAttribute('name', 'addr');
input_address.setAttribute('id', 'addr');
input_address.setAttribute('rows', '4');
input_address.setAttribute('cols', '30');

form.appendChild(input_address);


//SPAN - Address
const span_add= document.createElement('span');
span_add.innerText = "Please enter a valid address";
span_add.style.display = 'none';
span_add.style.color = 'red';
span_add.setAttribute('id', 'sadd');
form.appendChild(span_add);



const sb = document.createElement('br');
form.appendChild(sb);


// SKILLS

const label10 = document.createElement('label');
label10.innerText = "Skills:   ";
label10.setAttribute('for',"skills");
form.appendChild(label10);

const check_label1 = document.createElement('label');
check_label1.setAttribute('for', 'java');
check_label1.innerText ="Java";


const check_input1 = document.createElement('input');
check_input1.setAttribute ('type','checkbox');
check_input1.setAttribute('name', 'java');
check_input1.setAttribute('value','java');
check_input1.setAttribute('id', 'cbox1');

const check_label2 = document.createElement('label');
check_label2.setAttribute('for', 'oracle');
check_label2.innerText ="Oracle";

const check_input2 = document.createElement('input');
check_input2.setAttribute ('type','checkbox');
check_input2.setAttribute('name', 'oracle');
check_input2.setAttribute('value','Oracle');
check_input2.setAttribute('id', 'cbox2');

const check_label3 = document.createElement('label');
check_label3.setAttribute('for', 'python');
check_label3.innerText ="Python";

const check_input3 = document.createElement('input');
check_input3.setAttribute ('type','checkbox');
check_input3.setAttribute('name', 'python');
check_input3.setAttribute('value','Python');
check_input3.setAttribute('id', 'cbox3');


form.appendChild(check_label1);
form.appendChild(check_input1);
form.appendChild(check_label2);
form.appendChild(check_input2);
form.appendChild(check_label3);
form.appendChild(check_input3);

//SPAN skills
const span_s = document.createElement('span');
span_s.innerText = "Please select atleast one of the Skills";
span_s.style.display = 'none';
span_s.style.color = 'red';
span_s.setAttribute('id', 's4');
form.appendChild(span_s);

//break
const break44 = document.createElement('br');
form.appendChild(break44);

//password 
const l_pass = document.createElement('label');
l_pass.innerText ="Password:  ";
l_pass.setAttribute('for', 'pass');
const i_pass = document.createElement('input');
i_pass.setAttribute('name','pass');
i_pass.setAttribute('id','pass');
i_pass.setAttribute('type', 'password');
i_pass.setAttribute('required', "");
form.appendChild(l_pass);
form.appendChild(i_pass);


//SPAN - PAssword 
const span_pass= document.createElement('span');
span_pass.innerText = "Please enter a valid password";
span_pass.style.display = 'none';
span_pass.style.color = 'red';
span_pass.setAttribute('id', 'spass');
form.appendChild(span_pass);


const breaksubmit = document.createElement('br');
form.appendChild(breaksubmit);
//submit
const submit = document.createElement('input');
submit.setAttribute('type',"submit");
submit.setAttribute('value','Submit');

form.appendChild(submit);
//-------------------------------------------------------
//TABLE

const table = document.createElement('table');

const row1 = document.createElement('tr'); 
const col1 = document.createElement('th');
col1.innerText = "Name";
const col2 = document.createElement('td');
col2.innerText = "Name_value";


const row2 = document.createElement('tr'); 
const col3 = document.createElement('th');
col3.innerText = "HomeTown";
const col4 = document.createElement('td');
col4.innerText = "HomeTown_value";

//gender 

const row3 = document.createElement('tr'); 
const col5 = document.createElement('th');
col5.innerText = "Gender";
const col6 = document.createElement('td');
col6.innerText = "Gender_value";

// // Address :

const row4 = document.createElement('tr'); 
const col7 = document.createElement('th');
col7.innerText = "Address";
const col8 = document.createElement('td');
col8.innerText = "Address_value";

//skills 

const row5 = document.createElement('tr'); 
const col9 = document.createElement('th');
col9.innerText = "Skills";
const col10 = document.createElement('td');
col10.innerText = "Skills_value";


//password

const row6 = document.createElement('tr'); 
const col11 = document.createElement('th');
col11.innerText = "Password";
const col12 = document.createElement('td');
col12.innerText = "Password_value";



col1.setAttribute('id','b00');
col2.setAttribute('id','b01');
col3.setAttribute('id','b10');
col4.setAttribute('id','b11');
col5.setAttribute('id','b20');
col6.setAttribute('id','b21');
col7.setAttribute('id','b30');
col8.setAttribute('id','b31');
col9.setAttribute('id','b40');
col10.setAttribute('id','b41');
col11.setAttribute('id','b50');
col12.setAttribute('id','b51');



document.body.appendChild(table);

table.appendChild(row1);
row1.appendChild(col1);
row1.appendChild(col2);

table.appendChild(row2);
row2.appendChild(col3);
row2.appendChild(col4);

table.appendChild(row3);
row3.appendChild(col5);
row3.appendChild(col6);

table.appendChild(row4);
row4.appendChild(col7);
row4.appendChild(col8);

table.appendChild(row5);
row5.appendChild(col9);
row5.appendChild(col10);

table.appendChild(row6);
row6.appendChild(col11);
row6.appendChild(col12);