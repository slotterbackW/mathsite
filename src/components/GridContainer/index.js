import React, {
  useState, useCallback, useEffect, useRef,
} from 'react';

import Grid from '../Grid';
import './style.css';

const GridContainer = () => {
  const [size, setSize] = useState(5);
  const scrollTrapRef = useRef(null);

  useEffect(() => {
    const { height } = scrollTrapRef.current.getBoundingClientRect();
    scrollTrapRef.current.scrollTop = height * size - 1;
  }, []);

  const onScroll = useCallback(() => {
    const { scrollTop } = scrollTrapRef.current;
    const { height } = scrollTrapRef.current.getBoundingClientRect();
    const newSize = Math.ceil(scrollTop / height);
    setSize(newSize === 0 ? 1 : newSize);
  }, [scrollTrapRef]);

  return (
    <>
      <div
        className="scroll-trap-container"
        onScroll={onScroll}
        ref={scrollTrapRef}
      >
        <div className="scroll-trap-inner" />
      </div>
      <div className="grid-container">
        <Grid onScroll={onScroll} size={size} />
      </div>
    </>
  );
};

export default GridContainer;
