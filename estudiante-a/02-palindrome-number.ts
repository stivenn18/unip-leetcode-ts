/**
 * 02 - Palindrome Number
 * https://leetcode.com/problems/palindrome-number/
 * Difficulty: Easy
 *
 * Determina si un entero es un palíndromo (se lee igual al derecho y al revés).
 * Los números negativos nunca son palíndromos.
 *
 * Enfoque: Revertir solo la mitad del número — O(log n) tiempo, O(1) espacio.
 * Comparamos la mitad revertida con la otra mitad, evitando overflow.
 */

function isPalindrome(x: number): boolean {
  // Negativos y múltiplos de 10 (excepto 0) nunca son palíndromos
  if (x < 0 || (x % 10 === 0 && x !== 0)) return false;

  let reversed = 0;
  let remaining = x;

  // Revertimos solo la mitad derecha
  while (remaining > reversed) {
    reversed = reversed * 10 + (remaining % 10);
    remaining = Math.floor(remaining / 10);
  }

  // Para longitud par: remaining === reversed
  // Para longitud impar: descartamos el dígito central con Math.floor(reversed / 10)
  return remaining === reversed || remaining === Math.floor(reversed / 10);
}

// --- Pruebas ---
console.log(isPalindrome(121));   // true
console.log(isPalindrome(-121));  // false
console.log(isPalindrome(10));    // false
console.log(isPalindrome(1221));  // true
