import { emails, socialMedia } from '@/data';
import { IoMail } from 'react-icons/io5';
import MagicButton from './MagicButton';

const Footer = () => {
  return (
    <footer className='w-full pt-20 pb-10' id='contact'>
      {/* background grid */}
      <div className='w-full absolute left-0 -bottom-72 min-h-96 -z-50'>
        <img src='/footer-grid.svg' alt='grid' className='w-full h-full opacity-50 ' />
      </div>

      <div className='flex flex-col items-center'>
        <h1 className='heading lg:max-w-[45vw]'>
          Got Any <span className='text-purple'>Queries?</span>
        </h1>
        <p className='text-white-200 md:mt-10 my-5 text-center'>
          Reach out to us today and let&apos;s discuss how we can help you achieve your goals.
        </p>
        <a href={`mailto:${emails.mogulePrivateMale}`}>
          <MagicButton title='Email Us' icon={<IoMail />} position='right' />
        </a>
      </div>
      <div className='flex mt-16 md:flex-row flex-col justify-between items-center'>
        <p className='md:text-base text-sm md:font-normal font-light'>Copyright © 2024 Mogul-e Media</p>

        <div className='flex items-center md:gap-3 gap-6 sm:mt-3'>
          {socialMedia.map((info) => (
            <div
              key={info.id}
              onClick={() => {
                window.open(info.link, '_blank', 'noopener,noreferrer');
              }}
              className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300'
            >
              <img src={info.img} alt='icons' width={20} height={20} />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
