import React from 'react'
import { ArrowUpRight } from 'lucide-react'
const Left = (props:any) => {
  return (
     <div className=' w-1/3 flex flex-col h-180 justify-between'>
    <div className='flex flex-col gap-15 '>

         <h1 className='text-6xl font-bold'>Prospective costomer segmentation</h1>
         <p >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, velit saepe reprehenderit fuga ducimus quos odit esse in distinctio eaque perspiciatis nihil</p>


    </div>
     
        <ArrowUpRight size={100} />
    
     </div>
  )
}

export default Left