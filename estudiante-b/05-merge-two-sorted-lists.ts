/**
 * 05 - Merge Two Sorted Lists
 * https://leetcode.com/problems/merge-two-sorted-lists/
 * Difficulty: Easy
 *
 * Une dos listas enlazadas ordenadas en una sola lista ordenada.
 * Retorna la cabeza de la lista combinada.
 *
 * Enfoque: Dos punteros con nodo dummy — O(n + m) tiempo, O(1) espacio.
 * Usamos un nodo ficticio al inicio para simplificar los casos borde,
 * y vamos enlazando el menor de los dos nodos actuales.
 */

class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val: number = 0, next: ListNode | null = null) {
    this.val = val;
    this.next = next;
  }
}

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  // Nodo dummy para evitar casos especiales al inicio
  const dummy = new ListNode(0);
  let current = dummy;

  while (list1 !== null && list2 !== null) {
    if (list1.val <= list2.val) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }
    current = current.next!;
  }

  // Adjuntamos lo que quede de la lista no vacía
  current.next = list1 ?? list2;

  return dummy.next;
}

// --- Helper para construir lista desde array ---
function buildList(arr: number[]): ListNode | null {
  if (arr.length === 0) return null;
  const head = new ListNode(arr[0]);
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }
  return head;
}

// --- Helper para imprimir lista ---
function printList(node: ListNode | null): string {
  const result: number[] = [];
  while (node) {
    result.push(node.val);
    node = node.next;
  }
  return result.join(' -> ');
}

// --- Pruebas ---
console.log(printList(mergeTwoLists(buildList([1, 2, 4]), buildList([1, 3, 4])))); // 1->1->2->3->4->4
console.log(printList(mergeTwoLists(buildList([]), buildList([]))));               // (vacío)
console.log(printList(mergeTwoLists(buildList([]), buildList([0]))));              // 0
