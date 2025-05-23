import { gridItems2 } from '@/data';
import { BentoGrid, BentoGridItem } from './ui/BentoGrid';

const Grid2 = () => {
  return (
    <section id='about'>
      <BentoGrid className='w-full py-5'>
        {gridItems2.map((item, i) => (
          <BentoGridItem
            id={item.id}
            key={i}
            title={item.title}
            description={item.description}
            // remove icon prop
            // remove original classname condition
            className={item.className}
            img={item.img}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
            spareImg={item.spareImg}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid2;
