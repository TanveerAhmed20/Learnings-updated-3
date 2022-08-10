import "./card-component.css";

const Card = (props) => {
  
    let { id, name, email } = props.robo;
    return (
      <div className="card-container">
        <img
          src={`https://robohash.org/${id}?set=set1&size=180x180`}
          alt={`monster ${id}`}
        />
        <h2 >{name}</h2>
        <p>{email}</p>
      </div>
    );
  } 

export default Card;
