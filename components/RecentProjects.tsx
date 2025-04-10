'use client';

import { FaLocationArrow } from 'react-icons/fa6';

import { shopfiyProjects, webAppDevProjects } from '@/data';
import { PinContainer } from './ui/Pin';
import MagicButton from './MagicButton';
import { useState } from 'react';
import PortfolioCard from './ui/PortfolioCard';
import { Button } from './ui/MovingBorders';

const OurPortfolio = () => {
  const [currentTab, setCurrentTab] = useState('shopify');

  return (
    <div id='portfolio' className='py-20 w-full flex flex-col items-center'>
      <h1 className='heading'>
        A small selection of <span className='text-purple'>Our Portfolio</span>
      </h1>
      <div className='flex max-w-fit md:min-w-[70vw] lg:min-w-fit z-[5000] mt-5 inset-x-0 mx-auto  py-2  border-black/.1 items-center justify-center space-x-4'>
        <button
          onClick={() => {
            setCurrentTab('shopify');
          }}
          className='  text-sm font-medium relative text-black dark:text-white px-4 py-2 rounded-lg'
        >
          <span>Shopify</span>
          {currentTab === 'shopify' && (
            <span className='absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-[#f9bdac] to-transparent  h-px' />
          )}
        </button>
        <button
          onClick={() => {
            setCurrentTab('web-app-dev');
          }}
          className={`text-sm font-medium relative  text-black dark:text-white px-4 py-2 rounded-lg`}
        >
          <span>Web & App Dev</span>
          {currentTab === 'web-app-dev' && (
            <span className='absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-[#f9bdac] to-transparent  h-px' />
          )}
        </button>
        {/* <button
          onClick={() => {
            setCurrentTab('App Dev');
          }}
          className=' text-sm font-medium relative  text-black dark:text-white px-4 py-2 rounded-lg'
        >
          <span>App Dev</span>
          {currentTab === 'App Dev' && (
            <span className='absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-[#f9bdac] to-transparent  h-px' />
          )}
        </button> */}
        <button
          onClick={() => {
            setCurrentTab('paid-ads');
          }}
          className='  text-sm font-medium relative  text-black dark:text-white px-4 py-2 rounded-lg'
        >
          <span>Paid Ads</span>
          {currentTab === 'paid-ads' && (
            <span className='absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-[#f9bdac] to-transparent  h-px' />
          )}
        </button>
      </div>
      <div className='flex flex-wrap items-center w-full justify-center  gap-16 mt-10'>
        {currentTab === 'shopify' && shopfiyProjects.map((item) => <PortfolioCard key={item.id} item={item} />)}
        {currentTab === 'web-app-dev' && webAppDevProjects.map((item) => <PortfolioCard key={item.id} item={item} />)}
        {currentTab === 'paid-ads' && (
          <div className='flex border gap-6 w-full h-[400px] max-sm:h-[80vh] max-md:h-[80vh] max-[1300px]:h-[60vh] rounded-3xl p-10 max-md:flex-col max-sm:gap-5 max-sm:items-center max-sm:justify-center'>
            <img src='/paid-ads.png' alt='paid-ads-bg' className='rounded-3xl w-[500px]' />
            <div className='flex flex-col gap-5 items-start'>
              <h1 className='text-3xl max-md:text-2xl font-bold text-white max-sm:text-center'>
                <span className='text-purple '>Paid Ads</span> Portfolio
              </h1>
              <p className='max-md:text-sm text-gray-200 '>
                We have a proven track record of helping businesses grow through targeted advertising campaigns. Our
                paid ads portfolio showcases our expertise in creating effective ad campaigns that drive results. From
                social media ads to Google Ads, we have the skills and experience to help you reach your target audience
                and achieve your business goals.
              </p>

              <p className='max-md:text-sm text-gray-200 '>
                check out our portfolio to get more insights on how we grow your business.
              </p>

              <Button
                className='text-sm p-4 text-gray-500 bg-orange-50 bg-opacity-20 max-sm:text-center'
                onClick={() =>
                  window.open(
                    'https://docs.google.com/document/d/1mrci3puF_U8Q1bfHxBNlIl9TzsYXgxVe17BQBIZ1kas/edit?usp=sharing',
                    '_blank'
                  )
                }
              >
                <h1 className='text-white'>View Portfolio</h1>
              </Button>
            </div>
          </div>
        )}
      </div>
      <a href='#get-quote' className='mt-10'>
        <MagicButton title='Get Your Quote' icon={<FaLocationArrow />} position='right' />
      </a>
    </div>
  );
};

export default OurPortfolio;
