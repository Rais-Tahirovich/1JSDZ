// Разработайте функцию findLargest, которая принимает три числа и возвращает наибольшее из них.

function findLargest(a, b, c) {
    return Math.max(a, b, c);
}

console.log(findLargest(10, 20, 15));  // 20
console.log(findLargest(5, 5, 3));     // 5
console.log(findLargest(-1, -5, 0));   // 0