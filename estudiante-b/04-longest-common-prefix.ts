/**
 * 04 - Longest Common Prefix
 * https://leetcode.com/problems/longest-common-prefix/
 * Difficulty: Easy
 *
 * Encuentra el prefijo común más largo entre un array de strings.
 * Si no existe ninguno, retorna "".
 *
 * Enfoque: Comparación vertical — O(n * m) tiempo, O(1) espacio.
 * Tomamos el primer string como referencia y comparamos
 * carácter a carácter con todos los demás.
 */

function longestCommonPrefix(strs: string[]): string {
  if (strs.length === 0) return '';

  const reference = strs[0];

  for (let i = 0; i < reference.length; i++) {
    const char = reference[i];

    // Comparamos este carácter con todos los demás strings
    for (let j = 1; j < strs.length; j++) {
      // Si el string es más corto o el carácter no coincide, cortamos aquí
      if (i >= strs[j].length || strs[j][i] !== char) {
        return reference.slice(0, i);
      }
    }
  }

  return reference;
}

// --- Pruebas ---
console.log(longestCommonPrefix(['flower', 'flow', 'flight'])); // "fl"
console.log(longestCommonPrefix(['dog', 'racecar', 'car']));    // ""
console.log(longestCommonPrefix(['interview', 'inter', 'internal'])); // "inter"
console.log(longestCommonPrefix(['a']));                         // "a"
