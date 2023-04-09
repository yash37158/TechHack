import React from "react";

function Card({ data }) {
  return (
    <div className='p-4 bg-pink rounded-md w-[12rem] h-[100px] flex flex-col gap-5 justify-center items-center sh'>
      <div>
        <img src={data.logo} alt={data.title} className='object-fit' />
      </div>

      <p>{data.title}</p>
    </div>
  );
}

export default Card;
