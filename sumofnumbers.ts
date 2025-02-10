function sumFor(numbers: number[]): number {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}

function sumWhile(numbers: number[]): number {
    let sum = 0;
    let i = 0;
    while (i < numbers.length) {
        sum += numbers[i];
        i++;
    }
    return sum;
}

function sumRecursion(numbers: number[], index: number = 0): number {
    if (index >= numbers.length) {
        return 0;
    }
    return numbers[index] + sumRecursion(numbers, index + 1);
}

function sumFunction(numbers: number[]): number {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

// Testing the functions
console.log(sumFor([1, 2, 3, 4])); // Output: 10
console.log(sumWhile([1, 2, 3, 4])); // Output: 10
console.log(sumRecursion([1, 2, 3, 4])); // Output: 10
console.log(sumFunction([1, 2, 3, 4])); // Output: 10
