import { calculatePoints } from './calculateIslands'

const tests = {
   givenData: {
      points: [
         ['S', 'S', 'S', 'L', 'L'],
         ['S', 'W', 'W', 'W', 'L'],
         ['L', 'W', 'K', 'W', 'L'],
         ['F', 'W', 'W', 'F', 'F'],
         ['F', 'F', 'F', 'F', 'L'],
      ],
      crowns: [
         [0, 0, 0, 0, 0],
         [1, 0, 1, 1, 0],
         [1, 0, 0, 0, 1],
         [0, 0, 0, 1, 0],
         [0, 0, 1, 1, 0],
      ],
   },
   sevenXSeven: {
      points: [
         ['S', 'S', 'S', 'L', 'L', 'L', 'G'],
         ['S', 'W', 'W', 'W', 'L', 'L', 'G'],
         ['L', 'W', 'K', 'W', 'L', 'L', 'G'],
         ['F', 'W', 'W', 'F', 'F', 'L', 'G'],
         ['F', 'F', 'F', 'F', 'L', 'L', 'G'],
         ['F', 'F', 'F', 'F', 'L', 'L', 'G'],
         ['M', 'M', 'M', 'M', 'G', 'G', 'G'],
      ],
      crowns: [
         [0, 0, 0, 0, 0, 1, 0],
         [1, 0, 1, 1, 0, 1, 0],
         [1, 0, 0, 0, 1, 1, 0],
         [0, 0, 0, 1, 0, 1, 0],
         [0, 0, 1, 1, 0, 1, 0],
         [0, 0, 1, 1, 0, 1, 0],
         [0, 0, 1, 1, 0, 1, 0],
      ],
   },
   corners: {
      points: [
         ['F', 'W'],
         ['W', 'F'],
      ],
      crowns: [
         [1, 1],
         [1, 1],
      ],
   },
   corners3by3: {
      points: [
         ['F', 'W', 'F'],
         ['W', 'F', 'W'],
         ['F', 'W', 'F'],
      ],
      crowns: [
         [0, 1, 0],
         [1, 0, 1],
         [0, 1, 0],
      ],
   },
   unequal: {
      points: [
         ['F', 'W', 'F'],
         ['W', 'F', 'W'],
         ['F', 'W', 'F'],
      ],
      crowns: [
         [0, 1, 0],
         [1, 0, 1],
      ],
   },
}

it('it runs original test data', async () => {
   const { points, crowns } = tests.givenData
   expect(calculatePoints(points, crowns)).toBe(44)
})

it('it runs with 7x7', async () => {
   const { points, crowns } = tests.sevenXSeven
   expect(calculatePoints(points, crowns)).toBe(175)
})

it('it does not count an island for only corners touching', async () => {
   const { points, crowns } = tests.corners
   expect(calculatePoints(points, crowns)).toBe(4)
})

it('it does not count an island for only corners touching 3x3', async () => {
   const { points, crowns } = tests.corners3by3
   expect(calculatePoints(points, crowns)).toBe(4)
})

it('it does not run if the crowns size !== board size', async () => {
   const { points, crowns } = tests.unequal
   expect(calculatePoints(points, crowns)).toBe(0)
})
