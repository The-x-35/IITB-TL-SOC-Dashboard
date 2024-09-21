import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import tl from '../../../assets/tl.svg';
import tl_full from '../../../assets/tl full.svg';

const SplashScreen: React.FC<{ onSplashEnd: () => void }> = ({ onSplashEnd }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(onSplashEnd, 500); 
    }, 2500);

    return () => clearTimeout(timer);
  }, [onSplashEnd]);

  return (
    <div
      className={`flex flex-col justify-center items-center h-screen w-screen bg-white transition-all duration-1000 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}
    >
      <Image
        src={tl}
        width={150}
        height={150}
        alt="Trust Lab Logo"
        className={`mr-2 animate-zoom-in ${fadeOut ? 'scale-100' : 'scale-50'}`}
      />
      <Image
        src={tl_full}
        width={600}
        height={600}
        alt="Trust Lab Logo"
        className={`-my-20 animate-zoom-in ${fadeOut ? 'scale-100' : 'scale-50'}`}
      />
      <h1 className={`text-2xl text-center text-black animate-zoom-in ${fadeOut ? 'scale-100' : 'scale-50'} font-bold`}>
        Security Operations Center
      </h1>
    </div>
  );
};

export default SplashScreen;
