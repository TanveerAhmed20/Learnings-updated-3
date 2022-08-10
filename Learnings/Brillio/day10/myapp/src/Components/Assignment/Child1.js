export default function Child1({handleHikeSalary}){
 console.log('child1 called');
 return (
    <div>
        <input type ="text"  onChange = {(event)=>handleHikeSalary(event.target.value)}/>
    </div>

 )

}