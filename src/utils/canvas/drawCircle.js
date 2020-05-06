const drawCircle = (context, x, y, diameter) => {
  context.beginPath();
  context.arc(x, y, diameter / 2, 0, 2 * Math.PI);
  context.fill();
};

export default drawCircle;
