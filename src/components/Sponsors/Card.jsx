import React from "react";

function Card({ data }) {
  return (
    <div className='bg-pink rounded-md w-[210px] h-[300px] flex flex-col gap-5 justify-center items-center sh'>
      <div className='px-3'>
        <img src={data.logo} alt={data.title} className='object-fit' />
      </div>

      <p>{data.title}</p>
    </div>
  );
}

export default Card;
