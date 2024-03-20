import React from 'react'
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Testimonial } from './components/Testimonial';
import { About } from './components/About';
import { Work } from './components/Work';
import { Footer } from './components/Footer';
import { Newsletter } from './components/Newsletter';
import { Journey } from './components/Journey';
import { Trusties } from './components/Trusties';
import { Jobs } from './components/Jobs';
import { Userjrny } from './components/Userjrny';


const App = () => {
  return (
    <div className="font-josefin-sans bg-[#FEF9F5]">
      <Navbar />
      <Hero />
      <About/>
      <Work/>
      <Journey/>
      <Trusties/>
      <Jobs/>
      <Userjrny/>
      <Testimonial/>
      <Newsletter/>
      <Footer/>
    </div>
  );
}

export default App
