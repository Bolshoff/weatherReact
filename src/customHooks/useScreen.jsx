

import {useEffect, useState} from 'react';

 function useScreen(initSize){
  const [width, setWidth] = useState(window.innerWidth);
  const handleResize = (e)=>{
    setWidth(e.target.innerWidth);
  }
   useEffect(() => {
     window.addEventListener('resize',handleResize);
     return () => {
       window.removeEventListener('resize', handleResize);
     };
   }, [handleResize]);
  const isMobile = width < 600 && width >0;
  const isDesktop = width > 600;

 return {width, isDesktop, isMobile};
}

   export default useScreen;