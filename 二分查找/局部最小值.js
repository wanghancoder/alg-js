/**
 * 局部最小值的定义：
 * 1. 对于索引为0的数，如果它小于索引1位置的数，它就是局部最小
 * 2. 对于索引为length-1的数，如果它小于索引length-2位置的数，它就是局部最小
 * 3. 其它数要小于左右两边的数
 */

// 对于数组arr，其相邻数一定不相等，求一个局部最小值