// const B = ({echo,times}) => echo.repeat(times);

// export default B ;

// const B = ({echo,times}) => {
//     return (   
//         <div>
// {Array.apply(null, Array(Number(times))).map(()=><h1>{echo}</h1>) }
//         </div>
        
//     )
// }


const B = (props) => {
        console.log(props.echo);
        // props.echo= "*";
        console.log(props.echo);   
}



export default B;