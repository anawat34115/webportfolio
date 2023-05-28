import React from 'react';
import Image from '../assets/notion.svg'
import { FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';
import {fadeIn} from '../variants';

const Banner = () => {
  return <div className='min-h-[50vh] lg:min-h-[89vh] flex items-center' id='home'>
    <div className="container mx-auto px-9">
      <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>

      <div className="flex-1 text-center font-secondary lg:text-left">
      <motion.h1 
      variants={fadeIn('up', 0.3)}
      initial='hidden'
      whileInView={'show'}
      viewport={{ once: false, amount: 0.7 }}
      className='text-[black] font-bold leading-[0.8] ss:text-[110px] mx-auto sm:mx-0'>
        Anawat <span>Sunhur</span>
      </motion.h1>
      <div className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'>
        <span className='text-black mr-4'>I am a</span>
        </div>
        <p className='mb-8 max-w-lg mx-auto lg:mx-0 text-black ss:text-[30px]'>นักพัฒนาเว็บไซต์ที่มีประสบการณ์มากกว่า 2 ปี ผมมีความชำนาญในภาษาโปรแกรมต่างๆ เช่น HTML, CSS, JavaScript และไลบรารีต่างๆ เช่น React และ Wordpress</p>
        <div className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
        <a href="https://www.facebook.com/apac.sunhur" target="_blank">
          <button  className="btn btn-lg ss:text-[25px]">Contact me</button>
          </a>
        </div>
        </div>

        </div>
    </div>
    <div className='hidden lg:flex flex-1 max-w-[340px] lg:max-w-[600px] p-1 ml-50 '>
      <img src={Image} alt="" />
    </div>
  </div>;
};

export default Banner;
