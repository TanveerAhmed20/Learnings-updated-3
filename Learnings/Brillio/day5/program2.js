//multiplicataion table
document.getElementById('btn_3').
addEventListener('click', function(e) {
    console.log('button clicked table');
    var num = document.getElementById('mul_val').value;
    var tab = document.getElementById('table_1');
    tab.innerHTML = "";
    for(let i=1;i<=10;i++){
        let row = document.createElement('tr');
        let col1 = document.createElement('td');
        let col2 = document.createElement('td');
        let col3 = document.createElement('td');
        col1.innerText = num+"x";
        col2.innerText = " "+i+" = ";
        col3.innerText = i*num;
        row.appendChild(col1);
        row.appendChild(col2);
        row.appendChild(col3);
        tab.appendChild(row);
    }
});