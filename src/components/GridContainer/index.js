import React, { useState, useCallback, useEffect, useRef } from "react";

import Grid from "../Grid";
import "./style.css";

const GridContainer = () => {
  const [size, setSize] = useState(5);
  const scrollTrapRef = useRef(null);

  useEffect(() => {
    const height = scrollTrapRef.current.getBoundingClientRect().height;
    scrollTrapRef.current.scrollTop = height * size - 1;
  }, []);

  const onScroll = useCallback(
    e => {
      const scrollTop = scrollTrapRef.current.scrollTop;
      const height = scrollTrapRef.current.getBoundingClientRect().height;
      const size = Math.ceil(scrollTop / height);
      setSize(size === 0 ? 1 : size);
    },
    [scrollTrapRef]
  );

  return (
    <>
      <div
        className="scroll-trap-container"
        onScroll={onScroll}
        ref={scrollTrapRef}
      >
        <div className="scroll-trap-inner"></div>
      </div>
      <div className="grid-container">
        <Grid onScroll={onScroll} size={size} />
      </div>
    </>
  );
};

export default GridContainer;
