import React from 'react';
const Header = () => {
  return  <header className="py-8">
   <div className='container mx-auto'>
    <div className="flex justify-between items-center">
      <a className='ss:text-[50px]' href="#">
        apex
      </a>
      <a href="#">
      <button className="btn btn-sm ss:text-[40px]">Work with me</button>
      </a>
    </div>
   </div>
   </header>
};

export default Header;
