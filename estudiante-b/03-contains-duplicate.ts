/**
 * 03 - Contains Duplicate
 * https://leetcode.com/problems/contains-duplicate/
 * Difficulty: Easy
 *
 * Dado un array de enteros, retorna true si algún valor
 * aparece al menos dos veces, y false si todos son distintos.
 *
 * Enfoque: Set — O(n) tiempo, O(n) espacio.
 * Agregamos cada número a un Set; si ya existe, hay duplicado.
 * Más eficiente que ordenar el array (O(n log n)).
 */

function containsDuplicate(nums: number[]): boolean {
  const seen = new Set<number>();

  for (const num of nums) {
    if (seen.has(num)) return true;
    seen.add(num);
  }

  return false;
}

// --- Pruebas ---
console.log(containsDuplicate([1, 2, 3, 1]));       // true
console.log(containsDuplicate([1, 2, 3, 4]));       // false
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); // true
console.log(containsDuplicate([1]));                 // false
