var city = new String("All that glitters is not gold");

var freq = {};
for( let i = 0;i<city.length;i++){
    if(freq[city[i]]==undefined)
        freq[city[i]]= 1;
    else
        freq[city[i]]++;
}

console.table(freq);

// console.log(Object.entries(freq));
// sorting 

freq = Object.entries(freq).sort((a,b) =>a[1]==b[1]? a[0]>b[0]?1:-1:a[1]-b[1]);

result = {};
for(let x of freq){
    if(x[0]==' ') result['spaces'] = x[1];
    else
    result[x[0]] = x[1];
}

console.table(result);
