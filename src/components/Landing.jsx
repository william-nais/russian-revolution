import React, { useEffect } from 'react'

import gsap from 'gsap';


const Landing = () => {

  // useEffect(() => {
  //   gsap.from('.title', {
  //     duration: 1.3,
  //     text: "The Russian Revolution",
  //     ease: "none"
  //   })
  // }, []);

  {/* Scrolling Effect */}
  useEffect(() => {
    const handleScroll = () => {
      const background = document.querySelector('.background');
      const scrolled = window.scrollY;
      const move = scrolled / 2.7; // Move at half the speed

      background.style.transform = `translateY(${move}px)`;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  

  return (
    <>
      <div className="cover"></div>
      <div className="background" style={{ backgroundImage: `url(${'https://static.themoscowtimes.com/image/article_1360/d0/6355e1e36505412291792eb6e7f68d09.jpg'})`,backgroundSize: 'cover' }}></div>
      <header className="header">
        <h1 className="title">Russian Revolution</h1>
      </header>
    </>
  )
}

export default Landing