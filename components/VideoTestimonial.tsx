import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import EmblaCarousel from './EmblaCarousel';
import { EmblaOptionsType } from 'embla-carousel';

const VideoTestimonial = () => {
  const OPTIONS: EmblaOptionsType = { loop: false };
  return (
    <div className='py-10 w-full flex flex-col items-center'>
      <EmblaCarousel slides={Array.from({ length: 5 })} options={OPTIONS} />
    </div>
  );
};

export default VideoTestimonial;
