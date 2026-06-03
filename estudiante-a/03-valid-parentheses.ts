/**
 * 03 - Valid Parentheses
 * https://leetcode.com/problems/valid-parentheses/
 * Difficulty: Easy
 *
 * Dado un string con '(', ')', '{', '}', '[', ']',
 * determina si los paréntesis están correctamente cerrados y anidados.
 *
 * Enfoque: Stack (pila) — O(n) tiempo, O(n) espacio.
 * Apilamos cada apertura; al encontrar un cierre, verificamos que
 * coincida con el tope de la pila.
 */

function isValid(s: string): boolean {
  const stack: string[] = [];
  const pairs: Record<string, string> = {
    ')': '(',
    '}': '{',
    ']': '[',
  };

  for (const char of s) {
    if ('({['.includes(char)) {
      stack.push(char);
    } else {
      // Es un cierre: debe coincidir con el tope de la pila
      if (stack.pop() !== pairs[char]) return false;
    }
  }

  // La pila debe quedar vacía para que sea válido
  return stack.length === 0;
}

// --- Pruebas ---
console.log(isValid('()'));       // true
console.log(isValid('()[]{}')); // true
console.log(isValid('(]'));       // false
console.log(isValid('([)]'));     // false
console.log(isValid('{[]}'));     // true
