const {
  maxArea,
} = require('@/双指针/盛最多水的容器')

describe('盛最多水的容器', () => {
  it('测试边界值', () => {
    // 'height' to have 2 <= size <= 10000
    expect(maxArea([1, 1])).toBe(1)
    expect(maxArea([3, 5])).toBe(3)
  })
  it('测试结果', () => {
    expect(maxArea([1,8,6,2,5,4,8,3,7])).toBe(49)
    expect(maxArea([4,3,2,1,4])).toBe(16)
    expect(maxArea([1,2,1])).toBe(2)
    expect(maxArea([3,5,6,3,5,2,43,42,32,31,3,8,22,3,1])).toBe(132)
  })
})