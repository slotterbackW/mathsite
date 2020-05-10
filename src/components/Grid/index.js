import React, { useLayoutEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { createComponent } from 'react-fela';

import { drawLine } from '../../utils/canvas';

import {
  GRID_LINE_WIDTH,
  AXIS_LINE_WIDTH,
  AXIS_LABEL_PADDING_FROM_END,
  AXIS_LABEL_PADDING_FROM_AXIS,
  AXIS_NUM_PADDING,
  AXIS_TICK_SIZE,
  PADDING,
} from './styleConstants';

const GridCanvas = createComponent(
  () => ({
    width: '100%',
    height: '100%',
  }),
  'canvas',
);

const Grid = ({ size }) => {
  const canvasRef = useRef(null);

  useLayoutEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    // Different from canvas.width and canvas.height
    let { height, width } = canvas.getBoundingClientRect();
    height -= PADDING * 2;
    width -= PADDING * 2;
    const maxCanvasSize = Math.min(height, width);

    // Grid lines
    const increment = maxCanvasSize / (size * 2);
    for (
      let point = increment;
      Math.floor(point) < Math.floor(maxCanvasSize);
      point += increment
    ) {
      context.lineWidth = GRID_LINE_WIDTH;
      if (Math.floor(point) === Math.floor(maxCanvasSize / 2)) {
        context.lineWidth = AXIS_LINE_WIDTH;
      }
      // horizontal lines
      drawLine(
        context,
        width / 2 - maxCanvasSize / 2,
        point + PADDING,
        width / 2 + maxCanvasSize / 2,
        point + PADDING,
      );

      // vertical lines
      drawLine(
        context,
        width / 2 - maxCanvasSize / 2 + point,
        height / 2 - maxCanvasSize / 2 + PADDING,
        width / 2 - maxCanvasSize / 2 + point,
        height / 2 + maxCanvasSize / 2 + PADDING,
      ); // vertical lines
    }

    // X axis label
    context.font = 'normal 16px sans-serif';
    context.textBaseline = 'middle';
    context.fillText(
      'X',
      width / 2 + maxCanvasSize / 2 - AXIS_LABEL_PADDING_FROM_END,
      height / 2 - AXIS_LABEL_PADDING_FROM_AXIS,
    );

    // Y axis label
    context.font = 'normal 16px sans-serif';
    context.textBaseline = 'middle';
    context.fillText(
      'Y',
      width / 2 - AXIS_LABEL_PADDING_FROM_END - 8,
      height / 2 - maxCanvasSize / 2 + AXIS_LABEL_PADDING_FROM_AXIS + PADDING,
    );

    // X axis ticks and labels
    context.font = 'normal 14px sans-serif';
    context.textAlign = 'center';
    context.textBaseline = 'top';
    for (let x = 0; x <= size * 2; x += 1) {
      if (x - size !== 0) {
        context.fillText(
          `${x - size}`,
          width / 2 - maxCanvasSize / 2 + x * increment,
          height / 2 + AXIS_NUM_PADDING + PADDING,
        );

        context.lineWidth = 1.5;
        drawLine(
          context,
          width / 2 - maxCanvasSize / 2 + x * increment,
          height / 2 - AXIS_TICK_SIZE + PADDING,
          width / 2 - maxCanvasSize / 2 + x * increment,
          height / 2 + AXIS_TICK_SIZE + PADDING,
        );
      }
    }

    // Y axis ticks and labels
    context.font = 'normal 14px sans-serif';
    context.textAlign = 'start';
    context.textBaseline = 'middle';
    for (let y = 0; y <= size * 2; y += 1) {
      if (y - size !== 0) {
        context.fillText(
          `${size - y}`,
          width / 2 + AXIS_NUM_PADDING,
          y * increment + PADDING,
        );

        context.lineWidth = 1.5;
        drawLine(
          context,
          width / 2 - AXIS_TICK_SIZE,
          y * increment + PADDING,
          width / 2 + AXIS_TICK_SIZE,
          y * increment + PADDING,
        );
      }
    }
  }, [size]);

  return <GridCanvas innerRef={canvasRef} />;
};

Grid.propTypes = {
  size: PropTypes.number.isRequired,
};

export default Grid;
