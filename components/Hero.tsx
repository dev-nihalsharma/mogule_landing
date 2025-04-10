import { FaLocationArrow } from 'react-icons/fa6';

import Image from 'next/image';
import MagicButton from './MagicButton';
import { Spotlight } from './ui/Spotlight';
import { TextGenerateEffect } from './ui/TextGenerateEffect';
import { servicesList } from '@/data';

const Hero = () => {
  return (
    <div id='hero' className='lg:pb-20 max-sm:h-[85vh] pt-36'>
      <div>
        <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='white' />
        <Spotlight className='h-[80vh] w-[50vw] top-10 left-full' fill='purple' />
        <Spotlight className='left-80 top-28 h-[80vh] w-[50vw]' fill='blue' />
      </div>

      <div
        className='h-[90vh] lg:md:h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center'
      >
        <div
          className='absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]'
        />
      </div>

      <div className='flex justify-center relative my-10 gap-x-10 z-10'>
        <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[70vw] flex flex-col items-start justify-center'>
          <p className='uppercase tracking-widest text-xs text-center text-blue-100 max-w-80'>
            Attention Business Owners
          </p>
          <TextGenerateEffect
            words='Scaling Businesses faster with'
            className='text-start text-[40px] md:text-3xl lg:text-3xl font-normal'
            stringsList={servicesList}
          />

          <p className=' md:tracking-wider mb-4 text-s md:text-md lg:text-md font-light'>
            We help D2C & B2B businesses launch, boost customers, and increase revenue within 90 Days
          </p>

          <a href='#get-quote'>
            <MagicButton title='Get A Quote' icon={<FaLocationArrow />} position='right' />
          </a>
        </div>
        <figure className='hidden lg:block'>
          <Image src='/hero-banner.png' width='800' height='800' alt='hero banner' />
        </figure>
      </div>
    </div>
  );
};

export default Hero;
