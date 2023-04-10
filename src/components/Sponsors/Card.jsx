import React from "react";

function Card({ data }) {
  return (
    <div className=' bg-[#E0CFE3] rounded-md w-[12rem] h-[100px] flex flex-col  justify-around items-center '>
      <img
        className='object-fit max-w-[10rem] max-h-[4rem]'
        src={data.logo}
        alt={data.title}
      />
    </div>
  );
}

export default Card;
