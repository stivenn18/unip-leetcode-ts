/**
 * 04 - Climbing Stairs
 * https://leetcode.com/problems/climbing-stairs/
 * Difficulty: Easy
 *
 * Estás subiendo una escalera de n peldaños. Puedes subir 1 o 2 peldaños
 * a la vez. ¿De cuántas formas distintas puedes llegar al tope?
 *
 * Enfoque: Programación Dinámica (Fibonacci) — O(n) tiempo, O(1) espacio.
 * climbStairs(n) = climbStairs(n-1) + climbStairs(n-2)
 * Solo necesitamos los dos valores anteriores, no un array completo.
 */

function climbStairs(n: number): number {
  if (n <= 2) return n;

  let prev1 = 1; // formas para llegar al peldaño 1
  let prev2 = 2; // formas para llegar al peldaño 2

  for (let i = 3; i <= n; i++) {
    const current = prev1 + prev2;
    prev1 = prev2;
    prev2 = current;
  }

  return prev2;
}

// --- Pruebas ---
console.log(climbStairs(1));  // 1
console.log(climbStairs(2));  // 2
console.log(climbStairs(3));  // 3
console.log(climbStairs(5));  // 8
console.log(climbStairs(10)); // 89
