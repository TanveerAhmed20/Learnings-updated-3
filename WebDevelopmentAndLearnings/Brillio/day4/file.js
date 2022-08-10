

    var userInfo = [{username:'',password:''}];

    function addUserInfoToTable(){
        var tableEle = document.createElement("table");
        tableEle.setAttribute("border","1");

        var trEle = document.createElement("tr");
        var thEle = document.createElement("td");

        thEle.innerText= "username";

        var thEle2 = document.createElement("th");
        thEle2.innerText = "password";

        trEle.appendChild(thEle);
        trEle.appendChild(thEle2);
        tableEle.appendChild(trEle);


        userInfo.forEach((user) => {
            var trElement= document.createElement('tr');
            var tdEle = document.createElement('td');
            tdEle.innerText =  user.username;
            var tdEle2 = document.createElement('td');
            tdEle2.innerText = user.password;
            trElement.appendChild(tdEle);
            trElement.appendChild(tdEle2);

            // appending the new row into the table 
        
            tableEle.appendChild(trElement);

        });

    }