import React from "react";
import Card from "./Card";
import { Data } from "./Data";

function Sponsors() {
  return (
    <div className='w-screen h-screen text-gray-100 bg-gray-900 body-font flex items-center justify-center'>
      <section className='flex flex-col  items-center gap-10  justify-around '>
        <h1 className='text-center text-6xl font-bold'>Sponsors</h1>
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
