export default function Child2({salary}){
    console.log('child2 called');
 return (
    <div>
        <h1 style ={{color: salary >50000 ? "red" : "green" }}>{salary}</h1>
    </div>
 )
}