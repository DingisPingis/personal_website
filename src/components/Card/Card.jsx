import './Card.css'

export default function Card(props) {
  return (
    <a href={props.link}>
      <div className="card">
        <img className="card-image" src={props.image} alt="Image"/>
        <div className="card-text">
          <h3>{props.name}</h3>
          <p>{props.description}</p>
        </div>
      </div>
    </a>
  )
}
