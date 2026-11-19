import React from "react";
import { MoveRight } from "lucide-react";


const Card = (props: any) => {
  
  return (
    <div style={{backgroundImage: `url(${props.img})`, backgroundSize: "cover",backgroundPosition: "center"}} className="  overflow-hidden shrink-0 w-80 rounded-3xl p-5 gap-2 h-170 flex flex-col justify-between">
      <div className="w-15 h-15 rounded-full flex items-center justify-center bg-sky-500 ">
        <p className="font-bold">{props.num +1}</p>
      </div>

      <div className="flex flex-col justify-between h-60">
        <p className="text-cyan-50">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
          repudiandae qui omnis eum reiciendis quos architecto deserunt at, et
          illum.
        </p>

        <div className="flex justify-between">
          <div className="bg-blue-500 rounded-full py-1 px-3 text-white">
            {props.feature}
          </div>
          <div >
            <MoveRight color="white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
