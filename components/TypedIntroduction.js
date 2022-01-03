import React from 'react'
import Typed from 'typed.js'

export const TypedIntroduction = () => {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);
  // Create reference to store the Typed instance itself
  const typed = React.useRef(null);

  React.useEffect(() => {
    const options = {
        strings: [
        'Dendi Handian',
        'a Back-End Software Engineer',
        'Data Science &amp; Machine Learning Enthusiast'
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };

    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options);

    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy();
    }
  }, [])

  return (
    <div className='flex justify-center w-full text-center'>
        <h1 className='text-white md:text-3xl'>
          Hi, I am <span className='font-bold text-transparent bg-gradient-to-r bg-clip-text from-orange-300 to-red-800' style={{ whiteSpace: 'pre' }} ref={el} />
        </h1>
    </div>
  );
}