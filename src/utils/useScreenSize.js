import { useState, useEffect } from 'react';

const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if(screenSize.width>=1200){
    return 'lg'
  } else if(screenSize.width<1200 && screenSize.width>700){
    return 'md'
  } else if(screenSize.width<=700){
    return 'sm'
  }

};

export default useScreenSize;