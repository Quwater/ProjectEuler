const sumOfMultiplesOfThreeAndFive = function(n) {
    let set = new Set(),
        res = 0;

    for (let num1 = 3; num1 < n; num1 += 3) {
        set.add(num1);
    }
    for (let num2 = 5; num2 < n; num2 += 5) {
        set.add(num2);
    }

    for (let i of set) {
        res += i;
    }
    return res;
};
console.log(sumOfMultiplesOfThreeAndFive(1000));
