function toggleColumnPinning(column: any) {
  const pinState = column.getIsPinned();

  if (!pinState) {
    column.pin('right');
  } else if (pinState === 'right') {
    column.pin('left');
  } else {
    column.pin(false);
  }
}

export { toggleColumnPinning };
