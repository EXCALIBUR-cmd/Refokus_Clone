import React from 'react';
import Button from './Button';

function Navbar() {
  return (
    <div className='max-w-screen-xl mx-auto py-6 flex items-center justify-between border-b-[1px] border-zinc-800'>
      {/* Left Section */}
      <div className='nleft flex items-center'>
        <img
          src="https://cdn.prod.website-files.com/63b386e70e89095e936cc9c2/63bddf6c495c16eebdb45576_Refokus-w.svg"
          alt="Refokus Logo"
        />
        <div className='links flex gap-14 ml-20'>
          {["Home", "Work", "Culture", "", "News"].map((elem, index) => (
            elem.length === 0 ? (
              <span key={index} className='w-1 h-8 bg-zinc-700'></span>
            ) : (
              <a
                key={index}
                className='text-sm flex items-center gap-1'
                href='#'
              >
                {elem}
                {index === 1 && (
                  <span
                    style={{ boxShadow: "0 0 0.45em #00F19" }}
                    className='inline-block w-1 h-1 rounded-full bg-green-500'
                  ></span>
                )}
              </a>
            )
          ))}
        </div>
      </div>

      {/* Right Section (Button) */}
      <Button />
    </div>
  );
}

export default Navbar;