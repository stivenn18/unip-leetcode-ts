/**
 * 05 - Maximum Subarray
 * https://leetcode.com/problems/maximum-subarray/
 * Difficulty: Medium
 *
 * Dado un array de enteros, encuentra el subarray contiguo
 * con la suma más grande y retorna esa suma.
 *
 * Enfoque: Algoritmo de Kadane — O(n) tiempo, O(1) espacio.
 * En cada posición decidimos: ¿extiendo el subarray anterior
 * o comienzo uno nuevo desde aquí?
 */

function maxSubArray(nums: number[]): number {
  let maxSum = nums[0];     // mejor suma encontrada hasta ahora
  let currentSum = nums[0]; // suma del subarray actual

  for (let i = 1; i < nums.length; i++) {
    // Si currentSum es negativo, es mejor empezar de nuevo desde nums[i]
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}

// --- Pruebas ---
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6  → [4,-1,2,1]
console.log(maxSubArray([1]));                                // 1
console.log(maxSubArray([5, 4, -1, 7, 8]));                  // 23
console.log(maxSubArray([-3, -1, -2]));                      // -1
