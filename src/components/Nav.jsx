import React from 'react';
import {BiHomeAlt,BiUser} from 'react-icons/bi'
import {BsClipboardData,BsBriefcase,BsChatSquare} from 'react-icons/bs'
import Work from './Work'
import { Link } from 'react-scroll';

const Nav = () => {
  return (
  <nav className='fixed bottom-3 lg:buttom-8 w-full overflow-hidden z-50'>
  <div className='container mx-auto'>
    <div className='w-full bg-black/20 h-[96px] backdrop-blur-2x1
    rounded-full max-w-[460px] mx-auto px-5 flex justify-between text-2x1 items-center text-2x1
    text-white/50'>
      <Link  to='home' className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center' activeClass='active' smooth={true} spy={true} offset={-200}>
        <BiHomeAlt/>
      </Link>
      <Link  to='about' className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center' activeClass='active'  smooth={true} spy={true}>
        <BiUser/>
      </Link>
      <Link  to='services' className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center' activeClass='active'  smooth={true} spy={true}>
        <BsClipboardData/>
      </Link>
      <Link to='work'  className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center' activeClass='active'  smooth={true} spy={true}>
        <BsBriefcase/>
      </Link>


    </div>
  </div>
  </nav>
  )
};

export default Nav;
