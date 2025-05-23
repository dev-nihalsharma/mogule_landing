import React from 'react';
import { FaLocationArrow } from 'react-icons/fa6';
import { PinContainer } from './Pin';

const PortfolioCard = ({ item }: { item: any }) => {
  return (
    <a
      className='lg:min-h-[31.5rem] h-[25rem] flex items-center justify-center lg:w-[375px] sm:w-96 w-[80vw]'
      key={item.id}
      href={`https://${item.link}`}
      target='_blank'
    >
      <PinContainer title={item.link}>
        <div className='relative flex items-center justify-center  lg:w-[375px] sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10'>
          <div className='relative w-full h-full overflow-hidden lg:rounded-3xl' style={{ backgroundColor: '#13162D' }}>
            <img src='/bg.png' alt='bgimg' />
          </div>
          <img src={item.img} alt='image' className='z-10  h-full rounded-3xl absolute bottom-0' />
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
            {item.iconLists.map((icon: any, index: any) => (
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
    </a>
  );
};

export default PortfolioCard;
