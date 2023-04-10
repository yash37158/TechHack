import React from "react";
import Card from "./Card";
import { Data } from "./Data";
import "../Whatsapp/whatsapp.css";

function Sponsors() {
  return (
    <div className='Screen h-screen w-screen text-gray-100  body-font flex items-center justify-center'>
      <section className='flex flex-col  items-center gap-10  justify-around '>
        <h1 className='text-center text-5xl font-bold text-[#B58EBC]'>
          Sponsors
        </h1>
        <div className='flex flex-wrap gap-10 items-center  justify-center p-2'>
          {Data.map((data) => (
            <Card key={data.id} data={data} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Sponsors;
