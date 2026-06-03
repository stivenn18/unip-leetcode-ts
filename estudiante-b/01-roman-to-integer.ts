/**
 * 01 - Roman to Integer
 * https://leetcode.com/problems/roman-to-integer/
 * Difficulty: Easy
 *
 * Convierte un número romano a entero.
 * Los símbolos romanos tienen valores fijos, pero cuando un símbolo
 * menor aparece antes de uno mayor, se resta en lugar de sumarse.
 * Ejemplo: IV = 4 (5 - 1), IX = 9 (10 - 1)
 *
 * Enfoque: Recorrer de derecha a izquierda — O(n) tiempo, O(1) espacio.
 * Si el valor actual es menor que el siguiente, restamos; si no, sumamos.
 */

function romanToInt(s: string): number {
  const values: Record<string, number> = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;

  for (let i = 0; i < s.length; i++) {
    const current = values[s[i]];
    const next = values[s[i + 1]];

    // Si el siguiente símbolo es mayor, restamos el actual
    if (next && current < next) {
      result -= current;
    } else {
      result += current;
    }
  }

  return result;
}

// --- Pruebas ---
console.log(romanToInt('III'));    // 3
console.log(romanToInt('LVIII')); // 58
console.log(romanToInt('MCMXCIV')); // 1994
console.log(romanToInt('IV'));    // 4
console.log(romanToInt('IX'));    // 9
