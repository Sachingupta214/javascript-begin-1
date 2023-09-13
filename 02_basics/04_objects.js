// const tinderUser = new object()      this is single ton object

const tinderUser = {}     // this is non single ton object

tinderUser.id = "123abc"

tinderUser.name = "sammy"

tinderUser.isLoggedIn = false

console.log(tinderUser);