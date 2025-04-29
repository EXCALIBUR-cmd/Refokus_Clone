import React from 'react';
import Button from './Button';

function Product({val, mover, count}) {
  return (
    <div className='w-full py-20 h-[23rem] text-white'>
      <div onMouseEnter={()=>{mover(count)}} className='max-w-screen-xl mx-auto flex items-center justify-between'>
        {/* Heading Section */}
        <h1 className="text-5xl capitalize font-semibold">{val.title}</h1>

        {/* Details Section */}
        <div className='dets w-1/3'>
          <p className='text-base leading-relaxed mb-10'>
{val.description}
          </p>
          <div className='flex items-center gap-5'>
          {val.live && <Button />}
          {val.case && <Button title='case study'/>}
          </div>
         
        </div>
      </div>
    </div>
  );
}

export default Product;