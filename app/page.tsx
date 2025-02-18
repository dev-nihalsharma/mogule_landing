'use client';

import { navItems } from '@/data';

import Hero from '@/components/Hero';
import Grid1 from '@/components/Grid1';
import Footer from '@/components/Footer';
import Clients from '@/components/Clients';
import OurPortfolio from '@/components/RecentProjects';
import { FloatingNav } from '@/components/ui/FloatingNavbar';
import Services from '@/components/services';
import Grid2 from '@/components/Grid2';
import GetAQuote from '@/components/GetAQuote';

const Home = () => {
  return (
    <main className='relative bg-black-400 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5'>
      <div className='max-w-7xl w-full'>
        <FloatingNav navItems={navItems} />
        <Hero />
        <Services />
        <Grid1 />
        <OurPortfolio />
        <Grid2 />
        <Clients />
        <GetAQuote />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
