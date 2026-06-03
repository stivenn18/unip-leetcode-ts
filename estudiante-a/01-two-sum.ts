/**
 * 01 - Two Sum
 * https://leetcode.com/problems/two-sum/
 * Difficulty: Easy
 *
 * Dado un array de enteros y un target, retorna los índices
 * de los dos números que suman el target.
 *
 * Enfoque: Hash Map — O(n) tiempo, O(n) espacio.
 * Por cada número buscamos su complemento en el mapa antes de insertarlo,
 * evitando el doble bucle O(n²).
 */

function twoSum(nums: number[], target: number): number[] {
  const seen = new Map<number, number>(); // valor → índice

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (seen.has(complement)) {
      return [seen.get(complement)!, i];
    }

    seen.set(nums[i], i);
  }

  return []; // El enunciado garantiza que siempre existe solución
}

// --- Pruebas ---
console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
console.log(twoSum([3, 2, 4], 6));       // [1, 2]
console.log(twoSum([3, 3], 6));          // [0, 1]
