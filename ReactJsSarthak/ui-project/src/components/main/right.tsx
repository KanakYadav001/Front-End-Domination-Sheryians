import { MoveRight } from 'lucide-react'

import 'tailwindcss'
import Card from '../Card'

const Right = (props : any) => {
    const data = [
        {
           url : "https://i.pinimg.com/736x/b9/14/24/b91424257ca4bdbe32fc2088200faac0.jpg",
           feature : "radhe radhe"
        },
        {
            url : "https://i.pinimg.com/736x/e4/5b/75/e45b758f35e47c4ad949dc1310b9c625.jpg",
            feature : "radhe radhe"
        },
        {
            url : "https://i.pinimg.com/736x/b1/bf/fe/b1bffeca5aa88c823f41d1b866657a54.jpg",
            feature : "radhe radhe"
        },
        {
            url : "https://i.pinimg.com/736x/3d/37/4e/3d374edb9e25b2375ca1c3ca3122db40.jpg",
            feature : "radhe radhe"
        },
        {
            url : "https://i.pinimg.com/736x/9a/e9/65/9ae9658a77aa0d519dfdcfc384f72c52.jpg",
            feature : "radhe radhe"
        },

    ]
  return (
    
    <div className='cardfeed overflow-hidden overflow-x-auto  flex-nowrap w-1/1 h-180 flex gap-5'>
        {data.map(function (data , index){
            
            
            return <Card num={index} img={data.url} feature={data.feature}  />
        })}
     
      
    </div>
  )
}

export default Right