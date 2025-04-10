'use client';
import { useEffect } from 'react';
import { motion, stagger, useAnimate } from 'framer-motion';
import { cn } from '@/lib/utils';
import { TypeAnimation } from 'react-type-animation';
import Typewriter from 'typewriter-effect';

export const TextGenerateEffect = ({
  words,
  className,
  stringsList,
}: {
  words: string;
  className?: string;
  stringsList: string[];
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(' ');
  useEffect(() => {
    console.log(wordsArray);
    animate(
      'span',
      {
        opacity: 1,
      },
      {
        duration: 2,
        delay: stagger(0.1),
      }
    );
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              // change here if idx is greater than 3, change the text color to #f9bdac
              className='dark:text-white text-black opacity-0'
            >
              {word}{' '}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn('font-bold', className)}>
      {/* mt-4 to my-4 */}
      <div className='my-4'>
        {/* remove  text-2xl from the original */}
        <div className='flex flex-col text-[#f9bdac]  leading-snug tracking-wide'>
          {renderWords()}
          <span className='text-[40px] md:text-5xl lg:text-6xl mt-4 font-bold '>
            <Typewriter
              options={{
                strings: stringsList,
                delay: 50,
                deleteSpeed: 25,
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </div>
      </div>
    </div>
  );
};
