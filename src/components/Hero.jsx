import React from 'react';
import {styles} from "../styles";


const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center item-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#955eff]"/>
          <div className="w-1 sm:h-80 h-40 voilet-gradient"/>
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'am <span className="text-[#915eff]">Avinash</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}> Elevate 🚀 your business with modern, responsive,<br className="sm:block hidden"/> and feature-rich web solutions with My expertise..</p>
          <div className="relative top-[20px] max-w-lg flex justify-center">
          <img src="./src/assets/img.png" alt="img" />
         </div>
        </div>
      </div>
    </section>
  )
}

export default Hero