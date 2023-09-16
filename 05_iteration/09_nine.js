const mynums = [1, 2, 3]

// const myTotal = mynums.reduce(function (acc, currval) {
//     console.log(`${acc} and currval ${currval}`);
//     return acc + currval
// }, 0)

const myTotal = mynums.reduce( (acc, curr) => acc+curr, 0)

// console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "ys course",
        price: 2999
    },
    {
        itemName: "jns course",
        price: 2999
    },
    {
        itemName: "jdss course",
        price: 2999
    },
    {
        itemName: "jsdss course",
        price: 2999
    },
]

const priceTopay = shoppingCart.reduce( (acc, item) => acc + item.price, 0)

console.log(priceTopay);