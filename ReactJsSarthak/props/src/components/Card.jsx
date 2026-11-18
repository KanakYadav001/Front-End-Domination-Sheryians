
import '../index.css'
const Card = (props) => {
  return (
    <>
    <div className='card'>
      <img src={props.img} alt="img" />
      <p>Hello My name is {props.name}</p>
      <p>My Current Age is {props.age}</p>
    </div>
    </>
  )
}

export default Card