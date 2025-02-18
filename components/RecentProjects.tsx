'use client';

import { FaLocationArrow } from 'react-icons/fa6';

import { shopfiyProjects } from '@/data';
import { PinContainer } from './ui/Pin';
import MagicButton from './MagicButton';
import { useState } from 'react';

const OurPortfolio = () => {
  const [currentTab, setCurrentTab] = useState('Shopify');

  return (
    <div id='portfolio' className='py-20 w-full flex flex-col items-center'>
      <h1 className='heading'>
        A small selection of <span className='text-purple'>Our Portfolio</span>
      </h1>
      <div className='flex max-w-fit md:min-w-[70vw] lg:min-w-fit z-[5000] mt-5 inset-x-0 mx-auto  py-2  border-black/.1 items-center justify-center space-x-4'>
        <button
          onClick={() => {
            setCurrentTab('Shopify');
          }}
          className='  text-sm font-medium relative text-black dark:text-white px-4 py-2 rounded-lg'
        >
          <span>Shopify</span>
          {currentTab === 'Shopify' && (
            <span className='absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-[#f9bdac] to-transparent  h-px' />
          )}
        </button>
        <button
          onClick={() => {
            setCurrentTab('Web Dev');
          }}
          className={`text-sm font-medium relative  text-black dark:text-white px-4 py-2 rounded-lg`}
        >
          <span>Web Dev</span>
          {currentTab === 'Web Dev' && (
            <span className='absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-[#f9bdac] to-transparent  h-px' />
          )}
        </button>
        <button
          onClick={() => {
            setCurrentTab('App Dev');
          }}
          className=' text-sm font-medium relative  text-black dark:text-white px-4 py-2 rounded-lg'
        >
          <span>App Dev</span>
          {currentTab === 'App Dev' && (
            <span className='absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-[#f9bdac] to-transparent  h-px' />
          )}
        </button>
        <button
          onClick={() => {
            setCurrentTab('Paid Ads');
          }}
          className='  text-sm font-medium relative  text-black dark:text-white px-4 py-2 rounded-lg'
        >
          <span>Paid Ads</span>
          {currentTab === 'Paid Ads' && (
            <span className='absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-[#f9bdac] to-transparent  h-px' />
          )}
        </button>
      </div>
      <div className='flex flex-wrap items-center  justify-center  gap-16 mt-10'>
        {currentTab === 'Shopify' &&
          shopfiyProjects.map((item) => (
            <div
              className='lg:min-h-[31.5rem] h-[25rem] flex items-center justify-center lg:w-[375px] sm:w-96 w-[80vw]'
              key={item.id}
            >
              <PinContainer title='/ui.aceternity.com' href='https://twitter.com/mannupaaji'>
                <div className='relative flex items-center justify-center lg:w-[375px] sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10'>
                  <div
                    className='relative w-full h-full overflow-hidden lg:rounded-3xl'
                    style={{ backgroundColor: '#13162D' }}
                  >
                    <img src='/bg.png' alt='bgimg' />
                  </div>
                  <img src={item.img} alt='cover' className='z-10 absolute bottom-0' />
                </div>

                <h1 className='font-bold lg:text-2xl md:text-xl text-base line-clamp-1'>{item.title}</h1>

                <p
                  className='lg:text-xl lg:font-normal font-light text-sm line-clamp-2'
                  style={{
                    color: '#BEC1DD',
                    margin: '1vh 0',
                  }}
                >
                  {item.des}
                </p>

                <div className='flex items-center justify-between mt-7 mb-3'>
                  <div className='flex items-center'>
                    {item.iconLists.map((icon, index) => (
                      <div
                        key={index}
                        className='border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center'
                        style={{
                          transform: `translateX(-${5 * index + 2}px)`,
                        }}
                      >
                        <img src={icon} alt='icon5' className='p-2' />
                      </div>
                    ))}
                  </div>

                  <div className='flex justify-center items-center'>
                    <p className='flex lg:text-xl md:text-xs text-sm text-purple'>Check Live Site</p>
                    <FaLocationArrow className='ms-3' color='#f9bdac' />
                  </div>
                </div>
              </PinContainer>
            </div>
          ))}
      </div>
      <a href='#get-quote' className='mt-10'>
        <MagicButton title='Get Your Quote' icon={<FaLocationArrow />} position='right' />
      </a>
    </div>
  );
};

export default OurPortfolio;
