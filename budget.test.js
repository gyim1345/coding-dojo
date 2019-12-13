
const ascending = (a, b) => a - b;

const budgetAllocation = (requestedBudgetArr, maxBudget) => {
    let sum = 0;
    let count = 0;

    requestedBudgetArr.sort(ascending).forEach(i => {
        sum += i;

        if (sum <= maxBudget) {
            count += 1;
        }
    })

    return count;
}

test('budgetAllocation', () => {
    expect(budgetAllocation([1, 3, 2, 5, 4], 9)).toBe(3);
    expect(budgetAllocation([2, 2, 3, 3], 10)).toBe(4);

});