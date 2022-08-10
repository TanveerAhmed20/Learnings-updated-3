var urlPattern = new RegExp('^(https?:\\/\\/)?'+ // validate protocol
  '((([a-z\\d]([a-z\\d-][a-z\\d]))\\.)+[a-z]{2,}|'+ // validate domain name
  '((\\d{1,3}\\.){3}\\d{1,3}))'+ // validate OR ip (v4) address
  '(\\:\\d+)?(\\/[-a-z\\d%_.~+])'+ // validate port and path
  '(\\?[;&a-z\\d%_.~+=-]*)?'+ // validate query string
  '(\\#[-a-z\\d_]*)?$','i'); // validate fragment locator


function usingAnchorTag(){

	const isValidUrl = string =>{	
  	var a  = document.createElement('a');
   	a.href = string;
   	return (a.host && a.host != window.location.host);
    }
}
 
let urls = [
    new URL('www.google.com'),
    new URL('ht://www.google.com'),
    new URL('https://.google.com'),
    new URL('https://www.googlecom'),
    new URL('https://wwwwgoogle.com')
];
for(let x of urls) {
    console.log(x+"  "+urlPattern.test(x));
}

console.log(urlPattern.test('https://www.google.com'));