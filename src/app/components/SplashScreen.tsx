import React, { useEffect } from 'react';
import Image from 'next/image'
import tl from '../../../assets/tl.svg'
import tl_full from '../../../assets/tl full.svg'
const SplashScreen: React.FC<{ onSplashEnd: () => void }> = ({ onSplashEnd }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onSplashEnd();
    }, 2000);

    return () => clearTimeout(timer);
  }, [onSplashEnd]);

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-200">
        <Image
            src= {tl}
            width= {150}
            height= {150}
            alt="Trust Lab Logo"
        />
        <Image
            src= {tl_full}
            width= {500}
            height= {500}
            alt="Trust Lab Logo"
            className='-m-20'
        />

      <h1 className="text-2xl text-center text-black">Security Operations Center</h1>
    </div>
  );
};

export default SplashScreen;
