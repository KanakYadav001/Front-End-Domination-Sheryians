import React from 'react'
import '../index.css'




const Card = (props : any) => {
  return (
    <>
    <div className='card'>
      <div className='Card_Header'>
        <img src={props.img} />
        <div className='save'>
          <p>Save</p>
          <img src="https://cdn-icons-png.flaticon.com/128/9511/9511721.png" alt="icon" />
        </div>

      </div>
      <div className='CardBody'>
        <div className='cardB-time'>
        <h4>{props.company}</h4>
        <p>{props.posted}</p>
        </div>
        <h2>{props.title}</h2>

        <div className='type-position'>
          <div><h5>{props.employmentType}</h5></div>
          <div><h5>{props.level}</h5></div>
        </div>
      </div>
      <div className='bottom'>

        <div >

    
          <h4>{props.salary}</h4>
          <p>{props.location}</p>

        </div>
        <button>Apply now</button>
      </div>


    </div>
    </>
  )
}

export default Card