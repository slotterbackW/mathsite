import React, {
  useState, useCallback, useEffect, useRef,
} from 'react';
import { createComponent } from 'react-fela';

import Grid from '../Grid';

import { PADDING } from '../Grid/styleConstants';

const MAX_NUM_COLUMNS = 20;

const ScrollTrapContainer = createComponent(
  () => ({
    position: 'absolute',
    marginLeft: '70px',
    width: '100%',
    height: '100%',
    maxHeight: '100%',
    overflowY: 'scroll',
    zIndex: '-1',
  }),
  'div',
  ['onScroll'],
);

const ScrollTrap = createComponent(
  () => ({
    width: '100%',
    height: `calc(100% * ${MAX_NUM_COLUMNS + 1})`,
  }),
  'div',
);

const StyledGridContainer = createComponent(
  () => ({
    position: 'absolute',
    padding: `${PADDING}px`,
    zIndex: '-2',
  }),
  'div',
);

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
      <ScrollTrapContainer innerRef={scrollTrapRef} onScroll={onScroll}>
        <ScrollTrap />
      </ScrollTrapContainer>
      <StyledGridContainer>
        <Grid onScroll={onScroll} size={size} />
      </StyledGridContainer>
    </>
  );
};

export default GridContainer;
