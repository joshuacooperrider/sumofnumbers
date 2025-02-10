function sumFor(numbers) {
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}
function sumWhile(numbers) {
    var sum = 0;
    var i = 0;
    while (i < numbers.length) {
        sum += numbers[i];
        i++;
    }
    return sum;
}
function sumRecursion(numbers, index) {
    if (index === void 0) { index = 0; }
    if (index >= numbers.length) {
        return 0;
    }
    return numbers[index] + sumRecursion(numbers, index + 1);
}
function sumTheFunctionalWay(numbers) {
    return numbers.reduce(function (acc, curr) { return acc + curr; }, 0);
}
// Testing the functions
console.log(sumFor([1, 2, 3, 4])); // Output: 10
console.log(sumWhile([1, 2, 3, 4])); // Output: 10
console.log(sumRecursion([1, 2, 3, 4])); // Output: 10
console.log(sumTheFunctionalWay([1, 2, 3, 4])); // Output: 10
