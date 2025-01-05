import React, { useEffect, useState } from 'react'
import Entry from './components/Entry'
import Arch from './components/Arch'
import ReasonToJoin from './components/ReasonToJoin'
import FAQ from './components/FAQ'
import Container from './components/Container'
import Trending from './components/Trending'
import Footer from './components/Footer'

const Landing = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.addEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id='landing' className={'w-full relative'}>

      <Entry />
      <Arch />
      <Container>
        <Trending scrollY={scrollY} />
        <ReasonToJoin />
        <FAQ />
      </Container>
      <Footer />

    </div>
  )
}

export default Landing
