const intersect = require('../src/intersection-of-two-arrays-ii')

describe('intersection of two arrays ii', () => {
  it('1', () => {
    expect(intersect([1,2,2,1], [2,2])).toEqual([2,2])
  })

  it('2', () => {
    expect(intersect([1,1], [1])).toEqual([1])
  })

  it('3', () => {
    const a = [61,24,20,58,95,53,17,32,45,85,70,20,83,62,35,89,5,95,12,86,58,77,30,64,46,13,5,92,67,40,20,38,31,18,89,85,7,30,67,34,62,35,47,98,3,41,53,26,66,40,54,44,57,46,70,60,4,63,82,42,65,59,17,98,29,72,1,96,82,66,98,6,92,31,43,81,88,60,10,55,66,82,0,79,11,81]
    const b = [5,25,4,39,57,49,93,79,7,8,49,89,2,7,73,88,45,15,34,92,84,38,85,34,16,6,99,0,2,36,68,52,73,50,77,44,61,48]
    expect(intersect(a, b)).toEqual([0,4,5,6,7,34,38,44,45,57,61,77,79,85,88,89,92])
  })
})
