function distance(num) {
  const sqrt = Math.sqrt(num)
  const thisSquareSize = Math.ceil(sqrt) | 1
  const prevSquareSize = thisSquareSize - 2
  const prevSquareTotal = prevSquareSize**2

  let sides = []
  for (let side = 0; side < 4; side++) {
    sides[side] = []
    for (let i = 0; i < thisSquareSize; i++) {
      if (side === 0 && i === 0) {
        sides[side].push(thisSquareSize**2);
      } else {
        sides[side].push(side*(thisSquareSize-1) + prevSquareTotal+i)
      }

    }
  }

  for (let s = 0; s < sides.length; s++) {
    for (let n = 0; n < sides[s].length; n++) {
      if (sides[s][n] === num) {
        return Math.floor(thisSquareSize/2) + Math.abs(n - Math.floor(thisSquareSize/2));
      }
    }
  }
}

test('example', () => {
  // expect(distance(1)).toBe(0);
  // expect(distance(2)).toBe(1);
  // expect(distance(3)).toBe(2);
  // expect(distance(4)).toBe(1);
  // expect(distance(5)).toBe(2);
  // expect(distance(6)).toBe(1);
  // expect(distance(7)).toBe(2);
  // expect(distance(8)).toBe(1);
  // expect(distance(9)).toBe(2);
  // expect(distance(10)).toBe(3);
  // expect(distance(11)).toBe(2);
  // expect(distance(12)).toBe(3);
  // expect(distance(13)).toBe(4);
  // expect(distance(23)).toBe(2);
  expect(distance(265149)).toBe(438);
})
