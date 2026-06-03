/**
 * 02 - Best Time to Buy and Sell Stock
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 * Difficulty: Easy
 *
 * Dado un array donde prices[i] es el precio de una acción el día i,
 * encuentra la ganancia máxima posible comprando un día y vendiendo después.
 * Si no hay ganancia posible, retorna 0.
 *
 * Enfoque: Un solo recorrido — O(n) tiempo, O(1) espacio.
 * Mantenemos el precio mínimo visto hasta ahora y calculamos
 * la ganancia en cada paso.
 */

function maxProfit(prices: number[]): number {
  let minPrice = Infinity;
  let maxGain = 0;

  for (const price of prices) {
    if (price < minPrice) {
      // Encontramos un precio más bajo para comprar
      minPrice = price;
    } else {
      // Calculamos ganancia si vendiéramos hoy
      maxGain = Math.max(maxGain, price - minPrice);
    }
  }

  return maxGain;
}

// --- Pruebas ---
console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 5  (compra en 1, vende en 6)
console.log(maxProfit([7, 6, 4, 3, 1]));     // 0  (precios solo bajan)
console.log(maxProfit([2, 4, 1]));            // 2
console.log(maxProfit([1, 2]));               // 1
