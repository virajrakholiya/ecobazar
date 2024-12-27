import React from 'react';

function Showcase() {
  return (
    <div className='grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 mt-5 items-center w-full justify-center'>
      <img 
        src="/src/assets/image/ShowCase1.png" 
        className=' h-[400px] md:h-auto object-contain rounded-lg w-full ' 
        alt="Showcase 1" 
      />
      <img 
        src="/src/assets/image/ShowCase2.png" 
        className='h-[400px] md:h-auto object-contain rounded-lg w-full' 
        alt="Showcase 2" 
      />
      <img 
        src="/src/assets/image/ShowCase3.png" 
        className='h-[400px] md:h-auto object-contain rounded-lg w-full' 
        alt="Showcase 3" 
      />
    </div>
  );
}

export default Showcase;
