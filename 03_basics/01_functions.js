function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("G");
    console.log("H");
    console.log("E");
    console.log("S");
    console.log("T");
}

// sayMyName()

// function addMyTwoNumbers(number1, number2){
//     console.log(number1+number2);
// }

function addMyTwoNumbers(number1, number2){

    // let result = number1 + number2  
    // return result
    return number1 + number2
    
}

// const result = addMyTwoNumbers(11, 2345)
// console.log("result", result);

function loginUserMessage(username){
    if(!undefined){
        // console.log("please enter a username");
        // return
    }
//     return `${username} just logged in`
 }


// console.log(loginUserMessage("Hitesh"))

// console.log(loginUserMessage())

function calculateCartPrice(...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500))

// const user = {
//      username: "sachin Gupta",
//      price: 999
// }

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)

handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 600, 800]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 600, 800]));